const wordsList = document.getElementById('wordsList');
const categoryFilter = document.getElementById('categoryFilter');
const typeFilter = document.getElementById('typeFilter');
const sortFilter = document.getElementById('sortFilter');
const statusFilter = document.getElementById('statusFilter');
const totalWordsEl = document.getElementById('totalWords');
const learnedWordsEl = document.getElementById('learnedWords');
const progressPercentEl = document.getElementById('progressPercent');
const progressFillEl = document.getElementById('progressFill');

let currentCategory = '';
let currentType = '';
let currentSort = 'popularity';
let currentStatus = '';
let learnedWordIds = new Set();

// Переменные для ленивой загрузки
let allFilteredWords = [];
let displayedWordsCount = 0;
const WORDS_PER_PAGE = 10;
let isLoadingMore = false;

// Кеш для переводов
const translationCache = new Map();

document.addEventListener('DOMContentLoaded', async () => {
  await loadLearnedWords();
  updateStats();
  await displayWords();
  
  const trainBtn = document.getElementById('trainBtn');
  if (trainBtn) {
    trainBtn.addEventListener('click', () => {
      window.location.href = 'history.html';
    });
  }

  const phrasesBtn = document.getElementById('phrasesBtn');
  if (phrasesBtn) {
    phrasesBtn.addEventListener('click', () => {
      window.location.href = 'learn-en-phrases.html';
    });
  }

  const grammarBtn = document.getElementById('grammarBtn');
  if (grammarBtn) {
    grammarBtn.addEventListener('click', () => {
      window.location.href = 'learn-en-grammar.html';
    });
  }
  
  categoryFilter.addEventListener('change', async (e) => {
    currentCategory = e.target.value;
    await displayWords();
  });
  
  typeFilter.addEventListener('change', async (e) => {
    currentType = e.target.value;
    await displayWords();
  });
  
  sortFilter.addEventListener('change', async (e) => {
    currentSort = e.target.value;
    await displayWords();
  });
  
  statusFilter.addEventListener('change', async (e) => {
    currentStatus = e.target.value;
    await displayWords();
  });
});

async function loadLearnedWords() {
  try {
    console.log('📚 Loading learned words...');
    const response = await chrome.runtime.sendMessage({ action: 'getHistory' });
    if (response && response.historyByLang && response.historyByLang['en-ru-l']) {
      const enRuLHistory = response.historyByLang['en-ru-l'];
      console.log('📚 Found', enRuLHistory.length, 'items in en-ru-l');
      
      enRuLHistory.forEach((item, index) => {
        console.log(`📚 Item ${index}:`, { original: item.original, spanishWord: item.spanishWord, translation: item.translation });
        
        // Используем сохраненное испанское слово если есть
        if (item.spanishWord) {
          learnedWordIds.add(item.spanishWord);
          console.log('📚 Added learned word from history:', item.spanishWord);
        } else {
          // Fallback для старых записей без spanishWord
          const spanishWord = englishWords.find(w => w.translation === item.translation);
          if (spanishWord) {
            learnedWordIds.add(spanishWord.word);
            console.log('📚 Added learned word via fallback:', spanishWord.word);
          } else {
            console.log('📚 No matching word found for translation:', item.translation);
          }
        }
      });
      
      console.log('📚 Total learned words loaded:', learnedWordIds.size);
      console.log('📚 Learned words:', Array.from(learnedWordIds));
    } else {
      console.log('📚 No en-ru-l history found');
    }
  } catch (error) {
    console.error('Error loading learned words:', error);
  }
}

function updateStats() {
  const total = englishWords.length;
  const learned = learnedWordIds.size;
  const percent = total > 0 ? Math.round((learned / total) * 100) : 0;
  
  totalWordsEl.textContent = total;
  learnedWordsEl.textContent = learned;
  progressPercentEl.textContent = `${percent}%`;
  progressFillEl.style.width = `${percent}%`;
}

async function displayWords(reset = true) {
  if (reset) {
    // Фильтруем все слова
    allFilteredWords = [...englishWords];
    
    if (currentCategory) {
      allFilteredWords = allFilteredWords.filter(word => word.category === currentCategory);
    }
    
    if (currentType) {
      allFilteredWords = allFilteredWords.filter(word => word.type === currentType);
    }
    
    if (currentStatus === 'learned') {
      allFilteredWords = allFilteredWords.filter(word => learnedWordIds.has(word.word));
    } else if (currentStatus === 'not-learned') {
      allFilteredWords = allFilteredWords.filter(word => !learnedWordIds.has(word.word));
    }
    
    if (currentSort === 'alphabet') {
      allFilteredWords.sort((a, b) => a.word.localeCompare(b.word));
    } else {
      allFilteredWords.sort((a, b) => a.popularity - b.popularity);
    }
    
    displayedWordsCount = 0;
    wordsList.innerHTML = '';
  }
  
  if (allFilteredWords.length === 0) {
    wordsList.innerHTML = `
      <div class="history__empty">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <p>Слова не найдены</p>
      </div>
    `;
    return;
  }
  
  if (displayedWordsCount >= allFilteredWords.length) {
    return; // Все слова уже загружены
  }
  
  // Определяем сколько слов загружать
  const wordsToLoad = Math.min(WORDS_PER_PAGE, allFilteredWords.length - displayedWordsCount);
  const wordsChunk = allFilteredWords.slice(displayedWordsCount, displayedWordsCount + wordsToLoad);
  
  if (isLoadingMore) {
    // Добавляем индикатор загрузки
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'learn-es__loading';
    loadingIndicator.innerHTML = `
      <div class="learn-es__loading-spinner"></div>
      <p>Загрузка слов...</p>
    `;
    wordsList.appendChild(loadingIndicator);
  }
  
  // Создаем карточки для chunk слов
  const wordCards = await Promise.all(wordsChunk.map(word => createWordCard(word)));
  
  if (isLoadingMore) {
    // Удаляем индикатор загрузки
    const loadingIndicator = wordsList.querySelector('.learn-es__loading');
    if (loadingIndicator) {
      loadingIndicator.remove();
    }
  }
  
  // Добавляем обработчики событий для новых элементов
  const newElementsContainer = document.createElement('div');
  newElementsContainer.innerHTML = wordCards.join('');
  
  await attachEventListeners(newElementsContainer);
  
  // Добавляем новые карточки в DOM
  while (newElementsContainer.firstChild) {
    wordsList.appendChild(newElementsContainer.firstChild);
  }
  
  displayedWordsCount += wordsToLoad;
  if (displayedWordsCount < allFilteredWords.length) {
    showLoadMoreButton();
  } else {
    hideLoadMoreButton();
  }
}

async function createWordCard(word) {
  const isLearned = learnedWordIds.has(word.word);
  const cardClass = isLearned ? 'learn-es__card learn-es__card--learned' : 'learn-es__card';
  const isVerb = word.type === 'глагол';
  
  const defaultPronoun = 'yo';
  const defaultTense = 'present';
  
  // Переводим само слово с испанского на английский
  const wordEn = await translateSpanishToEnglish(word.word);
  
  let exampleEs, exampleRu, exampleEn;
  if (isVerb && word.examples[defaultTense] && word.examples[defaultTense][defaultPronoun]) {
    exampleEs = word.examples[defaultTense][defaultPronoun].es;
    exampleRu = word.examples[defaultTense][defaultPronoun].ru;
    exampleEn = await translateSpanishToEnglish(exampleEs);
  } else if (word.examples[defaultTense]) {
    exampleEs = word.examples[defaultTense].es || '';
    exampleRu = word.examples[defaultTense].ru || '';
    exampleEn = exampleEs ? await translateSpanishToEnglish(exampleEs) : '';
  } else {
    exampleEs = '';
    exampleRu = '';
    exampleEn = '';
  }
  
  return `
    <div class="${cardClass}" data-word-id="${word.id}">
      <div class="learn-es__card-header">
        <div class="learn-es__word-section">
          <div class="learn-es__word-main">
            <button class="learn-es__play-btn" data-text="${escapeHtml(wordEn)}" data-lang="en">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <span class="learn-es__word">${escapeHtml(wordEn)}</span>
          </div>
          <div class="learn-es__translation">${escapeHtml(word.translation)}</div>
        </div>
        <button class="learn-es__add-btn ${isLearned ? 'learn-es__add-btn--added' : ''}" data-word-id="${word.id}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${isLearned 
              ? '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>'
              : '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>'
            }
          </svg>
        </button>
      </div>
      
      <div class="learn-es__meta">
        <span class="learn-es__badge learn-es__badge--category">${getCategoryName(word.category)}</span>
        <span class="learn-es__badge learn-es__badge--type">${escapeHtml(word.type)}</span>
      </div>
      
      <div class="learn-es__example-section">
        <div class="learn-es__example-header">Пример в контексте</div>
        
        ${isVerb ? `
          <div class="learn-es__pronoun-buttons">
            <button class="learn-es__pronoun-btn learn-es__pronoun-btn--active" data-word-id="${word.id}" data-pronoun="yo">I</button>
            <button class="learn-es__pronoun-btn" data-word-id="${word.id}" data-pronoun="tú">you</button>
            <button class="learn-es__pronoun-btn" data-word-id="${word.id}" data-pronoun="él">he/she</button>
            <button class="learn-es__pronoun-btn" data-word-id="${word.id}" data-pronoun="nosotros">we</button>
            <button class="learn-es__pronoun-btn" data-word-id="${word.id}" data-pronoun="vosotros">you (pl)</button>
            <button class="learn-es__pronoun-btn" data-word-id="${word.id}" data-pronoun="ellos">they</button>
          </div>
        ` : ''}
        
        <div class="learn-es__example-text">
          <button class="learn-es__play-btn" data-text="${escapeHtml(exampleEn)}" data-lang="en">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
          <span class="learn-es__example-phrase" data-word-id="${word.id}">${escapeHtml(exampleEn)}</span>
        </div>
        <div class="learn-es__example-translation" data-word-id="${word.id}">${escapeHtml(exampleRu)}</div>
        
        <div class="learn-es__tense-buttons">
          <button class="learn-es__tense-btn" data-word-id="${word.id}" data-tense="past">Прошлое</button>
          <button class="learn-es__tense-btn learn-es__tense-btn--active" data-word-id="${word.id}" data-tense="present">Настоящее</button>
          <button class="learn-es__tense-btn" data-word-id="${word.id}" data-tense="future">Будущее</button>
        </div>
      </div>
    </div>
  `;
}

function getCategoryName(category) {
  const categoryNames = {
    'verbs': 'Глаголы',
    'pronouns': 'Местоимения',
    'numbers': 'Числа',
    'time': 'Время',
    'family': 'Семья',
    'home': 'Дом',
    'city': 'Город',
    'food': 'Еда',
    'nature': 'Природа',
    'colors': 'Цвета',
    'emotions': 'Эмоции',
    'work': 'Работа',
    'travel': 'Путешествия',
    'adjectives': 'Прилагательные',
    'prepositions': 'Предлоги и союзы',
    'body': 'Тело',
    'clothes': 'Одежда',
    'weather': 'Погода'
  };
  return categoryNames[category] || category;
}

async function attachEventListeners(container = document) {
  const playButtons = container.querySelectorAll('.learn-es__play-btn');
  playButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const text = e.currentTarget.getAttribute('data-text');
      const lang = e.currentTarget.getAttribute('data-lang');
      await playAudio(text, lang, e.currentTarget);
    });
  });
  
  const addButtons = container.querySelectorAll('.learn-es__add-btn');
  addButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const wordId = parseInt(e.currentTarget.getAttribute('data-word-id'));
      const isAdded = btn.classList.contains('learn-es__add-btn--added');
      
      if (isAdded) {
        await removeWordFromHistory(wordId);
      } else {
        await addWordToHistory(wordId);
      }
    });
  });
  
  const tenseButtons = container.querySelectorAll('.learn-es__tense-btn');
  tenseButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const wordId = parseInt(e.currentTarget.getAttribute('data-word-id'));
      const tense = e.currentTarget.getAttribute('data-tense');
      await changeTense(wordId, tense);
    });
  });
  
  const pronounButtons = container.querySelectorAll('.learn-es__pronoun-btn');
  pronounButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const wordId = parseInt(e.currentTarget.getAttribute('data-word-id'));
      const pronoun = e.currentTarget.getAttribute('data-pronoun');
      await changePronoun(wordId, pronoun);
    });
  });
}

async function changeTense(wordId, tense) {
  const word = englishWords.find(w => w.id === wordId);
  if (!word || !word.examples[tense]) return;
  
  const card = document.querySelector(`[data-word-id="${wordId}"]`);
  if (!card) return;
  
  const examplePhrase = card.querySelector('.learn-es__example-phrase');
  const exampleTranslation = card.querySelector('.learn-es__example-translation');
  const playBtn = examplePhrase.nextElementSibling;
  
  const isVerb = word.type === 'глагол';
  let exampleEs, exampleRu, exampleEn;
  
  if (isVerb && word.examples[tense]) {
    const activePronounBtn = card.querySelector('.learn-es__pronoun-btn--active');
    const pronoun = activePronounBtn ? activePronounBtn.getAttribute('data-pronoun') : 'yo';
    
    if (word.examples[tense][pronoun]) {
      exampleEs = word.examples[tense][pronoun].es;
      exampleRu = word.examples[tense][pronoun].ru;
      exampleEn = await translateSpanishToEnglish(exampleEs);
    } else {
      exampleEs = word.examples[tense].es || '';
      exampleRu = word.examples[tense].ru || '';
      exampleEn = exampleEs ? await translateSpanishToEnglish(exampleEs) : '';
    }
  } else {
    exampleEs = word.examples[tense].es || '';
    exampleRu = word.examples[tense].ru || '';
    exampleEn = exampleEs ? await translateSpanishToEnglish(exampleEs) : '';
  }
  
  examplePhrase.textContent = exampleEn;
  exampleTranslation.textContent = exampleRu;
  playBtn.setAttribute('data-text', exampleEn);
  
  const tenseButtons = card.querySelectorAll('.learn-es__tense-btn');
  tenseButtons.forEach(btn => {
    if (btn.getAttribute('data-tense') === tense) {
      btn.classList.add('learn-es__tense-btn--active');
    } else {
      btn.classList.remove('learn-es__tense-btn--active');
    }
  });
}

async function changePronoun(wordId, pronoun) {
  const word = englishWords.find(w => w.id === wordId);
  if (!word) return;
  
  const card = document.querySelector(`[data-word-id="${wordId}"]`);
  if (!card) return;
  
  const pronounButtons = card.querySelectorAll('.learn-es__pronoun-btn');
  pronounButtons.forEach(btn => {
    if (btn.getAttribute('data-pronoun') === pronoun) {
      btn.classList.add('learn-es__pronoun-btn--active');
    } else {
      btn.classList.remove('learn-es__pronoun-btn--active');
    }
  });
  
  const activeTenseBtn = card.querySelector('.learn-es__tense-btn--active');
  const tense = activeTenseBtn ? activeTenseBtn.getAttribute('data-tense') : 'present';
  
  const examplePhrase = card.querySelector('.learn-es__example-phrase');
  const exampleTranslation = card.querySelector('.learn-es__example-translation');
  const playBtn = examplePhrase.nextElementSibling;
  
  if (word.examples[tense] && word.examples[tense][pronoun]) {
    const exampleEs = word.examples[tense][pronoun].es;
    const exampleRu = word.examples[tense][pronoun].ru;
    const exampleEn = await translateSpanishToEnglish(exampleEs);
    
    examplePhrase.textContent = exampleEn;
    exampleTranslation.textContent = exampleRu;
    playBtn.setAttribute('data-text', exampleEn);
  }
}

async function addWordToHistory(wordId) {
  const word = englishWords.find(w => w.id === wordId);
  if (!word) return;
  
  const isAlreadyLearned = learnedWordIds.has(word.word);
  
  if (isAlreadyLearned) {
    return;
  }
  
  try {
    // Берем английский перевод со страницы из .learn-es__word
    const wordCard = document.querySelector(`.learn-es__card[data-word-id="${wordId}"]`);
    const englishWord = wordCard.querySelector('.learn-es__word').textContent.trim();
    
    console.log('Adding word to history:');
    console.log('Spanish from data:', word.word);
    console.log('English from page:', englishWord);
    console.log('Russian translation:', word.translation);
    
    await chrome.runtime.sendMessage({
      action: 'saveToHistory',
      original: englishWord, // Сохраняем английский перевод со страницы
      translation: word.translation,
      sourceLang: 'en',
      targetLang: 'ru',
      category: 'EN-RU-L',
      source: 'learn-en',
      spanishWord: word.word || 'unknown' // Гарантируем что spanishWord не undefined
    });
    
    learnedWordIds.add(word.word);
    updateStats();
    
    const addBtn = document.querySelector(`.learn-es__add-btn[data-word-id="${wordId}"]`);
    if (addBtn) {
      addBtn.classList.add('learn-es__add-btn--added');
      addBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
    }
    
    const statusCard = document.querySelector(`.learn-es__card[data-word-id="${wordId}"]`);
    if (statusCard) {
      statusCard.classList.add('learn-es__card--learned');
    }
  } catch (error) {
    console.error('Error adding word to history:', error);
    alert('Ошибка при добавлении слова в историю');
  }
}

async function removeWordFromHistory(wordId) {
  const word = englishWords.find(w => w.id === wordId);
  if (!word) return;
  
  try {
    const response = await chrome.runtime.sendMessage({ action: 'getHistory' });
    if (!response || !response.historyByLang) return;
    
    const historyByLang = response.historyByLang;
    const enRuLHistory = historyByLang['en-ru-l'] || [];
    
    const updatedHistory = enRuLHistory.filter(item => 
      item.original !== word.word || item.translation !== word.translation
    );
    
    historyByLang['en-ru-l'] = updatedHistory;
    
    await chrome.runtime.sendMessage({
      action: 'updateHistory',
      historyByLang: historyByLang
    });
    
    learnedWordIds.delete(word.word);
    updateStats();
    
    const addBtn = document.querySelector(`.learn-es__add-btn[data-word-id="${wordId}"]`);
    if (addBtn) {
      addBtn.classList.remove('learn-es__add-btn--added');
      addBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      `;
    }
    
    const card = document.querySelector(`.learn-es__card[data-word-id="${wordId}"]`);
    if (card) {
      card.classList.remove('learn-es__card--learned');
    }
  } catch (error) {
    console.error('Error removing word from history:', error);
    alert('Ошибка при удалении слова из истории');
  }
}

async function playAudio(text, lang, button) {
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

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Функция для перевода текста с испанского на английский
async function translateSpanishToEnglish(spanishText) {
  // Проверяем кеш
  if (translationCache.has(spanishText)) {
    return translationCache.get(spanishText);
  }
  
  try {
    const response = await chrome.runtime.sendMessage({
      action: 'translate',
      text: spanishText,
      sourceLang: 'es',
      targetLang: 'en'
    });
    
    let translation = spanishText; // По умолчанию возвращаем оригинал
    if (response && response.success) {
      translation = response.translation;
    }
    
    // Сохраняем в кеш
    translationCache.set(spanishText, translation);
    return translation;
  } catch (error) {
    console.error('Translation error:', error);
    // Сохраняем в кеш даже ошибку, чтобы не повторять запросы
    translationCache.set(spanishText, spanishText);
    return spanishText;
  }
}

// Функции для ленивой загрузки
function showLoadMoreButton() {
  // Проверяем, есть ли уже кнопка
  let loadMoreBtn = document.getElementById('loadMoreBtn');
  
  if (!loadMoreBtn) {
    loadMoreBtn = document.createElement('button');
    loadMoreBtn.id = 'loadMoreBtn';
    loadMoreBtn.className = 'learn-es__load-more-btn';
    loadMoreBtn.innerHTML = `
      <span>Загрузить еще</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    `;
    
    loadMoreBtn.addEventListener('click', async () => {
      isLoadingMore = true;
      loadMoreBtn.disabled = true;
      loadMoreBtn.innerHTML = `
        <span>Загрузка...</span>
        <div class="learn-es__btn-spinner"></div>
      `;
      
      await displayWords(false);
      
      isLoadingMore = false;
    });
    
    wordsList.appendChild(loadMoreBtn);
  }
}

function hideLoadMoreButton() {
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.remove();
  }
}
