// Отримуємо посилання на форму
const feedbackForm = document.querySelector('.feedback-form');

// Відновлення даних з локального сховища при завантаженні сторінки
restoreFormState();

// Відстеження події input на формі
feedbackForm.addEventListener('input', function (event) {
  const targetField = event.target;
  
  // Запис даних в локальне сховище
  saveToLocalStorage(targetField.name, targetField.value.trim());
});

// Відстеження події submit на формі
feedbackForm.addEventListener('submit', function (event) {
  // Заборона стандартної поведінки форми
  event.preventDefault();

  // Вивід у консоль об'єкта з поточними значеннями полів
  const formData = {
    email: feedbackForm.email.value.trim(),
    message: feedbackForm.message.value.trim()
  };
  console.log(formData);

  // Очистка локального сховища і полів форми
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
});

// Функція для відновлення даних з локального сховища
function restoreFormState() {
  const storedState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  console.log('Восстановленное состояние:', storedState);
  
  // Устанавливаем поточні значення полів з локального сховища
  feedbackForm.email.value = storedState.email || '';
  feedbackForm.message.value = storedState.message || '';
}

// Функція для збереження даних в локальне сховище
function saveToLocalStorage(fieldName, value) {
  // Отримуємо поточний стан форми з локального сховища або створюємо новий об'єкт
  const storedData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  // Зберігаємо значення для конкретного поля в стані
  storedData[fieldName] = value;

  // Зберігаємо оновлений стан у локальному сховищі
  localStorage.setItem('feedback-form-state', JSON.stringify(storedData));
}
