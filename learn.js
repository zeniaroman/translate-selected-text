document.addEventListener('DOMContentLoaded', () => {
  const languageButtons = document.querySelectorAll('.learn__language-btn');
  
  languageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const language = btn.dataset.language;
      
      if (language === 'es') {
        window.location.href = 'learn-es.html';
      } else if (language === 'en') {
        window.location.href = 'learn-en.html';
      } else {
        alert('Функционал в разработке');
      }
    });
  });
});
