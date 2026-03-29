let allPhrases = [];
let filteredPhrases = [];
let currentSort = 'id';
let currentCategory = 'all';
let currentStatus = '';
let searchQuery = '';
let addedPhrases = new Set();

// Кеш для переводов
const translationCache = new Map();

// Переменные для ленивой загрузки
let allFilteredPhrases = [];
let displayedPhrasesCount = 0;
const PHRASES_PER_PAGE = 10;
let isLoadingMore = false;

const categoryNames = {
  greetings: 'Приветствия (Saludos)',
  introduction: 'Знакомство (Presentación)',
  communication: 'Общение (Comunicación)',
  politeness: 'Вежливость (Cortesía)',
  help: 'Помощь (Ayuda)',
  questions: 'Вопросы (Preguntas)',
  expressions: 'Выражения (Expresiones)',
  agreement: 'Согласие (Acuerdo)',
  disagreement: 'Несогласие (Desacuerdo)',
  uncertainty: 'Неуверенность (Incertidumbre)',
  opinion: 'Мнение (Opinión)',
  requests: 'Просьбы (Peticiones)',
  time: 'Время (Tiempo)',
  commands: 'Команды (Comandos)',
  warnings: 'Предупреждения (Advertencias)',
  calming: 'Успокоение (Calma)',
  reassurance: 'Утешение (Tranquilidad)',
  activities: 'Деятельность (Actividades)',
  states: 'Состояния (Estados)',
  needs: 'Потребности (Necesidades)',
  feelings: 'Чувства (Sentimientos)',
  preferences: 'Предпочтения (Preferencias)',
  desires: 'Желания (Deseos)',
  ability: 'Способности (Habilidad)',
  intentions: 'Намерения (Intenciones)',
  completion: 'Завершение (Finalización)',
  progress: 'Прогресс (Progreso)',
  difficulty: 'Сложность (Dificultad)',
  importance: 'Важность (Importancia)',
  possibility: 'Возможность (Posibilidad)',
  impossibility: 'Невозможность (Imposibilidad)',
  shopping: 'Покупки (Compras)',
  location: 'Местоположение (Ubicación)',
  directions: 'Направления (Direcciones)',
  movement: 'Движение (Movimiento)',
  frequency: 'Частота (Frecuencia)',
  repetition: 'Повторение (Repetición)',
  sequence: 'Последовательность (Secuencia)',
  giving: 'Передача (Dar)',
  confirmation: 'Подтверждение (Confirmación)',
  doubt: 'Сомнение (Duda)',
  truth: 'Правда (Verdad)',
  falsity: 'Ложь (Falsedad)',
  reactions: 'Реакции (Reacciones)',
  responses: 'Ответы (Respuestas)',
  improvement: 'Улучшение (Mejora)',
  worsening: 'Ухудшение (Empeoramiento)',
  understanding: 'Понимание (Comprensión)',
  knowledge: 'Знание (Conocimiento)',
  memory: 'Память (Memoria)',
  documents: 'Документы (Documentos)',
  relief: 'Облегчение (Alivio)',
  fillers: 'Слова-паразиты (Muletillas)',
  connectors: 'Связующие слова (Conectores)',
  attention: 'Привлечение внимания (Atención)',
  correction: 'Исправление (Corrección)',
  promises: 'Обещания (Promesas)',
  trust: 'Доверие (Confianza)',
  advice: 'Совет (Consejo)',
  admission: 'Признание (Admisión)',
  evaluation: 'Оценка (Evaluación)',
  conditions: 'Условия (Condiciones)',
  precaution: 'Предосторожность (Precaución)',
  examples: 'Примеры (Ejemplos)',
  contrast: 'Контраст (Contraste)',
  manner: 'Манера (Manera)',
  pronouns: 'Местоимения (Pronombres)',
  negation: 'Отрицание (Negación)',
  certainty: 'Уверенность (Certeza)',
  encouragement: 'Ободрение (Ánimo)'
};

document.addEventListener('DOMContentLoaded', async () => {
  await loadAddedPhrases();
  await loadPhrases();
  initializeFilters();
  setupEventListeners();
  
  const backToWordsBtn = document.getElementById('backToWordsBtn');
  if (backToWordsBtn) {
    backToWordsBtn.addEventListener('click', () => {
      window.location.href = 'learn-en.html';
    });
  }
});

async function loadAddedPhrases() {
  try {
    const response = await chrome.runtime.sendMessage({ action: 'getHistory' });
    if (response && response.historyByLang && response.historyByLang['en-ru-l']) {
      const enRuLHistory = response.historyByLang['en-ru-l'];
      enRuLHistory.forEach(item => {
        // Используем сохраненное испанское слово если есть
        if (item.spanishWord) {
          const phraseKey = `${item.spanishWord}|${item.translation}`;
          addedPhrases.add(phraseKey);
          console.log('📚 Added learned phrase from history:', item.spanishWord);
        } else {
          // Fallback для старых записей без spanishWord
          const spanishPhrase = phrasesData.find(p => p.translation === item.translation);
          if (spanishPhrase) {
            const phraseKey = `${spanishPhrase.phrase}|${spanishPhrase.translation}`;
            addedPhrases.add(phraseKey);
            console.log('📚 Added learned phrase via fallback:', spanishPhrase.phrase);
          }
        }
      });
    }
  } catch (error) {
    console.error('Error loading added phrases:', error);
  }
}

async function loadPhrases() {
  allPhrases = [...phrasesData];
  filteredPhrases = [...allPhrases];
  populateCategoryFilter();
  updateStats();
  await displayPhrases(true);
}

function populateCategoryFilter() {
  const categoryFilter = document.getElementById('categoryFilter');
  const categories = [...new Set(allPhrases.map(p => p.category))].sort();
  
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = categoryNames[category] || category;
    categoryFilter.appendChild(option);
  });
}

function initializeFilters() {
  const categoryFilter = document.getElementById('categoryFilter');
  const sortSelect = document.getElementById('sortSelect');
  const searchInput = document.getElementById('searchInput');

  categoryFilter.value = currentCategory;
  sortSelect.value = currentSort;
  searchInput.value = searchQuery;
}

function setupEventListeners() {
  document.getElementById('categoryFilter').addEventListener('change', async (e) => {
    currentCategory = e.target.value;
    await applyFilters();
  });
  
  document.getElementById('statusFilter').addEventListener('change', async (e) => {
    currentStatus = e.target.value;
    await applyFilters();
  });
  
  document.getElementById('sortSelect').addEventListener('change', async (e) => {
    currentSort = e.target.value;
    await applyFilters();
  });
  
  document.getElementById('searchInput').addEventListener('input', async (e) => {
    searchQuery = e.target.value.toLowerCase();
    await applyFilters();
  });
}

async function applyFilters() {
  await displayPhrases(true);
  updateStats();
}

function sortPhrases() {
  switch (currentSort) {
    case 'alphabetical':
      filteredPhrases.sort((a, b) => a.phrase.localeCompare(b.phrase));
      break;
    case 'category':
      filteredPhrases.sort((a, b) => {
        const catCompare = a.category.localeCompare(b.category);
        return catCompare !== 0 ? catCompare : a.id - b.id;
      });
      break;
    case 'id':
    default:
      filteredPhrases.sort((a, b) => a.id - b.id);
  }
}

async function displayPhrases(reset = true) {
  const phrasesList = document.getElementById('phrasesList');
  
  if (reset) {
    // Фильтруем все фразы
    allFilteredPhrases = [...phrasesData];
    
    if (currentCategory !== 'all') {
      allFilteredPhrases = allFilteredPhrases.filter(phrase => phrase.category === currentCategory);
    }
    
    if (currentStatus === 'learned') {
      allFilteredPhrases = allFilteredPhrases.filter(phrase => {
        const phraseKey = `${phrase.phrase}|${phrase.translation}`;
        return addedPhrases.has(phraseKey);
      });
    } else if (currentStatus === 'not-learned') {
      allFilteredPhrases = allFilteredPhrases.filter(phrase => {
        const phraseKey = `${phrase.phrase}|${phrase.translation}`;
        return !addedPhrases.has(phraseKey);
      });
    }
    
    if (searchQuery) {
      allFilteredPhrases = allFilteredPhrases.filter(phrase => 
        phrase.phrase.toLowerCase().includes(searchQuery) ||
        phrase.translation.toLowerCase().includes(searchQuery)
      );
    }
    
    // Сортировка
    switch (currentSort) {
      case 'alphabetical':
        allFilteredPhrases.sort((a, b) => a.phrase.localeCompare(b.phrase));
        break;
      case 'category':
        allFilteredPhrases.sort((a, b) => {
          const catCompare = a.category.localeCompare(b.category);
          return catCompare !== 0 ? catCompare : a.id - b.id;
        });
        break;
      case 'id':
      default:
        allFilteredPhrases.sort((a, b) => a.id - b.id);
    }
    
    displayedPhrasesCount = 0;
    phrasesList.innerHTML = '';
  }
  
  if (allFilteredPhrases.length === 0) {
    phrasesList.innerHTML = '<div class="learn-es__empty">Фразы не найдены</div>';
    return;
  }
  
  if (displayedPhrasesCount >= allFilteredPhrases.length) {
    return; // Все фразы уже загружены
  }
  
  // Определяем сколько фраз загружать
  const phrasesToLoad = Math.min(PHRASES_PER_PAGE, allFilteredPhrases.length - displayedPhrasesCount);
  const phrasesChunk = allFilteredPhrases.slice(displayedPhrasesCount, displayedPhrasesCount + phrasesToLoad);
  
  if (isLoadingMore) {
    // Добавляем индикатор загрузки
    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'learn-es__loading';
    loadingIndicator.innerHTML = `
      <div class="learn-es__loading-spinner"></div>
      <p>Загрузка фраз...</p>
    `;
    phrasesList.appendChild(loadingIndicator);
  }
  
  // Создаем карточки для chunk фраз
  const phraseCards = await Promise.all(phrasesChunk.map(phrase => createPhraseCard(phrase)));
  
  if (isLoadingMore) {
    // Удаляем индикатор загрузки
    const loadingIndicator = phrasesList.querySelector('.learn-es__loading');
    if (loadingIndicator) {
      loadingIndicator.remove();
    }
  }
  
  // Добавляем обработчики событий для новых элементов
  const newElementsContainer = document.createElement('div');
  newElementsContainer.innerHTML = phraseCards.join('');
  
  attachEventListeners(newElementsContainer);
  
  // Добавляем новые карточки в DOM
  while (newElementsContainer.firstChild) {
    phrasesList.appendChild(newElementsContainer.firstChild);
  }
  
  displayedPhrasesCount += phrasesToLoad;
  
  // Показываем кнопку "Загрузить еще" если есть еще фразы
  if (displayedPhrasesCount < allFilteredPhrases.length) {
    showLoadMoreButton();
  } else {
    hideLoadMoreButton();
  }
}

async function createPhraseCard(phrase) {
  const phraseKey = `${phrase.phrase}|${phrase.translation}`;
  const isAdded = addedPhrases.has(phraseKey);
  
  // Переводим фразу с испанского на английский
  const phraseEn = await translateSpanishToEnglish(phrase.phrase);
  
  const cardClass = isAdded ? 'learn-es__card learn-es__card--learned' : 'learn-es__card';
  const categoryBadge = `<span class="learn-es__category-badge">${categoryNames[phrase.category] || phrase.category}</span>`;

  return `
    <div class="${cardClass}" data-phrase-id="${phrase.id}">
      <div class="learn-es__card-header">
        <div class="learn-es__word-section">
          <div class="learn-es__word-main">
            <button class="learn-es__play-btn" data-text="${escapeHtml(phraseEn)}" data-lang="en">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <span class="learn-es__word">${phraseEn}</span>
          </div>
          <div class="learn-es__translation">${phrase.translation}</div>
        </div>
        <button class="learn-es__add-btn ${isAdded ? 'learn-es__add-btn--added' : ''}" data-phrase="${escapeHtml(phrase.phrase)}" data-translation="${escapeHtml(phrase.translation)}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${isAdded 
              ? '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>'
              : '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>'
            }
          </svg>
        </button>
      </div>
      <div class="learn-es__meta">
        ${categoryBadge}
      </div>
    </div>
  `;
}

function attachEventListeners(container = document) {
  const playButtons = container.querySelectorAll('.learn-es__play-btn');
  playButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      playAudio(this.dataset.text, this.dataset.lang, this);
    });
  });

  const addButtons = container.querySelectorAll('.learn-es__add-btn');
  addButtons.forEach(btn => {
    // Удаляем все существующие обработчики чтобы избежать дублирования
    btn.replaceWith(btn.cloneNode(true));
  });
  
  // Добавляем новый обработчик
  container.querySelectorAll('.learn-es__add-btn').forEach(btn => {
    btn.addEventListener('click', async function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      console.log('=== CLICK ON ADD BUTTON ===');
      console.log('Button dataset:', this.dataset);
      console.log('Button classes:', this.className);
      
      const spanishPhrase = this.dataset.phrase;
      const russianTranslation = this.dataset.translation;
      const isCurrentlyAdded = this.classList.contains('learn-es__add-btn--added');
      
      console.log('Spanish phrase:', spanishPhrase);
      console.log('Russian translation:', russianTranslation);
      console.log('Is currently added:', isCurrentlyAdded);
      
      if (isCurrentlyAdded) {
        console.log('Removing from history...');
        removeFromHistory(spanishPhrase, russianTranslation, this);
      } else {
        // Берем английский перевод со страницы из .learn-es__word
        const card = this.closest('.learn-es__card');
        const englishPhrase = card.querySelector('.learn-es__word').textContent.trim();
        
        console.log('English phrase from page:', englishPhrase);
        console.log('Calling addToHistory...');
        
        addToHistory(spanishPhrase, russianTranslation, englishPhrase, this);
      }
    });
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML.replace(/'/g, "\\'");
}

function updateStats() {
  const phrasesCount = document.getElementById('phrasesCount');
  phrasesCount.textContent = `Всего фраз: ${filteredPhrases.length}`;
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
    console.error('Audio error:', error);
    button.disabled = false;
    button.innerHTML = originalHTML;
  }
}

async function addToHistory(spanishPhrase, russianTranslation, englishPhrase, button) {
  try {
    const messageData = {
      action: 'saveToHistory',
      original: englishPhrase, // Сохраняем английский перевод
      translation: russianTranslation,
      sourceLang: 'en',
      targetLang: 'ru',
      category: 'EN-RU-L',
      source: 'learn-en-phrases',
      spanishWord: spanishPhrase // Сохраняем испанскую фразу для обратного поиска
    };
    
    console.log('🚀 SENDING MESSAGE TO BACKGROUND:');
    console.log('🚀 MESSAGE DATA:', JSON.stringify(messageData, null, 2));
    
    await chrome.runtime.sendMessage(messageData);
    
    console.log('✅ MESSAGE SENT SUCCESSFULLY');
    
    const phraseKey = `${spanishPhrase}|${russianTranslation}`;
    addedPhrases.add(phraseKey);
    
    if (button) {
      button.classList.add('learn-es__add-btn--added');
      button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
      
      const card = button.closest('.learn-es__card');
      if (card) {
        card.classList.add('learn-es__card--learned');
      }
    }
    
    showNotification('Фраза добавлена в историю');
  } catch (error) {
    console.error('Error adding to history:', error);
    showNotification('Ошибка при добавлении в историю', 'error');
  }
}

async function removeFromHistory(spanishPhrase, russianTranslation, button) {
  try {
    const response = await chrome.runtime.sendMessage({ action: 'getHistory' });
    if (!response || !response.historyByLang) return;
    
    const historyByLang = response.historyByLang;
    const enRuLHistory = historyByLang['en-ru-l'] || [];
    
    // Ищем и удаляем по русскому переводу, так как оригинал теперь английский
    const updatedHistory = enRuLHistory.filter(item => item.translation !== russianTranslation);
    
    historyByLang['en-ru-l'] = updatedHistory;
    
    await chrome.runtime.sendMessage({
      action: 'updateHistory',
      historyByLang: historyByLang
    });
    
    const phraseKey = `${spanishPhrase}|${russianTranslation}`;
    addedPhrases.delete(phraseKey);
    
    if (button) {
      button.classList.remove('learn-es__add-btn--added');
      button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      `;
      
      const card = button.closest('.learn-es__card');
      if (card) {
        card.classList.remove('learn-es__card--learned');
      }
    }
    
    showNotification('Фраза удалена из истории');
  } catch (error) {
    console.error('Error removing from history:', error);
    showNotification('Ошибка при удалении из истории', 'error');
  }
}

function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `learn-es__notification learn-es__notification--${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('learn-es__notification--show');
  }, 10);

  setTimeout(() => {
    notification.classList.remove('learn-es__notification--show');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 2000);
}

// Функция для перевода текста с испанского на английский
async function translateSpanishToEnglish(spanishText) {
  // Простые fallback переводы для основных фраз
  const fallbackTranslations = {
    'hola': 'hello',
    'buenos días': 'good morning',
    'buenas tardes': 'good afternoon',
    'buenas noches': 'good evening',
    '¿cómo estás?': 'how are you?',
    '¿cómo está usted?': 'how are you? (formal)',
    '¿cómo te llamas?': 'what\'s your name?',
    'me llamo': 'my name is',
    'mucho gusto': 'nice to meet you',
    'encantado': 'pleased to meet you',
    '¿de dónde eres?': 'where are you from?',
    'soy de': 'I am from',
    '¿dónde vives?': 'where do you live?',
    'vivo en': 'I live in'
  };
  
  // Проверяем кеш
  if (translationCache.has(spanishText)) {
    return translationCache.get(spanishText);
  }
  
  // Если есть fallback перевод, используем его
  if (fallbackTranslations[spanishText]) {
    translationCache.set(spanishText, fallbackTranslations[spanishText]);
    return fallbackTranslations[spanishText];
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
      
      await displayPhrases(false);
      
      isLoadingMore = false;
    });
    
    const phrasesList = document.getElementById('phrasesList');
    phrasesList.appendChild(loadMoreBtn);
  }
}

function hideLoadMoreButton() {
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.remove();
  }
}
