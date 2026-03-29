const historyTabsContainer = document.getElementById('historyTabs');
const historyList = document.getElementById('historyList');
const showOriginalCheckbox = document.getElementById('showOriginal');
const showTranslationCheckbox = document.getElementById('showTranslation');
const showImageCheckbox = document.getElementById('showImage');
const clearAllBtn = document.getElementById('clearAllBtn');
const manageCategoriesBtn = document.getElementById('manageCategoriesBtn');
const categoryModal = document.getElementById('categoryModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const newCategoryInput = document.getElementById('newCategoryInput');
const addCategoryBtn = document.getElementById('addCategoryBtn');
const categoriesList = document.getElementById('categoriesList');
const manageTagsBtn = document.getElementById('manageTagsBtn');
const tagsModal = document.getElementById('tagsModal');
const closeTagsModalBtn = document.getElementById('closeTagsModalBtn');
const newTagInput = document.getElementById('newTagInput');
const addTagBtn = document.getElementById('addTagBtn');
const tagsList = document.getElementById('tagsList');
const categoryFilter = document.getElementById('categoryFilter');
const statusFilter = document.getElementById('statusFilter');
const tagFilter = document.getElementById('tagFilter');
const editCardModal = document.getElementById('editCardModal');
const closeEditModalBtn = document.getElementById('closeEditModalBtn');
const editOriginal = document.getElementById('editOriginal');
const editTranslation = document.getElementById('editTranslation');
const editImageUrl = document.getElementById('editImageUrl');
const editCustomTitle = document.getElementById('editCustomTitle');
const editContext = document.getElementById('editContext');
const editDescription = document.getElementById('editDescription');
const editSource = document.getElementById('editSource');
const editTagsInput = document.getElementById('editTagsInput');
const editTagsSuggestions = document.getElementById('editTagsSuggestions');
const editSelectedTags = document.getElementById('editSelectedTags');
const saveEditBtn = document.getElementById('saveEditBtn');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');
const moreInfoModal = document.getElementById('moreInfoModal');
const closeMoreInfoModalBtn = document.getElementById('closeMoreInfoModalBtn');
const prevCardBtn = document.getElementById('prevCardBtn');
const nextCardBtn = document.getElementById('nextCardBtn');
const moreInfoOriginal = document.getElementById('moreInfoOriginal');
const moreInfoTranslation = document.getElementById('moreInfoTranslation');
const moreInfoOriginalSection = document.getElementById('moreInfoOriginalSection');
const moreInfoTranslationSection = document.getElementById('moreInfoTranslationSection');
const moreInfoPlayOriginal = document.getElementById('moreInfoPlayOriginal');
const moreInfoPlayTranslation = document.getElementById('moreInfoPlayTranslation');
const moreInfoVerifyInput = document.getElementById('moreInfoVerifyInput');
const moreInfoImage = document.getElementById('moreInfoImage');
const moreInfoCustomTitle = document.getElementById('moreInfoCustomTitle');
const moreInfoContext = document.getElementById('moreInfoContext');
const moreInfoDescription = document.getElementById('moreInfoDescription');
const moreInfoLangPair = document.getElementById('moreInfoLangPair');
const moreInfoCategoryBadge = document.getElementById('moreInfoCategoryBadge');
const moreInfoTags = document.getElementById('moreInfoTags');
const moreInfoStatusNew = document.getElementById('moreInfoStatusNew');
const moreInfoStatusLearning = document.getElementById('moreInfoStatusLearning');
const moreInfoStatusLearned = document.getElementById('moreInfoStatusLearned');
const moreInfoSource = document.getElementById('moreInfoSource');
const addNewBtn = document.getElementById('addNewBtn');
const addNewModal = document.getElementById('addNewModal');
const closeAddNewModalBtn = document.getElementById('closeAddNewModalBtn');
const addNewSourceLang = document.getElementById('addNewSourceLang');
const addNewTargetLang = document.getElementById('addNewTargetLang');
const addNewOriginal = document.getElementById('addNewOriginal');
const addNewTranslation = document.getElementById('addNewTranslation');
const addNewCategory = document.getElementById('addNewCategory');
const addNewContext = document.getElementById('addNewContext');
const addNewDescription = document.getElementById('addNewDescription');
const addNewSource = document.getElementById('addNewSource');
const saveAddNewBtn = document.getElementById('saveAddNewBtn');
const generateTranslationBtn = document.getElementById('generateTranslationBtn');
const generateOriginalBtn = document.getElementById('generateOriginalBtn');
const trashBtn = document.getElementById('trashBtn');

let currentHistoryLang = null;
let historyByLang = {};
let trashedItems = [];
let showingTrash = false;
let showOriginal = true;
let showTranslation = true;
let showImage = true;
let currentCategoryFilter = '';
let currentStatusFilter = '';
let currentTagFilter = '';
let currentEditingItemId = null;
let currentMoreInfoItemId = null;
let selectedEditTags = [];
let availableTags = [];
let filteredHistoryItems = [];

document.addEventListener('DOMContentLoaded', async () => {
  await loadUIState();
  await loadHistory();
  
  showOriginalCheckbox.addEventListener('change', async (e) => {
    showOriginal = e.target.checked;
    if (!showOriginal && !showTranslation) {
      showTranslationCheckbox.checked = true;
      showTranslation = true;
    }
    await saveUIState();
    if (showingTrash) {
      showingTrash = false;
      trashBtn.classList.remove('history__btn--active');
      displayHistoryTabs();
    } else {
      displayHistory(historyByLang[currentHistoryLang] || []);
    }
  });
  
  showTranslationCheckbox.addEventListener('change', async (e) => {
    showTranslation = e.target.checked;
    if (!showOriginal && !showTranslation) {
      showOriginalCheckbox.checked = true;
      showOriginal = true;
    }
    await saveUIState();
    if (showingTrash) {
      showingTrash = false;
      trashBtn.classList.remove('history__btn--active');
      displayHistoryTabs();
    } else {
      displayHistory(historyByLang[currentHistoryLang] || []);
    }
  });
  
  showImageCheckbox.addEventListener('change', async (e) => {
    showImage = e.target.checked;
    await saveUIState();
    if (showingTrash) {
      showingTrash = false;
      trashBtn.classList.remove('history__btn--active');
      displayHistoryTabs();
    } else {
      displayHistory(historyByLang[currentHistoryLang] || []);
    }
  });
  
  clearAllBtn.addEventListener('click', async () => {
    if (confirm('Are you sure you want to clear all history?')) {
      await chrome.runtime.sendMessage({ action: 'clearHistory' });
      historyByLang = {};
      displayHistoryTabs();
    }
  });
  
  trashBtn.addEventListener('click', async () => {
    showingTrash = !showingTrash;
    if (showingTrash) {
      trashBtn.classList.add('history__btn--active');
      await loadTrashedItems();
      displayTrashedItems();
    } else {
      trashBtn.classList.remove('history__btn--active');
      displayHistoryTabs();
    }
  });
  
  manageCategoriesBtn.addEventListener('click', () => {
    categoryModal.style.display = 'flex';
    loadCategoriesModal();
  });
  
  closeModalBtn.addEventListener('click', () => {
    categoryModal.style.display = 'none';
  });
  
  categoryModal.addEventListener('click', (e) => {
    if (e.target === categoryModal) {
      categoryModal.style.display = 'none';
    }
  });
  
  manageTagsBtn.addEventListener('click', () => {
    tagsModal.style.display = 'flex';
    loadTagsModal();
  });
  
  closeTagsModalBtn.addEventListener('click', () => {
    tagsModal.style.display = 'none';
  });
  
  tagsModal.addEventListener('click', (e) => {
    if (e.target === tagsModal) {
      tagsModal.style.display = 'none';
    }
  });
  
  addCategoryBtn.addEventListener('click', async () => {
    const categoryName = newCategoryInput.value.trim();
    if (categoryName) {
      await chrome.runtime.sendMessage({
        action: 'addCategory',
        category: categoryName
      });
      newCategoryInput.value = '';
      await loadCategoriesModal();
      await loadCategoryFilter();
    }
  });
  
  newCategoryInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
      addCategoryBtn.click();
    }
  });
  
  addTagBtn.addEventListener('click', async () => {
    const tagName = newTagInput.value.trim();
    if (tagName) {
      await chrome.runtime.sendMessage({
        action: 'addTag',
        tag: tagName
      });
      newTagInput.value = '';
      await loadTagsModal();
    }
  });
  
  newTagInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
      addTagBtn.click();
    }
  });
  
  categoryFilter.addEventListener('change', async (e) => {
    currentCategoryFilter = e.target.value;
    await saveUIState();
    if (showingTrash) {
      showingTrash = false;
      trashBtn.classList.remove('history__btn--active');
      displayHistoryTabs();
    } else {
      displayHistory(historyByLang[currentHistoryLang] || []);
    }
  });
  
  statusFilter.addEventListener('change', async (e) => {
    currentStatusFilter = e.target.value;
    await saveUIState();
    if (showingTrash) {
      showingTrash = false;
      trashBtn.classList.remove('history__btn--active');
      displayHistoryTabs();
    } else {
      displayHistory(historyByLang[currentHistoryLang] || []);
    }
  });
  
  tagFilter.addEventListener('change', async (e) => {
    currentTagFilter = e.target.value;
    await saveUIState();
    if (showingTrash) {
      showingTrash = false;
      trashBtn.classList.remove('history__btn--active');
      displayHistoryTabs();
    } else {
      displayHistory(historyByLang[currentHistoryLang] || []);
    }
  });
  
  closeEditModalBtn.addEventListener('click', () => {
    editCardModal.style.display = 'none';
    currentEditingItemId = null;
  });
  
  editCardModal.addEventListener('click', (e) => {
    if (e.target === editCardModal) {
      editCardModal.style.display = 'none';
      currentEditingItemId = null;
    }
  });
  
  editImageUrl.addEventListener('input', (e) => {
    const url = e.target.value.trim();
    if (url) {
      previewImg.src = url;
      imagePreview.style.display = 'block';
      previewImg.onerror = () => {
        imagePreview.style.display = 'none';
      };
    } else {
      imagePreview.style.display = 'none';
    }
  });
  
  editTagsInput.addEventListener('input', (e) => {
    showTagSuggestions(e.target.value.trim());
  });
  
  editTagsInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const tag = editTagsInput.value.trim();
      if (tag) {
        addTagToSelection(tag);
      }
    }
  });
  
  document.addEventListener('click', (e) => {
    if (!editTagsInput.contains(e.target) && !editTagsSuggestions.contains(e.target)) {
      editTagsSuggestions.style.display = 'none';
    }
  });
  
  saveEditBtn.addEventListener('click', async () => {
    if (currentEditingItemId) {
      await saveCardEdits(currentEditingItemId);
      editCardModal.style.display = 'none';
      currentEditingItemId = null;
    }
  });
  
  closeMoreInfoModalBtn.addEventListener('click', () => {
    moreInfoModal.style.display = 'none';
    currentMoreInfoItemId = null;
  });
  
  moreInfoModal.addEventListener('click', (e) => {
    if (e.target === moreInfoModal) {
      moreInfoModal.style.display = 'none';
      currentMoreInfoItemId = null;
    }
  });
  
  prevCardBtn.addEventListener('click', () => {
    navigateCard(-1);
  });
  
  nextCardBtn.addEventListener('click', () => {
    navigateCard(1);
  });
  
  moreInfoPlayOriginal.addEventListener('click', async () => {
    const item = findItemById(currentMoreInfoItemId);
    if (item) {
      await playAudio(item.original, item.sourceLang, moreInfoPlayOriginal);
    }
  });
  
  moreInfoPlayTranslation.addEventListener('click', async () => {
    const item = findItemById(currentMoreInfoItemId);
    if (item) {
      await playAudio(item.translation, item.targetLang, moreInfoPlayTranslation);
    }
  });
  
  moreInfoVerifyInput.addEventListener('input', () => {
    const item = findItemById(currentMoreInfoItemId);
    if (!item) return;
    
    const inputValue = moreInfoVerifyInput.value.trim().toLowerCase();
    const originalText = item.original.toLowerCase();
    const translationText = item.translation.toLowerCase();
    
    if (inputValue && (inputValue === originalText || inputValue === translationText)) {
      moreInfoVerifyInput.classList.add('history__item-input--correct');
      
      if (!showOriginal && inputValue === originalText) {
        moreInfoOriginalSection.classList.add('history__info-section--revealed');
        moreInfoOriginalSection.classList.remove('history__info-section--hidden');
      }
      if (!showTranslation && inputValue === translationText) {
        moreInfoTranslationSection.classList.add('history__info-section--revealed');
        moreInfoTranslationSection.classList.remove('history__info-section--hidden');
      }
    } else {
      moreInfoVerifyInput.classList.remove('history__item-input--correct');
    }
  });
  
  moreInfoOriginalSection.addEventListener('click', () => {
    if (moreInfoOriginalSection.classList.contains('history__info-section--hidden')) {
      moreInfoOriginalSection.classList.toggle('history__info-section--revealed');
    }
  });
  
  moreInfoTranslationSection.addEventListener('click', () => {
    if (moreInfoTranslationSection.classList.contains('history__info-section--hidden')) {
      moreInfoTranslationSection.classList.toggle('history__info-section--revealed');
    }
  });
  
[moreInfoStatusNew, moreInfoStatusLearning, moreInfoStatusLearned].forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const status = e.currentTarget.id.replace('moreInfoStatus', '').toLowerCase();
      const item = findItemById(currentMoreInfoItemId);
      if (item) {
        item.status = status;
        await chrome.runtime.sendMessage({
          action: 'updateHistory',
          historyByLang: historyByLang
        });
        loadMoreInfoData(item);
        displayHistory(historyByLang[currentHistoryLang] || []);
      }
    });
  });
  
  document.addEventListener('keydown', (e) => {
    if (moreInfoModal.style.display === 'flex') {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (!prevCardBtn.disabled) {
          navigateCard(-1);
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (!nextCardBtn.disabled) {
          navigateCard(1);
        }
      } else if (e.key === 'Escape') {
        moreInfoModal.style.display = 'none';
      }
    }
  });
  
  addNewBtn.addEventListener('click', async () => {
    addNewModal.style.display = 'flex';
    addNewOriginal.value = '';
    addNewTranslation.value = '';
    addNewCategory.value = '';
    addNewContext.value = '';
    addNewDescription.value = '';
    addNewSource.value = '';
    await loadCategoriesForAddNew();
  });

  const learnBtn = document.getElementById('learnBtn');
  if (learnBtn) {
    learnBtn.addEventListener('click', () => {
      window.location.href = 'learn.html';
    });
  }
  
  closeAddNewModalBtn.addEventListener('click', () => {
    addNewModal.style.display = 'none';
  });
  
  saveAddNewBtn.addEventListener('click', async () => {
    await saveNewTranslation();
  });
  
  generateTranslationBtn.addEventListener('click', async () => {
    const text = addNewOriginal.value.trim();
    if (!text) {
      alert('Please enter original text first');
      return;
    }
    
    const sourceLang = addNewSourceLang.value;
    const targetLang = addNewTargetLang.value;
    
    generateTranslationBtn.disabled = true;
    generateTranslationBtn.textContent = 'Generating...';
    
    try {
      const response = await chrome.runtime.sendMessage({
        action: 'translate',
        text: text,
        sourceLang: sourceLang,
        targetLang: targetLang
      });
      
      if (response.success && response.translation) {
        addNewTranslation.value = response.translation;
      } else {
        alert('Failed to generate translation');
      }
    } catch (error) {
      alert('Error generating translation');
    } finally {
      generateTranslationBtn.disabled = false;
      generateTranslationBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
        Generate
      `;
    }
  });
  
  generateOriginalBtn.addEventListener('click', async () => {
    const text = addNewTranslation.value.trim();
    if (!text) {
      alert('Please enter translation first');
      return;
    }
    
    const sourceLang = addNewSourceLang.value;
    const targetLang = addNewTargetLang.value;
    
    generateOriginalBtn.disabled = true;
    generateOriginalBtn.textContent = 'Generating...';
    
    try {
      const response = await chrome.runtime.sendMessage({
        action: 'translate',
        text: text,
        sourceLang: targetLang,
        targetLang: sourceLang
      });
      
      if (response.success && response.translation) {
        addNewOriginal.value = response.translation;
      } else {
        alert('Failed to generate original');
      }
    } catch (error) {
      alert('Error generating original');
    } finally {
      generateOriginalBtn.disabled = false;
      generateOriginalBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
        Generate
      `;
    }
  });
});

async function saveNewTranslation() {
  const sourceLang = addNewSourceLang.value;
  const targetLang = addNewTargetLang.value;
  const original = addNewOriginal.value.trim();
  const translation = addNewTranslation.value.trim();
  const category = addNewCategory.value || null;
  const context = addNewContext.value.trim() || null;
  const description = addNewDescription.value.trim() || null;
  const source = addNewSource.value.trim() || null;
  
  if (!original || !translation) {
    alert('Please fill in both Original and Translation fields');
    return;
  }
  
  const langPair = `${sourceLang}-${targetLang}`;
  
  const newEntry = {
    id: Date.now(),
    original: original,
    translation: translation,
    sourceLang: sourceLang,
    targetLang: targetLang,
    timestamp: Date.now(),
    status: 'new',
    category: category,
    imageUrl: null,
    customTitle: null,
    context: context,
    description: description,
    source: source
  };
  
  if (!historyByLang[langPair]) {
    historyByLang[langPair] = [];
  }
  
  historyByLang[langPair].unshift(newEntry);
  
  await chrome.runtime.sendMessage({
    action: 'updateHistory',
    historyByLang: historyByLang
  });
  
  addNewModal.style.display = 'none';
  displayHistoryTabs();
  
  if (currentHistoryLang === langPair) {
    displayHistory(historyByLang[langPair] || []);
  }
}

async function loadHistory() {
  const response = await chrome.runtime.sendMessage({ action: 'getHistory' });
  
  console.log('📥 Loaded history from storage:', response);
  
  if (response && response.historyByLang) {
    historyByLang = response.historyByLang;
    
    // Проверяем данные в en-ru-l
    if (historyByLang['en-ru-l']) {
      const firstItem = historyByLang['en-ru-l'][0];
      console.log('📥 FIRST ITEM ID:', firstItem.id);
      console.log('📥 FIRST ITEM ID TYPE:', typeof firstItem.id);
      console.log('📥 FIRST ITEM FULL:', firstItem);
      console.log('📥 en-ru-l data:', JSON.stringify(historyByLang['en-ru-l'], null, 2));
    }
    
    displayHistoryTabs();
    await loadCategoryFilter();
    await loadTagFilter();
  }
}

async function loadCategoriesModal() {
  const response = await chrome.runtime.sendMessage({ action: 'getCategories' });
  const categories = response.categories || [];
  
  categoriesList.innerHTML = categories.map(category => `
    <div class="history__category-item">
      <span class="history__category-name" data-category="${escapeHtml(category)}">${escapeHtml(category)}</span>
      <input type="text" class="history__category-edit-input" data-category="${escapeHtml(category)}" style="display: none;" value="${escapeHtml(category)}">
      <div class="history__category-actions">
        <button class="history__category-edit" data-category="${escapeHtml(category)}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>
        <button class="history__category-delete" data-category="${escapeHtml(category)}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  `).join('');
  
  const editButtons = categoriesList.querySelectorAll('.history__category-edit');
  editButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      const categoryItem = btn.closest('.history__category-item');
      const nameSpan = categoryItem.querySelector('.history__category-name');
      const editInput = categoryItem.querySelector('.history__category-edit-input');
      
      nameSpan.style.display = 'none';
      editInput.style.display = 'block';
      editInput.focus();
      editInput.select();
    });
  });
  
  const editInputs = categoriesList.querySelectorAll('.history__category-edit-input');
  editInputs.forEach(input => {
    input.addEventListener('blur', async () => {
      await saveCategoryRename(input);
    });
    
    input.addEventListener('keypress', async (e) => {
      if (e.key === 'Enter') {
        await saveCategoryRename(input);
      } else if (e.key === 'Escape') {
        const categoryItem = input.closest('.history__category-item');
        const nameSpan = categoryItem.querySelector('.history__category-name');
        input.style.display = 'none';
        nameSpan.style.display = 'block';
        input.value = input.getAttribute('data-category');
      }
    });
  });
  
  const deleteButtons = categoriesList.querySelectorAll('.history__category-delete');
  deleteButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const category = btn.getAttribute('data-category');
      await chrome.runtime.sendMessage({
        action: 'deleteCategory',
        category: category
      });
      await loadCategoriesModal();
      await loadCategoryFilter();
    });
  });
}

async function saveCategoryRename(input) {
  const oldCategory = input.getAttribute('data-category');
  const newCategory = input.value.trim();
  
  if (!newCategory || newCategory === oldCategory) {
    const categoryItem = input.closest('.history__category-item');
    const nameSpan = categoryItem.querySelector('.history__category-name');
    input.style.display = 'none';
    nameSpan.style.display = 'block';
    input.value = oldCategory;
    return;
  }
  
  await chrome.runtime.sendMessage({
    action: 'renameCategory',
    oldCategory: oldCategory,
    newCategory: newCategory
  });
  
  await loadHistory();
  await loadCategoriesModal();
  await loadCategoryFilter();
}

async function loadTagsModal() {
  const response = await chrome.runtime.sendMessage({ action: 'getTags' });
  const tags = response.tags || [];
  
  tagsList.innerHTML = tags.map(tag => `
    <div class="history__category-item">
      <span class="history__category-name" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</span>
      <input type="text" class="history__category-edit-input" data-tag="${escapeHtml(tag)}" style="display: none;" value="${escapeHtml(tag)}">
      <div class="history__category-actions">
        <button class="history__category-edit" data-tag="${escapeHtml(tag)}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>
        <button class="history__category-delete" data-tag="${escapeHtml(tag)}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  `).join('');
  
  const editButtons = tagsList.querySelectorAll('.history__category-edit');
  editButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.getAttribute('data-tag');
      const tagItem = btn.closest('.history__category-item');
      const nameSpan = tagItem.querySelector('.history__category-name');
      const editInput = tagItem.querySelector('.history__category-edit-input');
      
      nameSpan.style.display = 'none';
      editInput.style.display = 'block';
      editInput.focus();
      editInput.select();
    });
  });
  
  const editInputs = tagsList.querySelectorAll('.history__category-edit-input');
  editInputs.forEach(input => {
    input.addEventListener('blur', async () => {
      await saveTagRename(input);
    });
    
    input.addEventListener('keypress', async (e) => {
      if (e.key === 'Enter') {
        await saveTagRename(input);
      } else if (e.key === 'Escape') {
        const tagItem = input.closest('.history__category-item');
        const nameSpan = tagItem.querySelector('.history__category-name');
        input.style.display = 'none';
        nameSpan.style.display = 'block';
        input.value = input.getAttribute('data-tag');
      }
    });
  });
  
  const deleteButtons = tagsList.querySelectorAll('.history__category-delete');
  deleteButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const tag = btn.getAttribute('data-tag');
      await chrome.runtime.sendMessage({
        action: 'deleteTag',
        tag: tag
      });
      await loadTagsModal();
      await loadTagFilter();
    });
  });
}

async function saveTagRename(input) {
  const oldTag = input.getAttribute('data-tag');
  const newTag = input.value.trim();
  
  if (!newTag || newTag === oldTag) {
    const tagItem = input.closest('.history__category-item');
    const nameSpan = tagItem.querySelector('.history__category-name');
    input.style.display = 'none';
    nameSpan.style.display = 'block';
    input.value = oldTag;
    return;
  }
  
  await chrome.runtime.sendMessage({
    action: 'renameTag',
    oldTag: oldTag,
    newTag: newTag
  });
  
  await loadHistory();
  await loadTagsModal();
  await loadTagFilter();
}

async function loadCategoriesForAddNew() {
  const response = await chrome.runtime.sendMessage({ action: 'getCategories' });
  const categories = response.categories || [];
  
  addNewCategory.innerHTML = '<option value="">Select category...</option>';
  
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    addNewCategory.appendChild(option);
  });
}

async function loadAvailableTags() {
  const response = await chrome.runtime.sendMessage({ action: 'getTags' });
  availableTags = response.tags || [];
}

function renderSelectedTags() {
  editSelectedTags.innerHTML = selectedEditTags.map(tag => `
    <span class="history__tag">
      ${escapeHtml(tag)}
      <button class="history__tag-remove" data-tag="${escapeHtml(tag)}" type="button">×</button>
    </span>
  `).join('');
  
  const removeButtons = editSelectedTags.querySelectorAll('.history__tag-remove');
  removeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.getAttribute('data-tag');
      selectedEditTags = selectedEditTags.filter(t => t !== tag);
      renderSelectedTags();
    });
  });
}

function showTagSuggestions(query) {
  if (!query) {
    editTagsSuggestions.style.display = 'none';
    return;
  }
  
  const filtered = availableTags.filter(tag => 
    tag.toLowerCase().includes(query.toLowerCase()) && !selectedEditTags.includes(tag)
  );
  
  if (filtered.length === 0) {
    editTagsSuggestions.style.display = 'none';
    return;
  }
  
  editTagsSuggestions.innerHTML = filtered.map(tag => `
    <div class="history__tag-suggestion" data-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</div>
  `).join('');
  
  editTagsSuggestions.style.display = 'block';
  
  const suggestions = editTagsSuggestions.querySelectorAll('.history__tag-suggestion');
  suggestions.forEach(suggestion => {
    suggestion.addEventListener('click', () => {
      const tag = suggestion.getAttribute('data-tag');
      addTagToSelection(tag);
    });
  });
}

async function addTagToSelection(tag) {
  if (selectedEditTags.length >= 5) {
    alert('Maximum 5 tags allowed');
    return;
  }
  
  if (!availableTags.includes(tag)) {
    await chrome.runtime.sendMessage({
      action: 'addTag',
      tag: tag
    });
    availableTags.push(tag);
  }
  
  if (!selectedEditTags.includes(tag)) {
    selectedEditTags.push(tag);
    renderSelectedTags();
  }
  
  editTagsInput.value = '';
  editTagsSuggestions.style.display = 'none';
}

async function loadCategoryFilter() {
  const response = await chrome.runtime.sendMessage({ action: 'getCategories' });
  const categories = response.categories || [];
  
  const currentValue = categoryFilter.value;
  
  categoryFilter.innerHTML = '<option value="">All</option>';
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
  
  if (currentValue && categories.includes(currentValue)) {
    categoryFilter.value = currentValue;
  }
}

async function loadTagFilter() {
  const response = await chrome.runtime.sendMessage({ action: 'getTags' });
  const tags = response.tags || [];
  
  const currentValue = tagFilter.value;
  
  tagFilter.innerHTML = '<option value="">All</option>';
  tags.forEach(tag => {
    const option = document.createElement('option');
    option.value = tag;
    option.textContent = tag;
    tagFilter.appendChild(option);
  });
  
  if (currentValue && tags.includes(currentValue)) {
    tagFilter.value = currentValue;
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
    'it': 'Italiano',
    'pt': 'Português',
    'ja': '日本語',
    'ko': '한국어',
    'zh': '中文',
    'ar': 'العربية',
    'hi': 'हिन्दी',
    'zh-CN': '中文'
  };
  
  function getLangPairName(langPair) {
    if (langPair === 'es-ru-l') {
      return 'ES-RU-L';
    }
    
    if (langPair === 'en-ru-l') {
      return 'EN-RU-L';
    }
    
    const [source, target] = langPair.split('-');
    
    if (!target) {
      return languageNames[langPair] || langPair.toUpperCase();
    }
    
    return `${source.toUpperCase()}-${target.toUpperCase()}`;
  }
  
  historyTabsContainer.innerHTML = languages.map(lang => `
    <button class="history__tab ${lang === currentHistoryLang ? 'history__tab--active' : ''}" data-lang="${lang}">
      ${getLangPairName(lang)}
      <span class="history__tab-count">${historyByLang[lang].length}</span>
      <span class="history__tab-delete" data-lang="${lang}" title="Удалить вкладку">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </span>
    </button>
  `).join('');
  
  const tabs = historyTabsContainer.querySelectorAll('.history__tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', async () => {
      currentHistoryLang = tab.getAttribute('data-lang');
      await saveCurrentTab();
      displayHistoryTabs();
    });
  });
  
  const deleteButtons = historyTabsContainer.querySelectorAll('.history__tab-delete');
  deleteButtons.forEach(span => {
    span.addEventListener('click', async (e) => {
      e.stopPropagation();
      const langToDelete = span.getAttribute('data-lang');
      const langName = getLangPairName(langToDelete);
      
      console.log('Frontend: deleting lang pair:', langToDelete);
      console.log('Frontend: available before:', Object.keys(historyByLang));
      
      if (confirm(`Вы уверены, что хотите безвозвратно удалить вкладку "${langName}" со всеми записями?`)) {
        try {
          // Тест связи с background
          const testResponse = await chrome.runtime.sendMessage({
            action: 'ping'
          });
          console.log('Test ping response:', testResponse);
          
          const response = await chrome.runtime.sendMessage({
            action: 'deleteLangPair',
            langPair: langToDelete
          });
          
          console.log('Frontend: delete response:', response);
          
          if (response && response.success) {
            delete historyByLang[langToDelete];
            
            console.log('Frontend: available after delete:', Object.keys(historyByLang));
            
            if (currentHistoryLang === langToDelete) {
              const remainingLanguages = Object.keys(historyByLang);
              currentHistoryLang = remainingLanguages.length > 0 ? remainingLanguages[0] : null;
            }
            
            displayHistoryTabs();
          } else {
            console.error('Frontend: delete failed:', response);
            alert('Ошибка при удалении вкладки');
          }
        } catch (error) {
          console.error('Error deleting language pair:', error);
          alert('Ошибка при удалении вкладки: ' + error.message);
        }
      }
    });
  });
  
  displayHistory(historyByLang[currentHistoryLang] || []);
}

function displayHistory(history) {
  console.log('📋 Displaying history with', history.length, 'items');
  console.log('📋 First item:', JSON.stringify(history[0], null, 2));
  console.log('📋 All IDs:', JSON.stringify(history.map(h => ({ id: h.id, idType: typeof h.id, original: h.original })), null, 2));
  
  if (!history || history.length === 0) {
    historyList.innerHTML = `
      <div class="history__empty">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <p>No translation history yet</p>
      </div>
    `;
    return;
  }

  let filteredHistory = history;
  
  if (currentCategoryFilter) {
    filteredHistory = filteredHistory.filter(item => item.category === currentCategoryFilter);
  }
  
  if (currentStatusFilter) {
    filteredHistory = filteredHistory.filter(item => (item.status || 'new') === currentStatusFilter);
  }
  
  if (currentTagFilter) {
    filteredHistory = filteredHistory.filter(item => 
      item.tags && item.tags.includes(currentTagFilter)
    );
  }
  
  filteredHistoryItems = filteredHistory;
  
  if (filteredHistory.length === 0) {
    historyList.innerHTML = `
      <div class="history__empty">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <p>No items in this category</p>
      </div>
    `;
    return;
  }

  const bothHidden = !showOriginal && !showTranslation;
  
  historyList.innerHTML = filteredHistory.map(item => `
    <div class="history__item" data-id="${item.id}">
      <div class="history__item-header">
        <div class="history__item-header-left">
          <div class="history__item-tags">
            ${(item.tags || []).map(tag => `<span class="history__tag">${escapeHtml(tag)}</span>`).join('')}
            ${!(item.tags && item.tags.length) ? '<span class="history__tag history__no-tags">No tags</span>' : ''}
          </div>
        </div>
        <div class="history__item-status">
          <button class="history__item-status-btn history__item-status-btn--new ${item.status === 'new' ? 'history__item-status-btn--active' : ''}" data-item-id="${item.id}" data-status="new" title="To Learn"></button>
          <button class="history__item-status-btn history__item-status-btn--learning ${item.status === 'learning' ? 'history__item-status-btn--active' : ''}" data-item-id="${item.id}" data-status="learning" title="Learning"></button>
          <button class="history__item-status-btn history__item-status-btn--learned ${item.status === 'learned' ? 'history__item-status-btn--active' : ''}" data-item-id="${item.id}" data-status="learned" title="Learned"></button>
        </div>
      </div>
      
      <div class="history__item-content">
        <div class="history__item-text-sections">
          <div class="history__item-section ${!showOriginal ? 'history__item-section--hidden' : ''}" data-type="original" data-item-id="${item.id}">
            <div class="history__item-label">
              <button class="history__item-play" data-text="${escapeHtml(item.original)}" data-lang="${item.sourceLang}" title="Play original">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
              <span>Original:</span>
            </div>
            <div class="history__item-text" data-original-text="${escapeHtml(item.original)}">${escapeHtml(item.original)}</div>
          </div>
          
          <div class="history__item-section ${!showTranslation ? 'history__item-section--hidden' : ''}" data-type="translation" data-item-id="${item.id}">
            <div class="history__item-label">
              <button class="history__item-play" data-text="${escapeHtml(item.translation)}" data-lang="${item.targetLang}" title="Play translation">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
              <span>Translation:</span>
            </div>
            <div class="history__item-text history__item-text--translation" data-translation-text="${escapeHtml(item.translation)}">${escapeHtml(item.translation)}</div>
          </div>
          
          <div class="history__item-verify">
            <input type="text" class="history__item-input" data-item-id="${item.id}" placeholder="Type to verify..." />
          </div>
        </div>
        
        ${item.imageUrl && showImage ? `
          <div class="history__item-image-container">
            <img src="${escapeHtml(item.imageUrl)}" alt="Card image" class="history__item-image" />
          </div>
        ` : ''}
      </div>
      
      <div class="history__item-actions">
        <select class="history__item-category-select" data-item-id="${item.id}">
          <option value="">Category...</option>
        </select>
        <div class="history__item-actions-right">
          <button class="history__item-more-btn" data-item-id="${item.id}" title="Info">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            Info
          </button>
          <button class="history__item-edit-btn" data-item-id="${item.id}" title="Edit">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
            Edit
          </button>
          <button class="history__item-delete" data-id="${item.id}" title="Delete">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  `).join('');

  attachEventListeners();
}

function attachEventListeners() {
  const playButtons = historyList.querySelectorAll('.history__item-play');
  playButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const text = e.currentTarget.getAttribute('data-text');
      const lang = e.currentTarget.getAttribute('data-lang');
      await playAudio(text, lang, e.currentTarget);
    });
  });

  const deleteButtons = historyList.querySelectorAll('.history__item-delete');
  deleteButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const itemId = parseInt(e.currentTarget.getAttribute('data-id'));
      await deleteHistoryItem(itemId);
    });
  });

  const hiddenSections = historyList.querySelectorAll('.history__item-section--hidden');
  hiddenSections.forEach(section => {
    const textElement = section.querySelector('.history__item-text');
    textElement.addEventListener('click', () => {
      section.classList.toggle('history__item-section--revealed');
    });
  });

  loadCategoriesForItems();
  attachVerifyInputListeners();
  attachStatusButtonListeners();
  attachEditButtonListeners();
  attachMoreInfoButtonListeners();
}

function attachEditButtonListeners() {
  const editButtons = historyList.querySelectorAll('.history__item-edit-btn');
  
  editButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const itemId = parseInt(e.currentTarget.getAttribute('data-item-id'));
      openEditModal(itemId);
    });
  });
}

function attachMoreInfoButtonListeners() {
  const moreButtons = historyList.querySelectorAll('.history__item-more-btn');
  
  moreButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const itemId = parseInt(e.currentTarget.getAttribute('data-item-id'));
      openMoreInfoModal(itemId);
    });
  });
}

function openMoreInfoModal(itemId) {
  const item = findItemById(itemId);
  if (!item) return;
  
  currentMoreInfoItemId = itemId;
  loadMoreInfoData(item);
  updateNavigationButtons();
  moreInfoModal.style.display = 'flex';
}

function loadMoreInfoData(item) {
  moreInfoOriginal.textContent = item.original || '';
  moreInfoTranslation.textContent = item.translation || '';
  
  moreInfoLangPair.textContent = `${item.sourceLang.toUpperCase()} → ${item.targetLang.toUpperCase()}`;
  
  if (item.category) {
    moreInfoCategoryBadge.textContent = item.category;
    moreInfoCategoryBadge.style.display = 'inline-block';
  } else {
    moreInfoCategoryBadge.style.display = 'none';
  }
  
  if (item.tags && item.tags.length > 0) {
    moreInfoTags.innerHTML = item.tags.map(tag => `<span class="history__tag">${escapeHtml(tag)}</span>`).join('');
    moreInfoTags.style.display = 'flex';
  } else {
    moreInfoTags.innerHTML = '';
    moreInfoTags.style.display = 'none';
  }
  
  moreInfoStatusNew.classList.toggle('history__modal-status-btn--active', item.status === 'new');
  moreInfoStatusLearning.classList.toggle('history__modal-status-btn--active', item.status === 'learning');
  moreInfoStatusLearned.classList.toggle('history__modal-status-btn--active', item.status === 'learned');
  
  if (showOriginal) {
    moreInfoOriginalSection.classList.remove('history__info-section--hidden', 'history__info-section--revealed');
  } else {
    moreInfoOriginalSection.classList.add('history__info-section--hidden');
    moreInfoOriginalSection.classList.remove('history__info-section--revealed');
  }
  
  if (showTranslation) {
    moreInfoTranslationSection.classList.remove('history__info-section--hidden', 'history__info-section--revealed');
  } else {
    moreInfoTranslationSection.classList.add('history__info-section--hidden');
    moreInfoTranslationSection.classList.remove('history__info-section--revealed');
  }
  
  moreInfoVerifyInput.value = '';
  moreInfoVerifyInput.classList.remove('history__item-input--correct');
  
  if (item.imageUrl && showImage) {
    moreInfoImage.querySelector('img').src = item.imageUrl;
    moreInfoImage.style.display = 'block';
  } else {
    moreInfoImage.style.display = 'none';
  }
  
  if (item.customTitle) {
    moreInfoCustomTitle.querySelector('span').textContent = item.customTitle;
    moreInfoCustomTitle.style.display = 'block';
  } else {
    moreInfoCustomTitle.style.display = 'none';
  }
  
  if (item.context) {
    moreInfoContext.querySelector('span').textContent = item.context;
    moreInfoContext.style.display = 'block';
  } else {
    moreInfoContext.style.display = 'none';
  }
  
  if (item.description) {
    moreInfoDescription.querySelector('span').textContent = item.description;
    moreInfoDescription.style.display = 'block';
  } else {
    moreInfoDescription.style.display = 'none';
  }
  
  if (item.source) {
    const sourceLink = moreInfoSource.querySelector('a');
    sourceLink.href = item.source;
    sourceLink.textContent = item.source;
    moreInfoSource.style.display = 'block';
  } else {
    moreInfoSource.style.display = 'none';
  }
}

function navigateCard(direction) {
  const currentIndex = filteredHistoryItems.findIndex(item => item.id === currentMoreInfoItemId);
  if (currentIndex === -1) return;
  
  const newIndex = currentIndex + direction;
  if (newIndex >= 0 && newIndex < filteredHistoryItems.length) {
    const newItem = filteredHistoryItems[newIndex];
    currentMoreInfoItemId = newItem.id;
    loadMoreInfoData(newItem);
    updateNavigationButtons();
  }
}

function updateNavigationButtons() {
  const currentIndex = filteredHistoryItems.findIndex(item => item.id === currentMoreInfoItemId);
  
  prevCardBtn.disabled = currentIndex <= 0;
  nextCardBtn.disabled = currentIndex >= filteredHistoryItems.length - 1;
}

async function openEditModal(itemId) {
  const item = findItemById(itemId);
  if (!item) return;
  
  currentEditingItemId = itemId;
  
  editOriginal.value = item.original || '';
  editTranslation.value = item.translation || '';
  editImageUrl.value = item.imageUrl || '';
  editCustomTitle.value = item.customTitle || '';
  editContext.value = item.context || '';
  editDescription.value = item.description || '';
  editSource.value = item.source || '';
  
  selectedEditTags = item.tags || [];
  await loadAvailableTags();
  renderSelectedTags();
  
  if (item.imageUrl) {
    previewImg.src = item.imageUrl;
    imagePreview.style.display = 'block';
  } else {
    imagePreview.style.display = 'none';
  }
  
  editCardModal.style.display = 'flex';
}

async function saveCardEdits(itemId) {
  if (!currentHistoryLang || !historyByLang[currentHistoryLang]) return;
  
  const item = historyByLang[currentHistoryLang].find(h => h.id === itemId);
  if (item) {
    item.original = editOriginal.value.trim();
    item.translation = editTranslation.value.trim();
    item.imageUrl = editImageUrl.value.trim() || null;
    item.customTitle = editCustomTitle.value.trim() || null;
    item.context = editContext.value.trim() || null;
    item.description = editDescription.value.trim() || null;
    item.source = editSource.value.trim() || null;
    item.tags = selectedEditTags;
    
    await chrome.runtime.sendMessage({
      action: 'updateHistory',
      historyByLang: historyByLang
    });
    
    displayHistory(historyByLang[currentHistoryLang] || []);
  }
}

function attachStatusButtonListeners() {
  const statusButtons = historyList.querySelectorAll('.history__item-status-btn');
  
  console.log('🔗 Attaching listeners to', statusButtons.length, 'status buttons');
  
  statusButtons.forEach((btn, index) => {
    const itemId = btn.getAttribute('data-item-id');
    const status = btn.getAttribute('data-status');
    
    console.log(`🔗 Button ${index}:`, { itemId, status, itemIdType: typeof itemId });
    
    btn.addEventListener('click', async (e) => {
      const clickedItemId = parseInt(e.currentTarget.getAttribute('data-item-id'));
      const clickedStatus = e.currentTarget.getAttribute('data-status');
      
      console.log('🔗 Button clicked:', { clickedItemId, clickedStatus, clickedItemIdType: typeof clickedItemId });
      
      await updateItemStatus(clickedItemId, clickedStatus);
    });
  });
}

async function updateItemStatus(itemId, status) {
  console.log('🔄 Updating item status:', { itemId, status, currentHistoryLang });
  
  if (!currentHistoryLang || !historyByLang[currentHistoryLang]) {
    console.log('❌ No current history lang or data');
    return;
  }
  
  console.log('🔍 Looking for item with ID:', itemId, 'in', historyByLang[currentHistoryLang].length, 'items');
  
  const item = historyByLang[currentHistoryLang].find(h => h.id === itemId);
  console.log('🔍 Found item:', item);
  
  if (item) {
    console.log('✅ Item found, updating status from', item.status, 'to', status);
    item.status = status;
    
    await chrome.runtime.sendMessage({
      action: 'updateHistory',
      historyByLang: historyByLang
    });
    
    console.log('🔄 Redisplaying history...');
    displayHistory(historyByLang[currentHistoryLang] || []);
  } else {
    console.log('❌ Item not found with ID:', itemId);
    console.log('🔍 Available IDs:', historyByLang[currentHistoryLang].map(h => h.id));
  }
}

async function loadCategoriesForItems() {
  const response = await chrome.runtime.sendMessage({ action: 'getCategories' });
  const categories = response.categories || [];
  
  const categorySelects = historyList.querySelectorAll('.history__item-category-select');
  
  categorySelects.forEach(select => {
    const itemId = parseInt(select.getAttribute('data-item-id'));
    const item = findItemById(itemId);
    
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

function findItemById(itemId) {
  if (!currentHistoryLang || !historyByLang[currentHistoryLang]) return null;
  return historyByLang[currentHistoryLang].find(item => item.id === itemId);
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

function attachVerifyInputListeners() {
  const verifyInputs = historyList.querySelectorAll('.history__item-input');
  
  verifyInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const itemId = parseInt(e.target.getAttribute('data-item-id'));
      const inputValue = e.target.value.trim().toLowerCase();
      
      const itemElement = historyList.querySelector(`.history__item[data-id="${itemId}"]`);
      if (!itemElement) return;
      
      const originalSection = itemElement.querySelector('.history__item-section[data-type="original"]');
      const translationSection = itemElement.querySelector('.history__item-section[data-type="translation"]');
      
      const originalText = originalSection.querySelector('.history__item-text').getAttribute('data-original-text').toLowerCase();
      const translationText = translationSection.querySelector('.history__item-text').getAttribute('data-translation-text').toLowerCase();
      
      let matched = false;
      
      if (inputValue && (inputValue === originalText || inputValue === translationText)) {
        matched = true;
        e.target.classList.add('history__item-input--correct');
        
        if (inputValue === originalText && originalSection.classList.contains('history__item-section--hidden')) {
          originalSection.classList.add('history__item-section--revealed');
        }
        
        if (inputValue === translationText && translationSection.classList.contains('history__item-section--hidden')) {
          translationSection.classList.add('history__item-section--revealed');
        }
      } else {
        e.target.classList.remove('history__item-input--correct');
      }
    });
  });
}

async function playAudio(text, lang, button) {
  if (!text || !lang) return;
  
  const originalHTML = button.innerHTML;
  const isMoreInfoBtn = button.classList.contains('history__info-play-btn');
  const svgSize = isMoreInfoBtn ? 14 : 12;
  
  button.disabled = true;
  button.innerHTML = `
    <svg width="${svgSize}" height="${svgSize}" viewBox="0 0 24 24" fill="currentColor">
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
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      Copied!
    `;
    
    setTimeout(() => {
      button.innerHTML = originalHTML;
    }, 2000);
  });
}

async function deleteHistoryItem(itemId) {
  if (!currentHistoryLang || !historyByLang[currentHistoryLang]) return;
  
  const itemToDelete = historyByLang[currentHistoryLang].find(item => item.id === itemId);
  if (!itemToDelete) return;
  
  itemToDelete.deletedAt = new Date().toISOString();
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

async function loadTrashedItems() {
  const result = await chrome.storage.local.get({ trashedItems: [] });
  trashedItems = result.trashedItems || [];
}

function displayTrashedItems() {
  historyTabsContainer.innerHTML = '';
  
  if (trashedItems.length === 0) {
    historyList.innerHTML = `
      <div class="history__empty">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
        <p>Trash is empty</p>
      </div>
    `;
    return;
  }
  
  historyList.innerHTML = trashedItems.map(item => `
    <div class="history__item" data-id="${item.id}">
      <div class="history__item-header">
        <div class="history__item-header-left">
          <span class="history__item-lang">${item.sourceLang.toUpperCase()} → ${item.targetLang.toUpperCase()}</span>
          <div class="history__item-actions-header">
            <button class="history__item-restore-btn" data-id="${item.id}" title="Restore">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="1 4 1 10 7 10"></polyline>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
              </svg>
              Restore
            </button>
          </div>
        </div>
        <div class="history__item-status">
          <span class="history__item-deleted-time">Deleted ${formatTime(item.deletedAt)}</span>
        </div>
      </div>
      
      <div class="history__item-content">
        <div class="history__item-text-sections">
          <div class="history__item-section ${!showOriginal ? 'history__item-section--hidden' : ''}" data-type="original" data-item-id="${item.id}">
            <div class="history__item-label">
              <button class="history__item-play" data-text="${escapeHtml(item.original)}" data-lang="${item.sourceLang}" title="Play original">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
              <span>Original:</span>
            </div>
            <div class="history__item-text" data-original-text="${escapeHtml(item.original)}">${escapeHtml(item.original)}</div>
          </div>
          
          <div class="history__item-section ${!showTranslation ? 'history__item-section--hidden' : ''}" data-type="translation" data-item-id="${item.id}">
            <div class="history__item-label">
              <button class="history__item-play" data-text="${escapeHtml(item.translation)}" data-lang="${item.targetLang}" title="Play translation">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
              <span>Translation:</span>
            </div>
            <div class="history__item-text history__item-text--translation" data-translation-text="${escapeHtml(item.translation)}">${escapeHtml(item.translation)}</div>
          </div>
        </div>
        
        ${item.imageUrl && showImage ? `
          <div class="history__item-image-container">
            <img src="${escapeHtml(item.imageUrl)}" alt="Card image" class="history__item-image" />
          </div>
        ` : ''}
      </div>
      
      <div class="history__item-actions">
        ${item.category ? `<span class="history__item-category-badge">${escapeHtml(item.category)}</span>` : '<span class="history__item-category-badge">No category</span>'}
        <button class="history__item-delete-permanent" data-id="${item.id}" title="Delete Permanently">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          Delete Forever
        </button>
      </div>
    </div>
  `).join('');
  
  const playButtons = historyList.querySelectorAll('.history__item-play');
  playButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const text = e.currentTarget.getAttribute('data-text');
      const lang = e.currentTarget.getAttribute('data-lang');
      await playAudio(text, lang, e.currentTarget);
    });
  });
  
  const restoreButtons = historyList.querySelectorAll('.history__item-restore-btn');
  restoreButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const itemId = parseInt(e.currentTarget.getAttribute('data-id'));
      await restoreCard(itemId);
    });
  });
  
  const deletePermanentButtons = historyList.querySelectorAll('.history__item-delete-permanent');
  deletePermanentButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const itemId = parseInt(e.currentTarget.getAttribute('data-id'));
      if (confirm('Are you sure you want to permanently delete this item?')) {
        await deletePermanently(itemId);
      }
    });
  });
  
  const itemSections = historyList.querySelectorAll('.history__item-section');
  itemSections.forEach(section => {
    section.addEventListener('click', (e) => {
      if (section.classList.contains('history__item-section--hidden')) {
        section.classList.toggle('history__item-section--revealed');
      }
    });
  });
}

async function restoreCard(itemId) {
  const itemIndex = trashedItems.findIndex(item => item.id === itemId);
  if (itemIndex === -1) return;
  
  const item = trashedItems[itemIndex];
  delete item.deletedAt;
  
  const langPair = `${item.sourceLang}-${item.targetLang}`;
  if (!historyByLang[langPair]) {
    historyByLang[langPair] = [];
  }
  historyByLang[langPair].unshift(item);
  
  trashedItems.splice(itemIndex, 1);
  
  await chrome.storage.local.set({ trashedItems: trashedItems });
  await chrome.runtime.sendMessage({
    action: 'updateHistory',
    historyByLang: historyByLang
  });
  
  displayTrashedItems();
}

async function deletePermanently(itemId) {
  trashedItems = trashedItems.filter(item => item.id !== itemId);
  await chrome.storage.local.set({ trashedItems: trashedItems });
  displayTrashedItems();
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

async function saveUIState() {
  await chrome.storage.local.set({
    uiState: {
      showOriginal: showOriginal,
      showTranslation: showTranslation,
      showImage: showImage,
      categoryFilter: currentCategoryFilter,
      statusFilter: currentStatusFilter,
      tagFilter: currentTagFilter,
      currentHistoryLang: currentHistoryLang
    }
  });
}

async function loadUIState() {
  const result = await chrome.storage.local.get({ uiState: null });
  
  if (result.uiState) {
    showOriginal = result.uiState.showOriginal ?? true;
    showTranslation = result.uiState.showTranslation ?? true;
    showImage = result.uiState.showImage ?? true;
    currentCategoryFilter = result.uiState.categoryFilter || '';
    currentStatusFilter = result.uiState.statusFilter || '';
    currentTagFilter = result.uiState.tagFilter || '';
    currentHistoryLang = result.uiState.currentHistoryLang || null;
    
    showOriginalCheckbox.checked = showOriginal;
    showTranslationCheckbox.checked = showTranslation;
    showImageCheckbox.checked = showImage;
    categoryFilter.value = currentCategoryFilter;
    statusFilter.value = currentStatusFilter;
    tagFilter.value = currentTagFilter;
  }
}

async function saveCurrentTab() {
  await chrome.storage.local.set({
    uiState: {
      showOriginal: showOriginal,
      showTranslation: showTranslation,
      showImage: showImage,
      categoryFilter: currentCategoryFilter,
      statusFilter: currentStatusFilter,
      currentHistoryLang: currentHistoryLang
    }
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
