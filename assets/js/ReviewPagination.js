// Получаем все элементы пагинации
const paginationButtons = document.querySelectorAll('.PaginationButton');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');

const reviewItems = document.querySelectorAll('.review-item');
const personPhotos = document.querySelectorAll('.person-photo');
const reviewData = [
    {
      photo1: 'assets/img/Reviews/photo1.png',
      photo2: 'assets/img/Reviews/photo2.png',
    },
    {
      photo1: 'assets/img/Reviews/photo2.png',
      photo2: 'assets/img/Reviews/photo1.png',
    },
    {
      photo1: 'assets/img/Reviews/photo1.png',
      photo2: 'assets/img/Reviews/photo2.png',
    },
    {
      photo1: 'assets/img/Reviews/photo2.png',
      photo2: 'assets/img/Reviews/photo1.png',
    },
  ];
// Текущая страница
let currentPage = 0;

// Функция для обновления стилей пагинации
function updatePaginationStyles() {
  paginationButtons.forEach((button, index) => {
    button.classList.remove('active');
    if (index + 1 === currentPage) {
      button.classList.add('active');
    }
  });

  // Скрываем или показываем кнопки в зависимости от текущей страницы
  if (currentPage === 1) {
    leftButton.style.display = 'none';
    leftSide.style.display = 'none';
  } else {
    leftButton.style.display = 'block';
    leftSide.style.display = 'block';
  }

  if (currentPage === paginationButtons.length) {
    rightButton.style.display = 'none';
    rightSide.style.display = 'none';
  } else {
    rightButton.style.display = 'block';
    rightSide.style.display = 'block';
  }
}



// Обработчик клика на кнопках пагинации
paginationButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentPage = index + 1;
    personPhotos[0].src = reviewData[currentPage - 1].photo1;
    personPhotos[1].src = reviewData[currentPage - 1].photo2;
    updatePaginationStyles();
  });
});

// Обработчик клика на кнопке "Влево"
leftButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updatePaginationStyles();
    // Здесь можно добавить логику загрузки данных для выбранной страницы
  }
});

// Обработчик клика на кнопке "Вправо"
rightButton.addEventListener('click', () => {
  if (currentPage < paginationButtons.length) {
    currentPage++;
    updatePaginationStyles();
    // Здесь можно добавить логику загрузки данных для выбранной страницы
  }
});

// Первоначальное обновление стилей пагинации
updatePaginationStyles();