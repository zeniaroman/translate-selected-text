const sourceLangSelect = document.getElementById('sourceLang');
const targetLangSelect = document.getElementById('targetLang');
const swapBtn = document.getElementById('swapBtn');
const openHistoryBtn = document.getElementById('openHistoryBtn');
const historyList = document.getElementById('historyList');
const historyTabsContainer = document.getElementById('historyTabs');

let currentHistoryLang = null;
let historyByLang = {};

document.addEventListener('DOMContentLoaded', async () => {
  await loadSettings();
  await loadHistory();
  initQuickTranslate();
  initSearch();
  
  sourceLangSelect.addEventListener('change', async () => {
    await saveSettings();
    await setActiveTabFromSettings();
    displayHistoryTabs();
    updateQuickTranslateDirection();
  });
  
  targetLangSelect.addEventListener('change', async () => {
    await saveSettings();
    await setActiveTabFromSettings();
    displayHistoryTabs();
    updateQuickTranslateDirection();
  });
});

async function loadSettings() {
  const response = await chrome.runtime.sendMessage({ action: 'getSettings' });
  
  if (response && response.settings) {
    sourceLangSelect.value = response.settings.sourceLang;
    targetLangSelect.value = response.settings.targetLang;
  }
}

async function loadHistory() {
  const response = await chrome.runtime.sendMessage({ action: 'getHistory' });
  
  if (response && response.historyByLang) {
    historyByLang = response.historyByLang;
    await setActiveTabFromSettings();
    displayHistoryTabs();
  }
}

async function setActiveTabFromSettings() {
  const languages = Object.keys(historyByLang);
  if (languages.length === 0) return;
  
  const langPair = `${sourceLangSelect.value}-${targetLangSelect.value}`;
  
  if (historyByLang[langPair]) {
    currentHistoryLang = langPair;
  } else if (!currentHistoryLang || !historyByLang[currentHistoryLang]) {
    currentHistoryLang = languages[0];
  }
}

function displayHistoryTabs() {
  const languages = Object.keys(historyByLang);
  
  if (languages.length === 0) {
    historyTabsContainer.innerHTML = '';
    displayHistory([]);
    return;
  }
  
  if (!currentHistoryLang || !historyByLang[currentHistoryLang]) {
    currentHistoryLang = languages[0];
  }
  
  const languageNames = {
    'ru': 'Русский',
    'en': 'English',
    'es': 'Español',
    'fr': 'Français',
    'de': 'Deutsch',
    'zh-CN': '中文'
  };
  
  historyTabsContainer.innerHTML = languages.map(lang => `
    <button class="popup__history-tab ${lang === currentHistoryLang ? 'popup__history-tab--active' : ''}" data-lang="${lang}">
      ${languageNames[lang] || lang.toUpperCase()}
      <span class="popup__history-tab-count">${historyByLang[lang].length}</span>
    </button>
  `).join('');
  
  const tabs = historyTabsContainer.querySelectorAll('.popup__history-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      currentHistoryLang = tab.getAttribute('data-lang');
      displayHistoryTabs();
    });
  });
  
  displayHistory(historyByLang[currentHistoryLang] || []);
}

async function displayHistory(history) {
  if (!history || history.length === 0) {
    historyList.innerHTML = `
      <div class="popup__empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <p>No translation history yet</p>
      </div>
    `;
    return;
  }

  historyList.innerHTML = history.map(item => `
    <div class="popup__history-item" data-id="${item.id}">
      <div class="popup__history-header">
        <span class="popup__history-lang">${item.sourceLang.toUpperCase()} → ${item.targetLang.toUpperCase()}</span>
        <div class="popup__history-status">
          <button class="popup__history-status-btn popup__history-status-btn--new ${item.status === 'new' ? 'popup__history-status-btn--active' : ''}" data-item-id="${item.id}" data-status="new" title="To Learn"></button>
          <button class="popup__history-status-btn popup__history-status-btn--learning ${item.status === 'learning' ? 'popup__history-status-btn--active' : ''}" data-item-id="${item.id}" data-status="learning" title="Learning"></button>
          <button class="popup__history-status-btn popup__history-status-btn--learned ${item.status === 'learned' ? 'popup__history-status-btn--active' : ''}" data-item-id="${item.id}" data-status="learned" title="Learned"></button>
        </div>
      </div>
      <div class="popup__history-text">
        <div class="popup__history-original">${escapeHtml(item.original)}</div>
        <div class="popup__history-translation">${escapeHtml(item.translation)}</div>
      </div>
      <div class="popup__history-actions">
        <select class="popup__history-category" data-item-id="${item.id}">
          <option value="">Category...</option>
        </select>
        <button class="popup__history-play" data-text="${escapeHtml(item.original)}" data-lang="${item.sourceLang}" title="Play original">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </button>
        <button class="popup__history-delete" data-id="${item.id}" title="Delete">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    </div>
  `).join('');

  const playButtons = historyList.querySelectorAll('.popup__history-play');
  playButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const text = e.currentTarget.getAttribute('data-text');
      const lang = e.currentTarget.getAttribute('data-lang');
      await playAudioInPopup(text, lang, e.currentTarget);
    });
  });

  const deleteButtons = historyList.querySelectorAll('.popup__history-delete');
  deleteButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const itemId = parseInt(e.currentTarget.getAttribute('data-id'));
      await deleteHistoryItem(itemId);
    });
  });

  const statusButtons = historyList.querySelectorAll('.popup__history-status-btn');
  statusButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const itemId = parseInt(e.currentTarget.getAttribute('data-item-id'));
      const status = e.currentTarget.getAttribute('data-status');
      await updateItemStatus(itemId, status);
    });
  });

  await loadCategoriesForHistory(history);
}

async function updateItemStatus(itemId, status) {
  if (!currentHistoryLang || !historyByLang[currentHistoryLang]) return;
  
  const item = historyByLang[currentHistoryLang].find(h => h.id === itemId);
  if (item) {
    item.status = status;
    
    await chrome.runtime.sendMessage({
      action: 'updateHistory',
      historyByLang: historyByLang
    });
    
    displayHistory(historyByLang[currentHistoryLang] || []);
  }
}

function formatTime(timestamp) {
  const date = new Date(timestamp);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  
  return date.toLocaleDateString();
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

async function playAudioInPopup(text, lang, button) {
  if (!text || !lang) return;
  
  const originalHTML = button.innerHTML;
  button.disabled = true;
  button.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
  `;
  
  try {
    const response = await chrome.runtime.sendMessage({
      action: 'getAudio',
      text: text,
      lang: lang
    });
    
    if (response.success && response.audioData) {
      const audio = new Audio(response.audioData);
      
      audio.addEventListener('ended', () => {
        button.disabled = false;
        button.innerHTML = originalHTML;
      });
      
      audio.addEventListener('error', () => {
        button.disabled = false;
        button.innerHTML = originalHTML;
      });
      
      await audio.play();
    } else {
      button.disabled = false;
      button.innerHTML = originalHTML;
    }
  } catch (error) {
    button.disabled = false;
    button.innerHTML = originalHTML;
  }
}

function copyToClipboard(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    const originalHTML = button.innerHTML;
    button.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;
    button.classList.add('popup__history-copy--copied');
    
    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.classList.remove('popup__history-copy--copied');
    }, 2000);
  });
}

async function saveSettings() {
  const settings = {
    sourceLang: sourceLangSelect.value,
    targetLang: targetLangSelect.value
  };

  await chrome.runtime.sendMessage({
    action: 'saveSettings',
    settings: settings
  });
}

swapBtn.addEventListener('click', async () => {
  const temp = sourceLangSelect.value;
  sourceLangSelect.value = targetLangSelect.value;
  targetLangSelect.value = temp;
  await saveSettings();
  await setActiveTabFromSettings();
  displayHistoryTabs();
});

async function loadCategoriesForHistory(history) {
  const response = await chrome.runtime.sendMessage({ action: 'getCategories' });
  const categories = response.categories || [];
  
  const categorySelects = historyList.querySelectorAll('.popup__history-category');
  
  categorySelects.forEach(select => {
    const itemId = parseInt(select.getAttribute('data-item-id'));
    const item = history.find(h => h.id === itemId);
    
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      if (item && item.category === category) {
        option.selected = true;
      }
      select.appendChild(option);
    });
    
    select.addEventListener('change', async (e) => {
      const selectedCategory = e.target.value;
      await updateItemCategory(itemId, selectedCategory);
    });
  });
}

async function updateItemCategory(itemId, category) {
  if (!currentHistoryLang || !historyByLang[currentHistoryLang]) return;
  
  const item = historyByLang[currentHistoryLang].find(h => h.id === itemId);
  if (item) {
    item.category = category || null;
    
    await chrome.runtime.sendMessage({
      action: 'updateHistory',
      historyByLang: historyByLang
    });
  }
}

async function deleteHistoryItem(itemId) {
  if (!currentHistoryLang || !historyByLang[currentHistoryLang]) return;
  
  const itemToDelete = historyByLang[currentHistoryLang].find(item => item.id === itemId);
  if (!itemToDelete) return;
  
  itemToDelete.deletedAt = new Date().toISOString();
  
  const trashedResult = await chrome.storage.local.get({ trashedItems: [] });
  const trashedItems = trashedResult.trashedItems || [];
  trashedItems.push(itemToDelete);
  
  await chrome.storage.local.set({ trashedItems: trashedItems });
  
  historyByLang[currentHistoryLang] = historyByLang[currentHistoryLang].filter(item => item.id !== itemId);
  
  if (historyByLang[currentHistoryLang].length === 0) {
    delete historyByLang[currentHistoryLang];
  }
  
  await chrome.runtime.sendMessage({
    action: 'updateHistory',
    historyByLang: historyByLang
  });
  
  displayHistoryTabs();
}

const openLearnBtn = document.getElementById('openLearnBtn');

openLearnBtn.addEventListener('click', () => {
  chrome.tabs.create({ url: chrome.runtime.getURL('learn.html') });
});

openHistoryBtn.addEventListener('click', () => {
  chrome.tabs.create({ url: chrome.runtime.getURL('history.html') });
});

// Quick Translate functionality
let popupCurrentInputText = '';
let popupCurrentTranslation = '';

function initQuickTranslate() {
  const langSwitchBtn = document.getElementById('popupLangSwitchBtn');
  const translateInput = document.getElementById('popupTranslateInput');
  const playInputBtn = document.getElementById('popupPlayInputBtn');
  const playTranslationBtn = document.getElementById('popupPlayTranslationBtn');
  const addToHistoryBtn = document.getElementById('popupAddToHistoryBtn');

  if (!langSwitchBtn || !translateInput) return;

  updateQuickTranslateDirection();

  // Переключение направления перевода
  langSwitchBtn.addEventListener('click', () => {
    const temp = sourceLangSelect.value;
    sourceLangSelect.value = targetLangSelect.value;
    targetLangSelect.value = temp;
    saveSettings();
    updateQuickTranslateDirection();
    if (popupCurrentInputText) {
      performQuickTranslation();
    }
  });

  // Перевод при вводе текста
  let translateTimeout;
  translateInput.addEventListener('input', (e) => {
    popupCurrentInputText = e.target.value.trim();
    
    clearTimeout(translateTimeout);
    
    if (popupCurrentInputText) {
      translateTimeout = setTimeout(() => {
        performQuickTranslation();
      }, 500);
    } else {
      hideQuickTranslateResult();
    }
  });

  // Воспроизведение оригинала
  playInputBtn.addEventListener('click', async () => {
    if (!popupCurrentInputText) return;
    const lang = sourceLangSelect.value === 'auto' ? 'en' : sourceLangSelect.value;
    await playAudioInPopup(popupCurrentInputText, lang, playInputBtn);
  });

  // Воспроизведение перевода
  playTranslationBtn.addEventListener('click', async () => {
    if (!popupCurrentTranslation) return;
    await playAudioInPopup(popupCurrentTranslation, targetLangSelect.value, playTranslationBtn);
  });

  // Добавление в историю
  addToHistoryBtn.addEventListener('click', async () => {
    await addQuickTranslationToHistory();
  });
}

function updateQuickTranslateDirection() {
  const label = document.getElementById('popupCurrentLangLabel');
  const input = document.getElementById('popupTranslateInput');
  
  if (!label || !input) return;
  
  const sourceLang = sourceLangSelect.value === 'auto' ? 'Auto' : sourceLangSelect.value.toUpperCase();
  const targetLang = targetLangSelect.value.toUpperCase();
  
  label.textContent = `${sourceLang} → ${targetLang}`;
  input.placeholder = `Enter text in ${sourceLangSelect.value === 'auto' ? 'any language' : sourceLangSelect.options[sourceLangSelect.selectedIndex].text}...`;
}

async function performQuickTranslation() {
  if (!popupCurrentInputText) return;

  const sourceLang = sourceLangSelect.value;
  const targetLang = targetLangSelect.value;

  try {
    const response = await chrome.runtime.sendMessage({
      action: 'translate',
      text: popupCurrentInputText,
      sourceLang: sourceLang,
      targetLang: targetLang
    });

    if (response && response.translation) {
      popupCurrentTranslation = response.translation;
      showQuickTranslateResult(popupCurrentTranslation);
    }
  } catch (error) {
    console.error('Translation error:', error);
    showQuickTranslateResult('Translation error');
  }
}

function showQuickTranslateResult(translation) {
  const resultDiv = document.getElementById('popupTranslateResult');
  const translationText = document.getElementById('popupTranslationText');
  
  if (resultDiv && translationText) {
    translationText.textContent = translation;
    resultDiv.style.display = 'block';
  }
}

function hideQuickTranslateResult() {
  const resultDiv = document.getElementById('popupTranslateResult');
  if (resultDiv) {
    resultDiv.style.display = 'none';
  }
  popupCurrentTranslation = '';
}

async function addQuickTranslationToHistory() {
  if (!popupCurrentInputText || !popupCurrentTranslation) return;

  const addBtn = document.getElementById('popupAddToHistoryBtn');
  addBtn.disabled = true;

  try {
    const response = await chrome.runtime.sendMessage({
      action: 'saveToHistory',
      original: popupCurrentInputText,
      translation: popupCurrentTranslation,
      sourceLang: sourceLangSelect.value === 'auto' ? 'en' : sourceLangSelect.value,
      targetLang: targetLangSelect.value,
      category: null,
      source: 'popup-quick'
    });

    if (response && response.success) {
      const originalHTML = addBtn.innerHTML;
      addBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
      
      await loadHistory();
      
      setTimeout(() => {
        addBtn.innerHTML = originalHTML;
        addBtn.disabled = false;
      }, 1500);
    } else {
      addBtn.disabled = false;
    }
  } catch (error) {
    console.error('Error adding to history:', error);
    addBtn.disabled = false;
  }
}

// Search functionality
function initSearch() {
  const searchInput = document.getElementById('popupSearchInput');
  const searchBtn = document.getElementById('popupSearchBtn');
  
  if (!searchInput || !searchBtn) return;
  
  // Поиск по Enter
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
  
  // Поиск по кнопке
  searchBtn.addEventListener('click', () => {
    performSearch();
  });
}

async function performSearch() {
  const searchInput = document.getElementById('popupSearchInput');
  const searchResults = document.getElementById('popupSearchResults');
  const query = searchInput.value.trim().toLowerCase();
  
  if (!query) {
    searchResults.style.display = 'none';
    return;
  }
  
  searchResults.style.display = 'block';
  searchResults.innerHTML = '<div class="popup__search-empty"><p>Searching...</p></div>';
  
  try {
    // Получаем данные из всех источников
    const results = await searchAllSources(query);
    
    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="popup__search-empty">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <p>No results found for "${query}"</p>
        </div>
      `;
    } else {
      displaySearchResults(results);
    }
  } catch (error) {
    console.error('Search error:', error);
    searchResults.innerHTML = `
      <div class="popup__search-empty">
        <p>Search error occurred</p>
      </div>
    `;
  }
}

async function searchAllSources(query) {
  const results = [];
  
  // 1. Поиск в истории
  for (const [langPair, items] of Object.entries(historyByLang)) {
    for (const item of items) {
      if (item.original.toLowerCase().includes(query) || 
          item.translation.toLowerCase().includes(query)) {
        results.push({
          type: 'history',
          langPair: langPair,
          original: item.original,
          translation: item.translation,
          sourceLang: item.sourceLang,
          targetLang: item.targetLang,
          category: item.category,
          status: item.status
        });
      }
    }
  }
  
  // 2. Поиск в learn-es-data.js (слова)
  try {
    const wordsResponse = await chrome.runtime.sendMessage({ 
      action: 'searchInLearnData',
      query: query,
      dataType: 'es-words'
    });
    
    if (wordsResponse && wordsResponse.success && wordsResponse.results) {
      results.push(...wordsResponse.results.map(item => ({
        type: 'learn-es-words',
        original: item.es,
        translation: item.ru,
        sourceLang: 'es',
        targetLang: 'ru',
        examples: item.examples,
        category: item.category
      })));
    }
  } catch (error) {
    console.error('Error searching words data:', error);
  }
  
  // 3. Поиск в learn-es-phrases-data.js (фразы)
  try {
    const phrasesResponse = await chrome.runtime.sendMessage({ 
      action: 'searchInLearnData',
      query: query,
      dataType: 'es-phrases'
    });
    
    if (phrasesResponse && phrasesResponse.success && phrasesResponse.results) {
      results.push(...phrasesResponse.results.map(item => ({
        type: 'learn-es-phrases',
        original: item.es,
        translation: item.ru,
        sourceLang: 'es',
        targetLang: 'ru',
        category: item.category
      })));
    }
  } catch (error) {
    console.error('Error searching phrases data:', error);
  }
  
  return results;
}

function displaySearchResults(results) {
  const searchResults = document.getElementById('popupSearchResults');
  
  searchResults.innerHTML = results.map((result, index) => {
    const langPairDisplay = result.langPair || `${result.sourceLang}-${result.targetLang}`;
    const sourceLabel = getSourceLabel(result.type);
    
    return `
      <div class="popup__history-item">
        <div class="popup__history-header">
          <span class="popup__history-lang">${langPairDisplay.toUpperCase()} • ${sourceLabel}</span>
          ${result.status ? `
            <div class="popup__history-status">
              <div class="popup__history-status-btn popup__history-status-btn--${result.status} ${result.status ? 'popup__history-status-btn--active' : ''}"></div>
            </div>
          ` : ''}
        </div>
        <div class="popup__history-text">
          <div class="popup__history-original">${escapeHtml(result.original)}</div>
          <div class="popup__history-translation">${escapeHtml(result.translation)}</div>
        </div>
        ${result.examples && result.examples.length > 0 ? `
          <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #e5e7eb;">
            <div style="font-size: 11px; color: #6b7280; margin-bottom: 4px;">Examples:</div>
            ${result.examples.map(ex => `
              <div style="font-size: 12px; color: #6b7280; margin-bottom: 2px;">
                ${escapeHtml(ex.es || '')} — ${escapeHtml(ex.ru || '')}
              </div>
            `).join('')}
          </div>
        ` : ''}
        <div class="popup__history-actions">
          ${result.category ? `<span style="font-size: 11px; color: #6b7280;">${result.category}</span>` : '<span></span>'}
          <div style="display: flex; gap: 8px;">
            <button class="popup__history-play popup-search-play" data-text="${escapeHtml(result.original)}" data-lang="${result.sourceLang}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            ${result.type !== 'history' ? `
              <button class="popup__history-play popup-search-add" data-index="${index}" title="Добавить в историю">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Сохраняем результаты для использования в addPopupSearchToHistory
  window.currentPopupSearchResults = results;
  
  // Добавляем обработчики событий
  document.querySelectorAll('.popup-search-play').forEach(button => {
    button.addEventListener('click', (e) => {
      const text = e.target.closest('button').dataset.text;
      const lang = e.target.closest('button').dataset.lang;
      playSearchResult(text, lang, e.target.closest('button'));
    });
  });
  
  document.querySelectorAll('.popup-search-add').forEach(button => {
    button.addEventListener('click', (e) => {
      const index = parseInt(e.target.closest('button').dataset.index);
      addPopupSearchToHistory(index);
    });
  });
}

function getSourceLabel(type) {
  const labels = {
    'history': 'History',
    'learn-es-words': 'ES Words',
    'learn-es-phrases': 'ES Phrases'
  };
  return labels[type] || type;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

async function playAudioInPopup(text, lang, button) {
  if (!text || !lang) return;
  
  const originalHTML = button.innerHTML;
  
  button.disabled = true;
  button.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
  `;
  
  try {
    const response = await chrome.runtime.sendMessage({
      action: 'getAudio',
      text: text,
      lang: lang
    });
    
    if (response.success && response.audioData) {
      const audio = new Audio(response.audioData);
      
      audio.addEventListener('ended', () => {
        button.disabled = false;
        button.innerHTML = originalHTML;
      });
      
      audio.addEventListener('error', () => {
        button.disabled = false;
        button.innerHTML = originalHTML;
      });
      
      await audio.play();
    } else {
      button.disabled = false;
      button.innerHTML = originalHTML;
    }
  } catch (error) {
    console.error('Audio playback error:', error);
    button.disabled = false;
    button.innerHTML = originalHTML;
  }
}

async function playSearchResult(text, lang, button) {
  await playAudioInPopup(text, lang, button);
}

async function addPopupSearchToHistory(index) {
  if (!window.currentPopupSearchResults || !window.currentPopupSearchResults[index]) return;
  
  const result = window.currentPopupSearchResults[index];
  
  try {
    const response = await chrome.runtime.sendMessage({
      action: 'saveToHistory',
      original: result.original,
      translation: result.translation,
      sourceLang: result.sourceLang,
      targetLang: result.targetLang,
      category: 'ES-RU-L',
      source: 'popup-search'
    });
    
    if (response.success) {
      // Показываем визуальное подтверждение
      const button = document.querySelector(`.popup-search-add[data-index="${index}"]`);
      if (button) {
        const originalHTML = button.innerHTML;
        button.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;
        button.style.background = '#10b981';
        
        setTimeout(() => {
          button.innerHTML = originalHTML;
          button.style.background = '';
        }, 1500);
      }
      
      // Обновляем историю в popup
      await loadHistory();
    }
  } catch (error) {
    console.error('Error adding to history:', error);
  }
}
