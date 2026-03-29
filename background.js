const LANGUAGES = {
  'ru': 'Русский',
  'en': 'English',
  'es': 'Español',
  'fr': 'Français',
  'de': 'Deutsch',
  'zh-CN': '中文'
};

const DEFAULT_SETTINGS = {
  sourceLang: 'en',
  targetLang: 'ru'
};

chrome.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === 'install') {
    await chrome.storage.sync.set(DEFAULT_SETTINGS);
    await chrome.storage.local.set({ historyByLang: {} });
  } else if (details.reason === 'update') {
    const settings = await chrome.storage.sync.get(DEFAULT_SETTINGS);
    if (!settings.sourceLang || !settings.targetLang) {
      await chrome.storage.sync.set(DEFAULT_SETTINGS);
    }
    
    const history = await chrome.storage.local.get({ historyByLang: {} });
    if (!history.historyByLang) {
      await chrome.storage.local.set({ historyByLang: {} });
    }
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Background: received message:', request.action);
  
  if (request.action === 'ping') {
    console.log('Background: ping received');
    sendResponse({ success: true, message: 'pong' });
    return true;
  } else if (request.action === 'translate') {
    handleTranslateRequest(request.text, request.sourceLang, request.targetLang, sendResponse);
    return true;
  } else if (request.action === 'getAudio') {
    handleAudioRequest(request.text, request.lang, sendResponse);
    return true;
  } else if (request.action === 'saveToHistory') {
    saveToHistory(request.original, request.translation, request.sourceLang, request.targetLang, request.category, request.source, request.spanishWord);
    sendResponse({ success: true });
    return true;
  } else if (request.action === 'getHistory') {
    getHistory(sendResponse);
    return true;
  } else if (request.action === 'clearHistory') {
    clearHistory(sendResponse);
    return true;
  } else if (request.action === 'updateHistory') {
    updateHistory(request.historyByLang, sendResponse);
    return true;
  } else if (request.action === 'getSettings') {
    getSettings(sendResponse);
    return true;
  } else if (request.action === 'saveSettings') {
    saveSettings(request.settings, sendResponse);
    return true;
  } else if (request.action === 'getCategories') {
    getCategories(sendResponse);
    return true;
  } else if (request.action === 'addCategory') {
    addCategory(request.category, sendResponse);
    return true;
  } else if (request.action === 'searchInLearnData') {
    searchInLearnData(request.query, request.dataType, sendResponse);
    return true;
  } else if (request.action === 'deleteCategory') {
    deleteCategory(request.category, sendResponse);
    return true;
  } else if (request.action === 'renameCategory') {
    renameCategory(request.oldCategory, request.newCategory, sendResponse);
    return true;
  } else if (request.action === 'getTags') {
    getTags(sendResponse);
    return true;
  } else if (request.action === 'addTag') {
    addTag(request.tag, sendResponse);
    return true;
  } else if (request.action === 'deleteTag') {
    deleteTag(request.tag, sendResponse);
    return true;
  } else if (request.action === 'deleteLangPair') {
    (async () => {
      await deleteLangPair(request.langPair, sendResponse);
    })();
    return true;
  } else if (request.action === 'renameTag') {
    (async () => {
      await renameTag(request.oldTag, request.newTag, sendResponse);
    })();
    return true;
  }
});

async function handleTranslateRequest(text, sourceLang, targetLang, sendResponse) {
  try {
    if (!sourceLang || !targetLang) {
      const settings = await chrome.storage.sync.get(DEFAULT_SETTINGS);
      sourceLang = sourceLang || settings.sourceLang || DEFAULT_SETTINGS.sourceLang;
      targetLang = targetLang || settings.targetLang || DEFAULT_SETTINGS.targetLang;
    }
    
    const result = await translateText(text, sourceLang, targetLang);
    
    sendResponse({
      success: true,
      translation: result.translation,
      sourceLang: result.detectedSourceLang || sourceLang,
      targetLang: targetLang
    });
  } catch (error) {
    sendResponse({
      success: false,
      error: error.message
    });
  }
}

async function translateText(text, sourceLang, targetLang) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Translation request failed');
    }
    
    const data = await response.json();
    
    if (!data || !data[0] || !data[0][0] || !data[0][0][0]) {
      throw new Error('Invalid translation response');
    }
    
    let translatedText = '';
    for (let i = 0; i < data[0].length; i++) {
      if (data[0][i][0]) {
        translatedText += data[0][i][0];
      }
    }
    
    let detectedSourceLang = null;
    if (sourceLang === 'auto' && data[2]) {
      detectedSourceLang = data[2];
    }
    
    return {
      translation: translatedText,
      detectedSourceLang: detectedSourceLang
    };
  } catch (error) {
    throw new Error('Translation failed: ' + error.message);
  }
}

async function getSettings(sendResponse) {
  const settings = await chrome.storage.sync.get(DEFAULT_SETTINGS);
  sendResponse({ 
    settings: {
      sourceLang: settings.sourceLang || DEFAULT_SETTINGS.sourceLang,
      targetLang: settings.targetLang || DEFAULT_SETTINGS.targetLang
    },
    languages: LANGUAGES
  });
}

async function handleAudioRequest(text, lang, sendResponse) {
  try {
    const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${lang}&client=gtx&q=${encodeURIComponent(text)}`;
    
    const response = await fetch(audioUrl);
    
    if (!response.ok) {
      throw new Error('Failed to fetch audio');
    }
    
    const blob = await response.blob();
    const reader = new FileReader();
    
    reader.onloadend = () => {
      sendResponse({
        success: true,
        audioData: reader.result
      });
    };
    
    reader.onerror = () => {
      sendResponse({
        success: false,
        error: 'Failed to read audio data'
      });
    };
    
    reader.readAsDataURL(blob);
  } catch (error) {
    sendResponse({
      success: false,
      error: error.message
    });
  }
}

async function saveToHistory(original, translation, sourceLang, targetLang, category = null, source = null, spanishWord = null) {
  const result = await chrome.storage.local.get({ historyByLang: {} });
  const historyByLang = result.historyByLang || {};
  
  let langPair = `${sourceLang}-${targetLang}`;
  console.log('🔥 DEFAULT LANGPAIR:', langPair);
  
  if (category === 'ES-RU-L') {
    langPair = 'es-ru-l';
    console.log('🔥 CHANGED TO es-ru-l (ES-RU-L)');
  } else if (category === 'EN-RU-L') {
    langPair = 'en-ru-l';
    console.log('🔥 CHANGED TO en-ru-l (EN-RU-L)');
  } else {
    console.log('🔥 CATEGORY NOT RECOGNIZED, USING DEFAULT:', langPair);
  }
  
  console.log('🔥 FINAL LANGPAIR:', langPair);
  
  // Проверяем текущее состояние storage
  console.log('🔥 CURRENT STORAGE STATE:', JSON.stringify(historyByLang, null, 2));
  console.log('🔥 AVAILABLE KEYS:', Object.keys(historyByLang));
  
  // Если это EN-RU-L, очищаем только старые записи с неправильными ID
  if (category === 'EN-RU-L' && historyByLang[langPair]) {
    const hasInvalidIds = historyByLang[langPair].some(item => !item.id || typeof item.id !== 'number' || isNaN(item.id));
    if (hasInvalidIds) {
      console.log('🔥 FOUND INVALID IDs, CLEANING ONLY OLD RECORDS');
      // Очищаем только записи с неправильными ID
      historyByLang[langPair] = historyByLang[langPair].filter(item => item.id && typeof item.id === 'number' && !isNaN(item.id));
      console.log('🔥 KEPT', historyByLang[langPair].length, 'VALID RECORDS');
    }
  }
  
  // Удаляем старые данные с category EN-RU-L из en-ru чтобы избежать дублирования
  if (category === 'EN-RU-L' && historyByLang['en-ru']) {
    const originalLength = historyByLang['en-ru'].length;
    historyByLang['en-ru'] = historyByLang['en-ru'].filter(item => item.category !== 'EN-RU-L');
    const filteredCount = originalLength - historyByLang['en-ru'].length;
    if (filteredCount > 0) {
      console.log(`🔥 CLEANED ${filteredCount} OLD EN-RU-L ITEMS FROM en-ru`);
    }
  }
  
  if (!historyByLang[langPair]) {
    historyByLang[langPair] = [];
    console.log('🔥 CREATED NEW ARRAY FOR:', langPair);
  }
  
  const existingIndex = historyByLang[langPair].findIndex(item => 
    item.original === original && item.translation === translation
  );
  
  if (existingIndex !== -1) {
    const existingEntry = historyByLang[langPair][existingIndex];
    // Убедимся что у существующей записи есть ID
    if (!existingEntry.id || typeof existingEntry.id !== 'number') {
      existingEntry.id = Date.now();
      console.log('🔥 FIXED MISSING ID FOR EXISTING ENTRY:', existingEntry.id);
    }
    historyByLang[langPair].splice(existingIndex, 1);
    existingEntry.timestamp = new Date().toISOString();
    historyByLang[langPair].unshift(existingEntry);
  } else {
    const newEntry = {
      id: Date.now(), // Уникальный ID (целое число)
      original,
      translation,
      sourceLang,
      targetLang,
      timestamp: new Date().toISOString(),
      source,
      status: 'new', // Статус по умолчанию
      spanishWord: spanishWord || original // Если spanishWord null, используем original
    };
    
    console.log('🆕 Creating new entry with ID:', newEntry.id);
    console.log('🆕 SPANISH WORD BEING SAVED:', newEntry.spanishWord);
    console.log('🆕 New entry:', newEntry);
    
    historyByLang[langPair].unshift(newEntry);
  }
  
  if (historyByLang[langPair].length > 1000) {
    historyByLang[langPair].splice(1000);
  }
  
  console.log('🔥 SAVING TO STORAGE...');
  await chrome.storage.local.set({ historyByLang: historyByLang });
  console.log('✅ SAVED SUCCESSFULLY!');
  console.log('✅ STORAGE KEYS AFTER SAVE:', Object.keys(historyByLang));
  console.log('✅ ITEMS IN', langPair + ':', historyByLang[langPair]?.length || 0);
  console.log('✅ FIRST ITEM IN', langPair + ':', historyByLang[langPair]?.[0] || 'NONE');
}

async function getHistory(sendResponse) {
  const result = await chrome.storage.local.get({ historyByLang: {} });
  sendResponse({ historyByLang: result.historyByLang || {} });
}

async function clearHistory(sendResponse) {
  await chrome.storage.local.set({ historyByLang: {} });
  sendResponse({ success: true });
}

async function updateHistory(historyByLang, sendResponse) {
  await chrome.storage.local.set({ historyByLang: historyByLang });
  sendResponse({ success: true });
}

async function getCategories(sendResponse) {
  const result = await chrome.storage.local.get({ categories: [] });
  sendResponse({ categories: result.categories || [] });
}

async function addCategory(category, sendResponse) {
  const result = await chrome.storage.local.get({ categories: [] });
  const categories = result.categories || [];
  
  if (!categories.includes(category)) {
    categories.push(category);
    await chrome.storage.local.set({ categories });
  }
  
  sendResponse({ success: true, categories });
}

async function deleteCategory(category, sendResponse) {
  const result = await chrome.storage.local.get({ categories: [] });
  let categories = result.categories || [];
  
  categories = categories.filter(cat => cat !== category);
  await chrome.storage.local.set({ categories: categories });
  
  sendResponse({ success: true, categories: categories });
}

async function renameCategory(oldCategory, newCategory, sendResponse) {
  const result = await chrome.storage.local.get({ categories: [], historyByLang: {} });
  let categories = result.categories || [];
  let historyByLang = result.historyByLang || {};
  
  const index = categories.indexOf(oldCategory);
  if (index !== -1) {
    categories[index] = newCategory;
  }
  
  for (const langPair in historyByLang) {
    historyByLang[langPair] = historyByLang[langPair].map(item => {
      if (item.category === oldCategory) {
        return { ...item, category: newCategory };
      }
      return item;
    });
  }
  
  await chrome.storage.local.set({ 
    categories: categories,
    historyByLang: historyByLang
  });
  
  sendResponse({ success: true, categories: categories });
}

async function saveSettings(settings, sendResponse) {
  await chrome.storage.sync.set({
    sourceLang: settings.sourceLang,
    targetLang: settings.targetLang
  });
  sendResponse({ success: true });
}

async function getTags(sendResponse) {
  const result = await chrome.storage.local.get({ tags: [] });
  sendResponse({ tags: result.tags || [] });
}

async function addTag(tag, sendResponse) {
  const result = await chrome.storage.local.get({ tags: [] });
  const tags = result.tags || [];
  
  if (!tags.includes(tag)) {
    tags.push(tag);
    await chrome.storage.local.set({ tags: tags });
  }
  
  sendResponse({ success: true, tags: tags });
}

async function deleteTag(tag, sendResponse) {
  const result = await chrome.storage.local.get({ tags: [] });
  let tags = result.tags || [];
  
  tags = tags.filter(t => t !== tag);
  await chrome.storage.local.set({ tags: tags });
  
  sendResponse({ success: true, tags: tags });
}

async function renameTag(oldTag, newTag, sendResponse) {
  const result = await chrome.storage.local.get({ tags: [], historyByLang: {} });
  let tags = result.tags || [];
  let historyByLang = result.historyByLang || {};
  
  const index = tags.indexOf(oldTag);
  if (index !== -1) {
    tags[index] = newTag;
  }
  
  for (const langPair in historyByLang) {
    historyByLang[langPair] = historyByLang[langPair].map(item => {
      if (item.tags && item.tags.includes(oldTag)) {
        const updatedTags = item.tags.map(tag => tag === oldTag ? newTag : tag);
        return { ...item, tags: updatedTags };
      }
      return item;
    });
  }
  
  await chrome.storage.local.set({ 
    tags: tags,
    historyByLang: historyByLang
  });
  
  sendResponse({ success: true, tags: tags });
}

async function deleteLangPair(langPair, sendResponse) {
  try {
    const result = await chrome.storage.local.get({ historyByLang: {} });
    const historyByLang = result.historyByLang || {};
    
    console.log('Deleting lang pair:', langPair);
    console.log('Available lang pairs before:', Object.keys(historyByLang));
    
    if (historyByLang[langPair]) {
      const deletedCount = historyByLang[langPair].length;
      delete historyByLang[langPair];
      
      console.log('Lang pairs after delete:', Object.keys(historyByLang));
      
      await chrome.storage.local.set({ historyByLang });
      
      sendResponse({ success: true, deletedCount });
    } else {
      console.log('Lang pair not found:', langPair);
      sendResponse({ success: true, deletedCount: 0 });
    }
  } catch (error) {
    console.error('Error deleting language pair:', error);
    sendResponse({ success: false, error: error.message });
  }
}

// Кэш для данных
let wordsCache = null;
let phrasesCache = null;

// Инициализация данных при старте
async function initializeSearchData() {
  try {
    // Проверяем, есть ли данные в storage
    const result = await chrome.storage.local.get(['learnWordsData', 'learnPhrasesData']);
    
    if (result.learnWordsData && result.learnPhrasesData) {
      wordsCache = result.learnWordsData;
      phrasesCache = result.learnPhrasesData;
      return;
    }
    
    // Если данных нет, загружаем и сохраняем
    await loadAndCacheData();
  } catch (error) {
  }
}

async function loadAndCacheData() {
  try {
    // Загружаем слова
    const wordsResponse = await fetch(chrome.runtime.getURL('learn-es-data.js'));
    const wordsText = await wordsResponse.text();
    
    // Простое извлечение данных через regex
    const wordsResults = [];
    const wordBlocks = wordsText.split(/\n\s*{\s*id:/);
    
    for (let i = 1; i < wordBlocks.length; i++) {
      const block = wordBlocks[i];
      const wordMatch = block.match(/word:\s*"([^"]+)"/);
      const translationMatch = block.match(/translation:\s*"([^"]+)"/);
      const categoryMatch = block.match(/category:\s*"([^"]+)"/);
      
      if (wordMatch && translationMatch) {
        wordsResults.push({
          word: wordMatch[1],
          translation: translationMatch[1],
          category: categoryMatch ? categoryMatch[1] : 'unknown'
        });
      }
    }
    
    // Загружаем фразы
    const phrasesResponse = await fetch(chrome.runtime.getURL('learn-es-phrases-data.js'));
    const phrasesText = await phrasesResponse.text();
    
    const phrasesResults = [];
    const phraseBlocks = phrasesText.split(/\n\s*{\s*id:/);
    
    for (let i = 1; i < phraseBlocks.length; i++) {
      const block = phraseBlocks[i];
      const phraseMatch = block.match(/phrase:\s*"([^"]+)"/);
      const translationMatch = block.match(/translation:\s*"([^"]+)"/);
      const categoryMatch = block.match(/category:\s*"([^"]+)"/);
      
      if (phraseMatch && translationMatch) {
        phrasesResults.push({
          es: phraseMatch[1],
          ru: translationMatch[1],
          category: categoryMatch ? categoryMatch[1] : 'unknown'
        });
      }
    }
    
    // Сохраняем в cache и storage
    wordsCache = wordsResults;
    phrasesCache = phrasesResults;
    
    await chrome.storage.local.set({
      learnWordsData: wordsResults,
      learnPhrasesData: phrasesResults
    });
  } catch (error) {
    console.error('Error loading and caching data:', error);
  }
}

async function loadWordsData() {
  if (!wordsCache) {
    await initializeSearchData();
  }
  return wordsCache || [];
}

async function loadPhrasesData() {
  if (!phrasesCache) {
    await initializeSearchData();
  }
  return phrasesCache || [];
}

// Инициализация при установке/запуске расширения
console.log('🚀🚀🚀 BACKGROUND.JS LOADED STARTING 🚀🚀🚀');

chrome.runtime.onInstalled.addListener(() => {
  console.log('🚀 Extension installed');
});

chrome.runtime.onStartup.addListener(() => {
  initializeSearchData();
});

async function searchInLearnData(query, dataType, sendResponse) {
  const results = [];
  
  try {
    if (dataType === 'es-words') {
      const wordsData = await loadWordsData();
      
      for (const word of wordsData) {
        const wordText = word.word || '';
        const translationText = word.translation || '';
        
        const found = wordText.toLowerCase().includes(query) || 
                      translationText.toLowerCase().includes(query);
        
        if (found) {
          results.push({
            es: wordText,
            ru: translationText,
            examples: [],
            category: word.category
          });
        }
      }
    } else if (dataType === 'es-phrases') {
      const phrasesData = await loadPhrasesData();
      
      for (const phrase of phrasesData) {
        if (phrase.es.toLowerCase().includes(query) || 
            phrase.ru.toLowerCase().includes(query)) {
          results.push(phrase);
        }
      }
    }
    
    sendResponse({ success: true, results });
  } catch (error) {
    console.error('Search error:', error);
    sendResponse({ success: false, results: [] });
  }
}
