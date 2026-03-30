let translationPopup = null;
let isPopupOpen = false;

document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === 'z') {
    event.preventDefault();
    event.stopPropagation();
    
    if (isPopupOpen && translationPopup) {
      closeTranslationPopup();
    } else {
      const selectedText = window.getSelection().toString().trim();
      
      if (selectedText) {
        handleTranslation(selectedText);
      }
    }
  }
});

document.addEventListener('mousedown', (event) => {
  if (translationPopup && !translationPopup.contains(event.target) && isPopupOpen) {
    closeTranslationPopup();
  }
}, true);

async function handleTranslation(text) {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  
  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();
  
  showLoadingPopup(rect, text);
  
  try {
    const response = await chrome.runtime.sendMessage({
      action: 'translate',
      text: text
    });
    
    if (response.success) {
      showTranslationPopup(rect, text, response.translation, response.sourceLang, response.targetLang);
      
      await chrome.runtime.sendMessage({
        action: 'saveToHistory',
        original: text,
        translation: response.translation,
        sourceLang: response.sourceLang,
        targetLang: response.targetLang,
        source: window.location.href
      });
    } else {
      showErrorPopup(rect, response.error || 'Translation failed');
    }
  } catch (error) {
    showErrorPopup(rect, 'Connection error');
  }
}

function showLoadingPopup(rect, text) {
  if (translationPopup) {
    translationPopup.remove();
    translationPopup = null;
  }
  
  translationPopup = document.createElement('div');
  translationPopup.className = 'translate-popup translate-popup--loading';
  translationPopup.innerHTML = `
    <div class="translate-popup__content">
      <div class="translate-popup__text">${escapeHtml(text)}</div>
      <div class="translate-popup__loader">
        <div class="translate-popup__spinner"></div>
        <span>Translating...</span>
      </div>
    </div>
  `;
  
  positionPopup(translationPopup, rect);
  document.body.appendChild(translationPopup);
  isPopupOpen = true;
  
  setTimeout(() => {
    if (translationPopup) {
      translationPopup.classList.add('translate-popup--visible');
    }
  }, 10);
}

function showTranslationPopup(rect, originalText, translatedText, sourceLang, targetLang) {
  if (translationPopup) {
    translationPopup.remove();
    translationPopup = null;
  }
  
  translationPopup = document.createElement('div');
  translationPopup.className = 'translate-popup';
  translationPopup.innerHTML = `
    <div class="translate-popup__content">
      <div class="translate-popup__header">
        <span class="translate-popup__lang-badge">${sourceLang.toUpperCase()} → ${targetLang.toUpperCase()}</span>
        <div class="translate-popup__header-actions">
          <button class="translate-popup__discard" title="Don't save to history">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
          <button class="translate-popup__close" title="Close">×</button>
        </div>
      </div>
      <div class="translate-popup__original">
        <div class="translate-popup__label-row">
          <div class="translate-popup__label">Original:</div>
          <div class="translate-popup__label-actions">
            <button class="translate-popup__play-inline" title="Play original" data-text="${escapeHtml(originalText)}" data-lang="${sourceLang}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <button class="translate-popup__copy-inline" title="Copy original" data-text="${escapeHtml(originalText)}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="translate-popup__text">${escapeHtml(originalText)}</div>
      </div>
      <div class="translate-popup__translation">
        <div class="translate-popup__label-row">
          <div class="translate-popup__label">Translation:</div>
          <div class="translate-popup__label-actions">
            <button class="translate-popup__play-inline" title="Play translation" data-text="${escapeHtml(translatedText)}" data-lang="${targetLang}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <button class="translate-popup__copy-inline" title="Copy translation" data-text="${escapeHtml(translatedText)}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="translate-popup__text">${escapeHtml(translatedText)}</div>
      </div>
      <div class="translate-popup__actions">
        <select class="translate-popup__category" id="categorySelect">
          <option value="">Select category...</option>
        </select>
      </div>
    </div>
  `;
  
  positionPopup(translationPopup, rect);
  document.body.appendChild(translationPopup);
  isPopupOpen = true;
  
  setTimeout(() => {
    if (translationPopup) {
      translationPopup.classList.add('translate-popup--visible');
    }
  }, 10);
  
  const closeBtn = translationPopup.querySelector('.translate-popup__close');
  closeBtn.addEventListener('click', closeTranslationPopup);
  
  const discardBtn = translationPopup.querySelector('.translate-popup__discard');
  discardBtn.addEventListener('click', async () => {
    await deleteFromHistory(originalText, translatedText, sourceLang, targetLang);
    closeTranslationPopup();
  });
  
  const playButtons = translationPopup.querySelectorAll('.translate-popup__play-inline');
  playButtons.forEach(playBtn => {
    playBtn.addEventListener('click', () => {
      const text = playBtn.getAttribute('data-text');
      const lang = playBtn.getAttribute('data-lang');
      playAudio(text, lang, playBtn);
    });
  });
  
  const copyButtons = translationPopup.querySelectorAll('.translate-popup__copy-inline');
  copyButtons.forEach(copyBtn => {
    copyBtn.addEventListener('click', () => {
      const text = copyBtn.getAttribute('data-text');
      navigator.clipboard.writeText(text).then(() => {
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;
        setTimeout(() => {
          copyBtn.innerHTML = originalHTML;
        }, 1500);
      });
    });
  });
  
  loadCategories(translationPopup, originalText, translatedText, sourceLang, targetLang);
}

async function loadCategories(popup, originalText, translatedText, sourceLang, targetLang) {
  const response = await chrome.runtime.sendMessage({ action: 'getCategories' });
  const categories = response.categories || [];
  
  const categorySelect = popup.querySelector('.translate-popup__category');
  
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
  
  categorySelect.addEventListener('change', async () => {
    const selectedCategory = categorySelect.value;
    if (selectedCategory) {
      await chrome.runtime.sendMessage({
        action: 'saveToHistory',
        original: originalText,
        translation: translatedText,
        sourceLang: sourceLang,
        targetLang: targetLang,
        category: selectedCategory,
        source: window.location.href
      });
      
      categorySelect.style.background = '#10b981';
      categorySelect.style.color = '#ffffff';
      categorySelect.style.borderColor = '#10b981';
      
      setTimeout(() => {
        categorySelect.style.background = '';
        categorySelect.style.color = '';
        categorySelect.style.borderColor = '';
        categorySelect.value = '';
      }, 1500);
    }
  });
}

function showErrorPopup(rect, errorMessage) {
  if (translationPopup) {
    translationPopup.remove();
    translationPopup = null;
  }
  
  translationPopup = document.createElement('div');
  translationPopup.className = 'translate-popup translate-popup--error';
  translationPopup.innerHTML = `
    <div class="translate-popup__content">
      <div class="translate-popup__error">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <span>${escapeHtml(errorMessage)}</span>
      </div>
      <button class="translate-popup__close" title="Close">×</button>
    </div>
  `;
  
  positionPopup(translationPopup, rect);
  document.body.appendChild(translationPopup);
  isPopupOpen = true;
  
  setTimeout(() => {
    if (translationPopup) {
      translationPopup.classList.add('translate-popup--visible');
    }
  }, 10);
  
  const closeBtn = translationPopup.querySelector('.translate-popup__close');
  closeBtn.addEventListener('click', closeTranslationPopup);
}

function positionPopup(popup, rect) {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
  let top = rect.bottom + scrollTop + 10;
  let left = rect.left + scrollLeft;
  
  popup.style.position = 'absolute';
  popup.style.top = `${top}px`;
  popup.style.left = `${left}px`;
  popup.style.zIndex = '2147483647';
  
  setTimeout(() => {
    const popupRect = popup.getBoundingClientRect();
    
    if (popupRect.right > window.innerWidth) {
      left = rect.right + scrollLeft - popupRect.width;
      popup.style.left = `${Math.max(10, left)}px`;
    }
    
    if (popupRect.bottom > window.innerHeight) {
      top = rect.top + scrollTop - popupRect.height - 10;
      popup.style.top = `${Math.max(10, top)}px`;
    }
  }, 0);
}

function closeTranslationPopup() {
  if (translationPopup) {
    translationPopup.classList.remove('translate-popup--visible');
    isPopupOpen = false;
    setTimeout(() => {
      if (translationPopup && translationPopup.parentNode) {
        translationPopup.parentNode.removeChild(translationPopup);
      }
      translationPopup = null;
    }, 200);
  }
}

async function playAudio(text, lang, button) {
  if (!text || !lang) return;
  
  const originalHTML = button.innerHTML;
  button.disabled = true;
  
  const isInline = button.classList.contains('translate-popup__play-inline') || button.classList.contains('popup__history-play');
  const iconSize = isInline ? '14' : '16';
  
  button.innerHTML = `
    <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
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
      
      audio.addEventListener('error', (e) => {
        console.error('Audio playback error:', e);
        button.disabled = false;
        button.innerHTML = originalHTML;
      });
      
      await audio.play();
    } else {
      throw new Error(response.error || 'Failed to get audio');
    }
  } catch (error) {
    console.error('Audio playback failed:', error);
    button.disabled = false;
    button.innerHTML = originalHTML;
  }
}

async function deleteFromHistory(originalText, translatedText, sourceLang, targetLang) {
  const response = await chrome.runtime.sendMessage({ action: 'getHistory' });
  if (!response || !response.historyByLang) return;
  
  const langPair = `${sourceLang}-${targetLang}`;
  const historyByLang = response.historyByLang;
  
  if (historyByLang[langPair]) {
    historyByLang[langPair] = historyByLang[langPair].filter(item => {
      return !(item.original === originalText && item.translation === translatedText);
    });
    
    await chrome.runtime.sendMessage({
      action: 'updateHistory',
      historyByLang: historyByLang
    });
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
