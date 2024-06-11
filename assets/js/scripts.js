// после готовности DOM
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.itc-slider').forEach((el) => {
      ItcSlider.getOrCreateInstance(el);
    });
  });


/* Nav mobile */

let navTrigger = document.querySelector('.mobile-menu')
let navWrap = document.querySelector('.mobile-nav')

navTrigger.addEventListener('click', function (event) {
    navWrap.classList.toggle('active')
})

// Получаем кнопку переключения темы
const themeToggleBtn = document.getElementById('themeToggle');

// Проверяем наличие темы в localStorage при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  // Получаем текущую тему из localStorage
  let currentTheme = localStorage.getItem('theme');

  // Если тема есть в localStorage, применяем её
  if (currentTheme) {
    document.body.className = currentTheme;
  } else {
    // Если нет сохранённой темы, устанавливаем тему по умолчанию
    document.body.className = 'light-theme';
  }
});

// Обработчик клика на кнопке переключения темы
themeToggleBtn.addEventListener('click', function() {
  const currentTheme = document.body.className;
  if (currentTheme === 'light-theme') {
    document.body.className = 'dark-theme';
  } else {
    document.body.className = 'light-theme';
  }
  // Сохраняем выбранную тему в localStorage
  localStorage.setItem('theme', document.body.className);
});

!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {
   var modalButtons = document.querySelectorAll('.js-open-modal'),
overlay = document.querySelector('.js-overlay-modal'),
closeButtons = document.querySelectorAll('.js-modal-close');

modalButtons.forEach(function(item){

item.addEventListener('click', function(e) {

  e.preventDefault();

  var modalId = this.getAttribute('data-modal'),
  modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

  modalElem.classList.add('active');
});
}); 

closeButtons.forEach(function(item){

   item.addEventListener('click', function(e) {
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
   });

}); 

document.body.addEventListener('keyup', function (e) {
   var key = e.keyCode;
   if (key == 27) {
       document.querySelector('.modal.active').classList.remove('active');
       document.querySelector('.overlay').classList.remove('active');
   };
}, false);




});

