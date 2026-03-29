// Состояние формы перевода
let isFormOpen = false;
let currentDirection = 'es-ru'; // es-ru или ru-es
let currentInputText = '';
let currentTranslation = '';

// Инициализация формы перевода
function initTranslateFloat() {
  const floatBtn = document.getElementById('translateFloatBtn');
  const floatForm = document.getElementById('translateFloatForm');
  const closeBtn = document.getElementById('closeTranslateForm');
  const langSwitchBtn = document.getElementById('langSwitchBtn');
  const translateInput = document.getElementById('translateInput');
  const playInputBtn = document.getElementById('playInputBtn');
  const playTranslationBtn = document.getElementById('playTranslationBtn');
  const addToHistoryBtn = document.getElementById('addToHistoryBtn');

  if (!floatBtn || !floatForm) return;

  // Открытие/закрытие формы
  floatBtn.addEventListener('click', () => {
    toggleForm();
  });

  closeBtn.addEventListener('click', () => {
    closeForm();
  });

  // Переключение направления перевода
  langSwitchBtn.addEventListener('click', () => {
    currentDirection = currentDirection === 'es-ru' ? 'ru-es' : 'es-ru';
    updateLangLabel();
    updatePlaceholder();
    if (currentInputText) {
      performTranslation();
    }
  });

  // Перевод при вводе текста
  let translateTimeout;
  translateInput.addEventListener('input', (e) => {
    currentInputText = e.target.value.trim();
    
    clearTimeout(translateTimeout);
    
    if (currentInputText) {
      translateTimeout = setTimeout(() => {
        performTranslation();
      }, 500);
    } else {
      hideResult();
    }
  });

  // Воспроизведение оригинала
  playInputBtn.addEventListener('click', async () => {
    if (!currentInputText) return;
    const lang = currentDirection === 'es-ru' ? 'es' : 'ru';
    await playTextAudio(currentInputText, lang, playInputBtn);
  });

  // Воспроизведение перевода
  playTranslationBtn.addEventListener('click', async () => {
    if (!currentTranslation) return;
    const lang = currentDirection === 'es-ru' ? 'ru' : 'es';
    await playTextAudio(currentTranslation, lang, playTranslationBtn);
  });

  // Добавление в историю
  addToHistoryBtn.addEventListener('click', async () => {
    await addTranslationToHistory();
  });
}

function toggleForm() {
  const floatForm = document.getElementById('translateFloatForm');
  isFormOpen = !isFormOpen;
  
  if (isFormOpen) {
    floatForm.style.display = 'block';
    document.getElementById('translateInput').focus();
  } else {
    floatForm.style.display = 'none';
  }
}

function closeForm() {
  const floatForm = document.getElementById('translateFloatForm');
  isFormOpen = false;
  floatForm.style.display = 'none';
}

function updateLangLabel() {
  const label = document.getElementById('currentLangLabel');
  label.textContent = currentDirection === 'es-ru' ? 'ES → RU' : 'RU → ES';
}

function updatePlaceholder() {
  const input = document.getElementById('translateInput');
  input.placeholder = currentDirection === 'es-ru' 
    ? 'Введите текст на испанском...' 
    : 'Введите текст на русском...';
}

async function performTranslation() {
  if (!currentInputText) return;

  const sourceLang = currentDirection === 'es-ru' ? 'es' : 'ru';
  const targetLang = currentDirection === 'es-ru' ? 'ru' : 'es';

  try {
    const response = await chrome.runtime.sendMessage({
      action: 'translate',
      text: currentInputText,
      sourceLang: sourceLang,
      targetLang: targetLang
    });

    if (response && response.translation) {
      currentTranslation = response.translation;
      showResult(currentTranslation);
    }
  } catch (error) {
    console.error('Translation error:', error);
    showResult('Ошибка перевода');
  }
}

function showResult(translation) {
  const resultDiv = document.getElementById('translateResult');
  const translationText = document.getElementById('translationText');
  
  translationText.textContent = translation;
  resultDiv.style.display = 'block';
}

function hideResult() {
  const resultDiv = document.getElementById('translateResult');
  resultDiv.style.display = 'none';
  currentTranslation = '';
}

async function playTextAudio(text, lang, button) {
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

    if (response && response.success && response.audioData) {
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

async function addTranslationToHistory() {
  if (!currentInputText || !currentTranslation) return;

  const addBtn = document.getElementById('addToHistoryBtn');
  addBtn.disabled = true;

  try {
    // Определяем исходный и целевой текст
    // Всегда сохраняем как ES-RU (испанский -> русский)
    const original = currentDirection === 'es-ru' ? currentInputText : currentTranslation;
    const translation = currentDirection === 'es-ru' ? currentTranslation : currentInputText;

    // Отправляем сообщение для сохранения в историю
    const response = await chrome.runtime.sendMessage({
      action: 'saveToHistory',
      original: original,
      translation: translation,
      sourceLang: 'es',
      targetLang: 'ru',
      category: 'ES-RU-L',
      source: 'learn-page'
    });

    if (response && response.success) {
      // Визуальная обратная связь
      const originalHTML = addBtn.innerHTML;
      addBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
      
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

// Инициализация при загрузке страницы
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTranslateFloat);
} else {
  initTranslateFloat();
}
