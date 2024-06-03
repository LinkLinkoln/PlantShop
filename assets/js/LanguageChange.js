const i18Obj = {
  en: {

  },
  ru: {

  }
}
let currentLanguage = localStorage.getItem("language") || "en";

function getTranslate(lang) {
  const elements = document.querySelectorAll("[data-i18]");
  elements.forEach((elem) => {
    const key = elem.dataset.i18;
    if (i18Obj[lang][key]) {
      if (elem.placeholder) {
        elem.placeholder = i18Obj[lang][key];
      } else {
        elem.textContent = i18Obj[lang][key];
      }
    }
  });
}

const enButton = document.querySelector('button[data-i18="en"]');
const ruButton = document.querySelector('button[data-i18="rus"]');

enButton.addEventListener("click", () => {
  getTranslate("en");
  currentLanguage = "en";
  localStorage.setItem("language", "en");
});
ruButton.addEventListener("click", () => {
  getTranslate("ru");
  currentLanguage = "ru";
  localStorage.setItem("language", "ru");
});

// Добавляем вызов функции при загрузке страницы
window.addEventListener("load", () => {
  getTranslate(currentLanguage);
});
if (
  window.location.pathname !== "/html/registation.html" &&
  window.location.pathname !== "/html/authorisation.html"
) {
  const enButtonB = document.querySelector('button[data-i18="enB"]');
  const ruButtonB = document.querySelector('button[data-i18="rusB"]');

  enButtonB.addEventListener("click", () => {
    getTranslate("en");
    enButtonB.classList.add("eng");
    ruButtonB.classList.remove("russ");
    currentLanguage = "en";
    localStorage.setItem("language", "en");
  });
  ruButtonB.addEventListener("click", () => {
    getTranslate("ru");
    enButtonB.classList.remove("eng");
    ruButtonB.classList.add("russ");
    currentLanguage = "ru";
    localStorage.setItem("language", "ru");
  });
}