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

document.addEventListener('DOMContentLoaded', async () => {
  await loadLearnedWords();
  updateStats();
  displayWords();
  
  const trainBtn = document.getElementById('trainBtn');
  if (trainBtn) {
    trainBtn.addEventListener('click', () => {
      window.location.href = 'history.html';
    });
  }

  const phrasesBtn = document.getElementById('phrasesBtn');
  if (phrasesBtn) {
    phrasesBtn.addEventListener('click', () => {
      window.location.href = 'learn-es-phrases.html';
    });
  }

  const grammarBtn = document.getElementById('grammarBtn');
  if (grammarBtn) {
    grammarBtn.addEventListener('click', () => {
      window.location.href = 'learn-es-grammar.html';
    });
  }
  
  categoryFilter.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    displayWords();
  });
  
  typeFilter.addEventListener('change', (e) => {
    currentType = e.target.value;
    displayWords();
  });
  
  sortFilter.addEventListener('change', (e) => {
    currentSort = e.target.value;
    displayWords();
  });
  
  statusFilter.addEventListener('change', (e) => {
    currentStatus = e.target.value;
    displayWords();
  });
});

async function loadLearnedWords() {
  try {
    const response = await chrome.runtime.sendMessage({ action: 'getHistory' });
    if (response && response.historyByLang && response.historyByLang['es-ru-l']) {
      const esRuLHistory = response.historyByLang['es-ru-l'];
      esRuLHistory.forEach(item => {
        // Используем сохраненное испанское слово если есть
        if (item.spanishWord) {
          learnedWordIds.add(item.spanishWord);
        } else {
          // Fallback для старых записей
          const wordId = item.original;
          if (wordId) {
            learnedWordIds.add(wordId);
          }
        }
      });
    }
  } catch (error) {
    console.error('Error loading learned words:', error);
  }
}

function updateStats() {
  const total = spanishWords.length;
  const learned = learnedWordIds.size;
  const percent = total > 0 ? Math.round((learned / total) * 100) : 0;
  
  totalWordsEl.textContent = total;
  learnedWordsEl.textContent = learned;
  progressPercentEl.textContent = `${percent}%`;
  progressFillEl.style.width = `${percent}%`;
}

function displayWords() {
  let filteredWords = [...spanishWords];
  
  if (currentCategory) {
    filteredWords = filteredWords.filter(word => word.category === currentCategory);
  }
  
  if (currentType) {
    filteredWords = filteredWords.filter(word => word.type === currentType);
  }
  
  if (currentStatus === 'learned') {
    filteredWords = filteredWords.filter(word => learnedWordIds.has(word.word));
  } else if (currentStatus === 'not-learned') {
    filteredWords = filteredWords.filter(word => !learnedWordIds.has(word.word));
  }
  
  if (currentSort === 'alphabet') {
    filteredWords.sort((a, b) => a.word.localeCompare(b.word));
  } else {
    filteredWords.sort((a, b) => a.popularity - b.popularity);
  }
  
  if (filteredWords.length === 0) {
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
  
  wordsList.innerHTML = filteredWords.map(word => createWordCard(word)).join('');
  
  attachEventListeners();
}

function createWordCard(word) {
  const isLearned = learnedWordIds.has(word.word);
  const cardClass = isLearned ? 'learn-es__card learn-es__card--learned' : 'learn-es__card';
  const isVerb = word.type === 'глагол';
  
  const defaultPronoun = 'yo';
  const defaultTense = 'present';
  
  let exampleEs, exampleRu;
  if (isVerb && word.examples[defaultTense] && word.examples[defaultTense][defaultPronoun]) {
    exampleEs = word.examples[defaultTense][defaultPronoun].es;
    exampleRu = word.examples[defaultTense][defaultPronoun].ru;
  } else if (word.examples[defaultTense]) {
    exampleEs = word.examples[defaultTense].es || '';
    exampleRu = word.examples[defaultTense].ru || '';
  } else {
    exampleEs = '';
    exampleRu = '';
  }
  
  return `
    <div class="${cardClass}" data-word-id="${word.id}">
      <div class="learn-es__card-header">
        <div class="learn-es__word-section">
          <div class="learn-es__word-main">
            <button class="learn-es__play-btn" data-text="${escapeHtml(word.word)}" data-lang="es">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <span class="learn-es__word">${escapeHtml(word.word)}</span>
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
            <button class="learn-es__pronoun-btn learn-es__pronoun-btn--active" data-word-id="${word.id}" data-pronoun="yo">yo</button>
            <button class="learn-es__pronoun-btn" data-word-id="${word.id}" data-pronoun="tú">tú</button>
            <button class="learn-es__pronoun-btn" data-word-id="${word.id}" data-pronoun="él">él/ella</button>
            <button class="learn-es__pronoun-btn" data-word-id="${word.id}" data-pronoun="nosotros">nosotros</button>
            <button class="learn-es__pronoun-btn" data-word-id="${word.id}" data-pronoun="vosotros">vosotros</button>
            <button class="learn-es__pronoun-btn" data-word-id="${word.id}" data-pronoun="ellos">ellos</button>
          </div>
        ` : ''}
        
        <div class="learn-es__example-text">
          <button class="learn-es__play-btn" data-text="${escapeHtml(exampleEs)}" data-lang="es">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
          <span class="learn-es__example-phrase" data-word-id="${word.id}">${escapeHtml(exampleEs)}</span>
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

function attachEventListeners() {
  const playButtons = document.querySelectorAll('.learn-es__play-btn');
  playButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const text = e.currentTarget.getAttribute('data-text');
      const lang = e.currentTarget.getAttribute('data-lang');
      await playAudio(text, lang, e.currentTarget);
    });
  });
  
  const addButtons = document.querySelectorAll('.learn-es__add-btn');
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
  
  const tenseButtons = document.querySelectorAll('.learn-es__tense-btn');
  tenseButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wordId = parseInt(e.currentTarget.getAttribute('data-word-id'));
      const tense = e.currentTarget.getAttribute('data-tense');
      changeTense(wordId, tense);
    });
  });
  
  const pronounButtons = document.querySelectorAll('.learn-es__pronoun-btn');
  pronounButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wordId = parseInt(e.currentTarget.getAttribute('data-word-id'));
      const pronoun = e.currentTarget.getAttribute('data-pronoun');
      changePronoun(wordId, pronoun);
    });
  });
}

function changeTense(wordId, tense) {
  const word = spanishWords.find(w => w.id === wordId);
  if (!word || !word.examples[tense]) return;
  
  const card = document.querySelector(`[data-word-id="${wordId}"]`);
  if (!card) return;
  
  const examplePhrase = card.querySelector('.learn-es__example-phrase');
  const exampleTranslation = card.querySelector('.learn-es__example-translation');
  const playBtn = examplePhrase.nextElementSibling;
  
  const isVerb = word.type === 'глагол';
  let exampleEs, exampleRu;
  
  if (isVerb && word.examples[tense]) {
    const activePronounBtn = card.querySelector('.learn-es__pronoun-btn--active');
    const pronoun = activePronounBtn ? activePronounBtn.getAttribute('data-pronoun') : 'yo';
    
    if (word.examples[tense][pronoun]) {
      exampleEs = word.examples[tense][pronoun].es;
      exampleRu = word.examples[tense][pronoun].ru;
    } else {
      exampleEs = word.examples[tense].es || '';
      exampleRu = word.examples[tense].ru || '';
    }
  } else {
    exampleEs = word.examples[tense].es || '';
    exampleRu = word.examples[tense].ru || '';
  }
  
  examplePhrase.textContent = exampleEs;
  exampleTranslation.textContent = exampleRu;
  playBtn.setAttribute('data-text', exampleEs);
  
  const tenseButtons = card.querySelectorAll('.learn-es__tense-btn');
  tenseButtons.forEach(btn => {
    if (btn.getAttribute('data-tense') === tense) {
      btn.classList.add('learn-es__tense-btn--active');
    } else {
      btn.classList.remove('learn-es__tense-btn--active');
    }
  });
}

function changePronoun(wordId, pronoun) {
  const word = spanishWords.find(w => w.id === wordId);
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
    
    examplePhrase.textContent = exampleEs;
    exampleTranslation.textContent = exampleRu;
    playBtn.setAttribute('data-text', exampleEs);
  }
}

async function addWordToHistory(wordId) {
  const word = spanishWords.find(w => w.id === wordId);
  if (!word) return;
  
  const isAlreadyLearned = learnedWordIds.has(word.word);
  
  if (isAlreadyLearned) {
    return;
  }
  
  try {
    await chrome.runtime.sendMessage({
      action: 'saveToHistory',
      original: word.word,
      translation: word.translation,
      sourceLang: 'es',
      targetLang: 'ru',
      category: 'ES-RU-L',
      source: 'learn-es',
      spanishWord: word.word // Сохраняем испанское слово
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
    
    const card = document.querySelector(`.learn-es__card[data-word-id="${wordId}"]`);
    if (card) {
      card.classList.add('learn-es__card--learned');
    }
  } catch (error) {
    console.error('Error adding word to history:', error);
    alert('Ошибка при добавлении слова в историю');
  }
}

async function removeWordFromHistory(wordId) {
  const word = spanishWords.find(w => w.id === wordId);
  if (!word) return;
  
  try {
    const response = await chrome.runtime.sendMessage({ action: 'getHistory' });
    if (!response || !response.historyByLang) return;
    
    const historyByLang = response.historyByLang;
    const esRuLHistory = historyByLang['es-ru-l'] || [];
    
    const updatedHistory = esRuLHistory.filter(item => 
      item.original !== word.word || item.translation !== word.translation
    );
    
    historyByLang['es-ru-l'] = updatedHistory;
    
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
