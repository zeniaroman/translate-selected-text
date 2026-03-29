// Search functionality for learn pages
let learnSearchPageType = 'all'; // 'all', 'words', 'phrases'

function initLearnSearch() {
  const searchInput = document.getElementById('learnSearchInput');
  const searchBtn = document.getElementById('learnSearchBtn');
  
  if (!searchInput || !searchBtn) return;
  
  // Определяем тип страницы по наличию данных
  if ((typeof phrasesData !== 'undefined' || typeof phrases !== 'undefined') && typeof spanishWords === 'undefined') {
    learnSearchPageType = 'phrases';
  } else if (typeof spanishWords !== 'undefined' && (typeof phrasesData === 'undefined' && typeof phrases === 'undefined')) {
    learnSearchPageType = 'words';
  } else {
    // Если есть оба типа данных, определяем по URL страницы
    const currentUrl = window.location.pathname;
    if (currentUrl.includes('learn-es-phrases.html') || currentUrl.includes('learn-en-phrases.html')) {
      learnSearchPageType = 'phrases';
    } else if (currentUrl.includes('learn-es.html') || currentUrl.includes('learn-en.html')) {
      learnSearchPageType = 'words';
    } else {
      learnSearchPageType = 'all';
    }
  }
  
  // Поиск по Enter
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performLearnSearch();
    }
  });
  
  // Поиск по кнопке
  searchBtn.addEventListener('click', () => {
    performLearnSearch();
  });
}

async function performLearnSearch() {
  const searchInput = document.getElementById('learnSearchInput');
  const searchResults = document.getElementById('learnSearchResults');
  const query = searchInput.value.trim().toLowerCase();
  
  if (!query) {
    searchResults.style.display = 'none';
    return;
  }
  
  searchResults.style.display = 'block';
  searchResults.innerHTML = '<div class="learn-es__search-empty"><p>Поиск...</p></div>';
  
  try {
    const results = await searchLearnData(query);
    
    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="learn-es__search-empty">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <p>Ничего не найдено для "${query}"</p>
        </div>
      `;
    } else {
      displayLearnSearchResults(results);
    }
  } catch (error) {
    console.error('Search error:', error);
    searchResults.innerHTML = `
      <div class="learn-es__search-empty">
        <p>Ошибка поиска</p>
      </div>
    `;
  }
}

async function searchLearnData(query) {
  const results = [];
  
  // 1. Поиск в истории (только если не страница фраз)
  if (learnSearchPageType !== 'phrases') {
    const historyResponse = await chrome.runtime.sendMessage({ action: 'getHistory' });
    if (historyResponse && historyResponse.historyByLang) {
      for (const [langPair, items] of Object.entries(historyResponse.historyByLang)) {
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
    }
  }
  
  // 2. Поиск в learn-es-data.js (слова) - только если не страница фраз
  if (learnSearchPageType !== 'phrases' && typeof spanishWords !== 'undefined') {
    for (const word of spanishWords) {
      const wordText = word.word || word.es || '';
      const translationText = word.translation || word.ru || '';
      
      // Проверка в слове и переводе
      let found = wordText.toLowerCase().includes(query) || 
                  translationText.toLowerCase().includes(query);
      
      // Проверка в примерах
      if (!found && word.examples) {
        const examplesObj = word.examples;
        for (const tense in examplesObj) {
          for (const person in examplesObj[tense]) {
            const example = examplesObj[tense][person];
            if (example.es && example.es.toLowerCase().includes(query)) {
              found = true;
              break;
            }
            if (example.ru && example.ru.toLowerCase().includes(query)) {
              found = true;
              break;
            }
          }
          if (found) break;
        }
      }
      
      if (found) {
        // Собираем примеры в плоский массив
        const examplesArray = [];
        if (word.examples) {
          for (const tense in word.examples) {
            for (const person in word.examples[tense]) {
              examplesArray.push(word.examples[tense][person]);
            }
          }
        }
        
        results.push({
          type: 'learn-es-words',
          original: wordText,
          translation: translationText,
          sourceLang: 'es',
          targetLang: 'ru',
          examples: examplesArray.slice(0, 3), // Показываем только первые 3 примера
          category: word.category
        });
      }
    }
  }
  
  // 3. Поиск в learn-es-phrases-data.js (фразы) - только если не страница слов
  if (learnSearchPageType !== 'words') {
    const phrasesArray = typeof phrasesData !== 'undefined' ? phrasesData : phrases;
    
    if (phrasesArray) {
      for (const phrase of phrasesArray) {
        const phraseText = phrase.phrase || phrase.es || '';
        const translationText = phrase.translation || phrase.ru || '';
        
        if (phraseText.toLowerCase().includes(query) || 
            translationText.toLowerCase().includes(query)) {
          results.push({
            type: 'learn-es-phrases',
            original: phraseText,
            translation: translationText,
            sourceLang: 'es',
            targetLang: 'ru',
            category: phrase.category
          });
        }
      }
    }
  }
  
  return results;
}

function displayLearnSearchResults(results) {
  const searchResults = document.getElementById('learnSearchResults');
  
  searchResults.innerHTML = results.map((result, index) => {
    const sourceLabel = getLearnSourceLabel(result.type);
    
    return `
      <div class="learn-es__search-card">
        <div class="learn-es__search-card-header">
          <span class="learn-es__search-card-source">${sourceLabel}</span>
        </div>
        <div class="learn-es__search-card-text">
          <div class="learn-es__search-card-original">${escapeLearnHtml(result.original)}</div>
          <div class="learn-es__search-card-translation">${escapeLearnHtml(result.translation)}</div>
        </div>
        ${result.examples ? `
          <div class="learn-es__search-card-examples">
            <div class="learn-es__search-card-examples-title">Примеры:</div>
            ${result.examples.map(ex => `
              <div class="learn-es__search-card-example">
                ${escapeLearnHtml(ex.es)} — ${escapeLearnHtml(ex.ru)}
              </div>
            `).join('')}
          </div>
        ` : ''}
        <div class="learn-es__search-card-footer">
          <span class="learn-es__search-card-category">${result.category || ''}</span>
          <div class="learn-es__search-card-buttons">
            <button class="learn-es__search-play-btn learn-search-play" data-text="${escapeLearnHtml(result.original)}" data-lang="${result.sourceLang}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <button class="learn-es__search-add-btn learn-search-add" data-index="${index}">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Сохраняем результаты для использования в addLearnSearchToHistory
  window.currentLearnSearchResults = results;
  
  // Добавляем обработчики событий
  document.querySelectorAll('.learn-search-play').forEach(button => {
    button.addEventListener('click', (e) => {
      const text = e.target.closest('button').dataset.text;
      const lang = e.target.closest('button').dataset.lang;
      playLearnSearchResult(text, lang, e.target.closest('button'));
    });
  });
  
  document.querySelectorAll('.learn-search-add').forEach(button => {
    button.addEventListener('click', (e) => {
      const index = parseInt(e.target.closest('button').dataset.index);
      addLearnSearchToHistory(index);
    });
  });
}

function getLearnSourceLabel(type) {
  const labels = {
    'history': 'История',
    'learn-es-words': 'Испанские слова',
    'learn-es-phrases': 'Испанские фразы'
  };
  return labels[type] || type;
}

function escapeLearnHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

async function playLearnSearchResult(text, lang, button) {
  if (!text || !lang) return;
  
  // Проверяем доступность функции playAudio
  if (typeof playAudio === 'function') {
    await playAudio(text, lang, button);
  } else {
    // Альтернативная реализация
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
}

async function addLearnSearchToHistory(index) {
  if (!window.currentLearnSearchResults || !window.currentLearnSearchResults[index]) return;
  
  const result = window.currentLearnSearchResults[index];
  
  try {
    const response = await chrome.runtime.sendMessage({
      action: 'saveToHistory',
      original: result.original,
      translation: result.translation,
      sourceLang: 'es',
      targetLang: 'ru',
      category: 'ES-RU-L',
      source: 'learn-search'
    });
    
    if (response && response.success) {
      // Визуальная обратная связь
      const buttons = document.querySelectorAll('.learn-es__search-add-btn');
      const button = buttons[index];
      
      if (button) {
        const originalHTML = button.innerHTML;
        button.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;
        button.disabled = true;
        
        setTimeout(() => {
          button.innerHTML = originalHTML;
          button.disabled = false;
        }, 1500);
      }
    }
  } catch (error) {
    console.error('Error adding to history:', error);
  }
}

// Инициализация при загрузке страницы
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLearnSearch);
} else {
  initLearnSearch();
}
