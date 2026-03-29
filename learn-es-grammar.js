document.addEventListener('DOMContentLoaded', () => {
  const backToWordsBtn = document.getElementById('backToWordsBtn');
  const verbConjugationBtn = document.getElementById('verbConjugationBtn');
  const checkBtns = document.querySelectorAll('.grammar__check-btn');
  const resetBtns = document.querySelectorAll('.grammar__reset-btn');
  const tocLinks = document.querySelectorAll('.grammar__toc-link');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');

  let completedExercises = new Set();
  const totalExercises = 15;

  backToWordsBtn.addEventListener('click', () => {
    window.location.href = 'learn-es.html';
  });

  verbConjugationBtn.addEventListener('click', () => {
    window.location.href = 'learn-es-grammar-verb.html';
  });

  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  function normalizeAnswer(answer) {
    return answer.toLowerCase().trim().replace(/\s+/g, ' ');
  }

  function checkRadioExercise(exerciseNum, questions) {
    let correct = 0;
    let total = 0;

    questions.forEach(question => {
      const feedback = question.querySelector('.grammar__feedback');
      const correctAnswer = feedback.dataset.answer;
      const radios = question.querySelectorAll('input[type="radio"]');
      const selectedRadio = Array.from(radios).find(radio => radio.checked);

      total++;

      if (selectedRadio) {
        const userAnswer = selectedRadio.value;
        if (normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer)) {
          feedback.textContent = '✓ Правильно!';
          feedback.className = 'grammar__feedback grammar__feedback--correct';
          correct++;
        } else {
          feedback.textContent = `✗ Неправильно. Правильный ответ: ${correctAnswer}`;
          feedback.className = 'grammar__feedback grammar__feedback--incorrect';
        }
      } else {
        feedback.textContent = '⚠ Выберите ответ';
        feedback.className = 'grammar__feedback grammar__feedback--warning';
      }
    });

    if (correct === total) {
      completedExercises.add(exerciseNum);
      updateProgress();
    }

    return { correct, total };
  }

  function checkInputExercise(exerciseNum, questions) {
    let correct = 0;
    let total = 0;

    questions.forEach(question => {
      const input = question.querySelector('.grammar__input');
      const feedback = question.querySelector('.grammar__feedback');
      
      if (!input || !feedback) return;

      const correctAnswer = input.dataset.answer;
      const userAnswer = input.value;

      total++;

      if (userAnswer.trim() === '') {
        feedback.textContent = '⚠ Введите ответ';
        feedback.className = 'grammar__feedback grammar__feedback--warning';
      } else if (normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer)) {
        feedback.textContent = '✓ Правильно!';
        feedback.className = 'grammar__feedback grammar__feedback--correct';
        input.classList.add('grammar__input--correct');
        input.classList.remove('grammar__input--incorrect');
        correct++;
      } else {
        feedback.textContent = `✗ Неправильно. Правильный ответ: ${correctAnswer}`;
        feedback.className = 'grammar__feedback grammar__feedback--incorrect';
        input.classList.add('grammar__input--incorrect');
        input.classList.remove('grammar__input--correct');
      }
    });

    if (correct === total) {
      completedExercises.add(exerciseNum);
      updateProgress();
    }

    return { correct, total };
  }

  function resetExercise(exerciseNum, questions) {
    questions.forEach(question => {
      const radios = question.querySelectorAll('input[type="radio"]');
      radios.forEach(radio => {
        radio.checked = false;
      });

      const inputs = question.querySelectorAll('.grammar__input');
      inputs.forEach(input => {
        input.value = '';
        input.classList.remove('grammar__input--correct', 'grammar__input--incorrect');
      });

      const feedback = question.querySelector('.grammar__feedback');
      if (feedback) {
        feedback.textContent = '';
        feedback.className = 'grammar__feedback';
      }
    });

    completedExercises.delete(exerciseNum);
    updateProgress();
  }

  function updateProgress() {
    const completed = completedExercises.size;
    const percentage = (completed / totalExercises) * 100;
    
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${completed}/${totalExercises}`;
  }

  checkBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const exerciseNum = parseInt(btn.dataset.exercise);
      const section = btn.closest('.grammar__section');
      const questions = section.querySelectorAll('.grammar__question');

      const hasRadios = section.querySelector('input[type="radio"]');
      
      if (hasRadios) {
        const result = checkRadioExercise(exerciseNum, questions);
        showResultMessage(btn, result);
      } else {
        const result = checkInputExercise(exerciseNum, questions);
        showResultMessage(btn, result);
      }
    });
  });

  resetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const exerciseNum = parseInt(btn.dataset.exercise);
      const section = btn.closest('.grammar__section');
      const questions = section.querySelectorAll('.grammar__question');
      
      resetExercise(exerciseNum, questions);
    });
  });

  function showResultMessage(btn, result) {
    const existingMsg = btn.parentElement.querySelector('.grammar__result-message');
    if (existingMsg) {
      existingMsg.remove();
    }

    const msg = document.createElement('div');
    msg.className = 'grammar__result-message';
    msg.textContent = `Результат: ${result.correct} из ${result.total}`;
    
    if (result.correct === result.total) {
      msg.classList.add('grammar__result-message--perfect');
    }

    btn.parentElement.appendChild(msg);

    setTimeout(() => {
      msg.remove();
    }, 3000);
  }

  updateProgress();
});
