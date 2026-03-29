let allPhrases = [];
let filteredPhrases = [];
let currentSort = 'id';
let currentCategory = 'all';
let currentStatus = '';
let searchQuery = '';
let addedPhrases = new Set();

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
  loadPhrases();
  initializeFilters();
  setupEventListeners();
  
  const backToWordsBtn = document.getElementById('backToWordsBtn');
  if (backToWordsBtn) {
    backToWordsBtn.addEventListener('click', () => {
      window.location.href = 'learn-es.html';
    });
  }
});

async function loadAddedPhrases() {
  try {
    const response = await chrome.runtime.sendMessage({ action: 'getHistory' });
    if (response && response.historyByLang && response.historyByLang['es-ru-l']) {
      const esRuLHistory = response.historyByLang['es-ru-l'];
      esRuLHistory.forEach(item => {
        const phraseKey = `${item.original}|${item.translation}`;
        addedPhrases.add(phraseKey);
      });
    }
  } catch (error) {
    console.error('Error loading added phrases:', error);
  }
}

function loadPhrases() {
  allPhrases = [...phrasesData];
  filteredPhrases = [...allPhrases];
  populateCategoryFilter();
  renderPhrases();
  updateStats();
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
  document.getElementById('categoryFilter').addEventListener('change', handleCategoryChange);
  document.getElementById('statusFilter').addEventListener('change', handleStatusChange);
  document.getElementById('sortSelect').addEventListener('change', handleSortChange);
  document.getElementById('searchInput').addEventListener('input', handleSearch);
}

function handleCategoryChange(e) {
  currentCategory = e.target.value;
  applyFilters();
}

function handleStatusChange(e) {
  currentStatus = e.target.value;
  applyFilters();
}

function handleSortChange(e) {
  currentSort = e.target.value;
  applyFilters();
}

function handleSearch(e) {
  searchQuery = e.target.value.toLowerCase();
  applyFilters();
}

function applyFilters() {
  filteredPhrases = allPhrases.filter(phrase => {
    const phraseKey = `${phrase.phrase}|${phrase.translation}`;
    const matchesCategory = currentCategory === 'all' || phrase.category === currentCategory;
    const matchesStatus = currentStatus === '' || 
      (currentStatus === 'learned' && addedPhrases.has(phraseKey)) ||
      (currentStatus === 'not-learned' && !addedPhrases.has(phraseKey));
    const matchesSearch = searchQuery === '' || 
      phrase.phrase.toLowerCase().includes(searchQuery) ||
      phrase.translation.toLowerCase().includes(searchQuery);
    
    return matchesCategory && matchesStatus && matchesSearch;
  });

  sortPhrases();
  renderPhrases();
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
      break;
  }
}

function renderPhrases() {
  const phrasesList = document.getElementById('phrasesList');
  phrasesList.innerHTML = '';

  if (filteredPhrases.length === 0) {
    phrasesList.innerHTML = '<div class="learn-es__empty">Фразы не найдены</div>';
    return;
  }

  filteredPhrases.forEach(phrase => {
    const card = createPhraseCard(phrase);
    phrasesList.appendChild(card);
  });
}

function createPhraseCard(phrase) {
  const card = document.createElement('div');
  const phraseKey = `${phrase.phrase}|${phrase.translation}`;
  const isAdded = addedPhrases.has(phraseKey);
  
  card.className = isAdded ? 'learn-es__card learn-es__card--learned' : 'learn-es__card';
  card.dataset.phraseId = phrase.id;

  const categoryBadge = `<span class="learn-es__category-badge">${categoryNames[phrase.category] || phrase.category}</span>`;

  card.innerHTML = `
    <div class="learn-es__card-header">
      <div class="learn-es__word-section">
        <div class="learn-es__word-main">
          <button class="learn-es__play-btn" data-text="${escapeHtml(phrase.phrase)}" data-lang="es">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
          <span class="learn-es__word">${phrase.phrase}</span>
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
  `;

  const playBtn = card.querySelector('.learn-es__play-btn');
  playBtn.addEventListener('click', function() {
    playAudio(this.dataset.text, this.dataset.lang, this);
  });

  const addBtn = card.querySelector('.learn-es__add-btn');
  addBtn.addEventListener('click', function() {
    const phrase = this.dataset.phrase;
    const translation = this.dataset.translation;
    const isCurrentlyAdded = this.classList.contains('learn-es__add-btn--added');
    
    if (isCurrentlyAdded) {
      removeFromHistory(phrase, translation, this);
    } else {
      addToHistory(phrase, translation, this);
    }
  });

  return card;
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

async function addToHistory(phrase, translation, button) {
  try {
    await chrome.runtime.sendMessage({
      action: 'saveToHistory',
      original: phrase,
      translation: translation,
      sourceLang: 'es',
      targetLang: 'ru',
      category: 'ES-RU-L',
      source: 'learn-es-phrases'
    });
    
    const phraseKey = `${phrase}|${translation}`;
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

async function removeFromHistory(phrase, translation, button) {
  try {
    const response = await chrome.runtime.sendMessage({ action: 'getHistory' });
    if (!response || !response.historyByLang) return;
    
    const historyByLang = response.historyByLang;
    const esRuLHistory = historyByLang['es-ru-l'] || [];
    
    const updatedHistory = esRuLHistory.filter(item => 
      item.original !== phrase || item.translation !== translation
    );
    
    historyByLang['es-ru-l'] = updatedHistory;
    
    await chrome.runtime.sendMessage({
      action: 'updateHistory',
      historyByLang: historyByLang
    });
    
    const phraseKey = `${phrase}|${translation}`;
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
