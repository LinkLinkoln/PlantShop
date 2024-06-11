// Получаем элементы pop-up окна
const cookiePopup = document.getElementById('cookie-popup');
const acceptBtn = document.getElementById('cookie-accept-btn');
const declineBtn = document.getElementById('cookie-decline-btn');

// Функция для получения количества посещений сайта
function getVisitCount() {
  let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;
  return visitCount;
}

// Функция для увеличения количества посещений сайта
function increaseVisitCount() {
  let visitCount = getVisitCount();
  visitCount++;
  localStorage.setItem('visitCount', visitCount);
}

// Функция для показа/скрытия pop-up окна
function toggleCookiePopup() {
  const visitCount = getVisitCount();
  if (visitCount > 0 && visitCount % 3 === 0 && !document.cookie.includes('cookie-accepted=true')) {
    cookiePopup.style.display = 'block';
  } else {
    cookiePopup.style.display = 'none';
  }
}

// Обрабатываем нажатие на кнопку "Принять"
acceptBtn.addEventListener('click', () => {
  document.cookie = 'cookie-accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  cookiePopup.style.display = 'none';
  increaseVisitCount();
});

// Обрабатываем нажатие на кнопку "Отклонить"
declineBtn.addEventListener('click', () => {
  cookiePopup.style.display = 'none';
  increaseVisitCount();
});

// Проверяем и показываем/скрываем pop-up окно при загрузке страницы
toggleCookiePopup();
increaseVisitCount();