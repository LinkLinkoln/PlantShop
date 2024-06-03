const i18Obj = {
  en: {
    sliderText1: "Lorem Ipsum is simply dummy text of the printing\nand typesetting industry. Lorem Ipsum has been the\nindustry's standard dummy text ever since the 1500s",
    sliderItemDelivery: "Lorem Ipsum is simply dummy text of the printing \n and typesetting industry. Lorem Ipsum has been the \n industry's standard dummy text ever since the 1500s",
    DeliveryText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    CutstomerText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    OriginalPlants: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    AffordablePrice: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    BuyMorePlantsText: "Buy more plants, it \n helps you to be relaxed",
    BuyMorePlantsMainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi \n gravida gravida aliquam. Pellentesque et lobortis nisl. Sed et \n mauris justo. Nulla eu enim non mauris maximus dignissim. \n Maecenas vitae eros sapien. Quisque pellentesque tempus \n dignissim.",
    GetPlant: "Get your favourites plant on \n our shop now",
    PreviousText: "Previous",
    NextText: "Next",
    RoseText: "Rose",
    RoseMainText: "The classic of the floral world. At our store, you will find roses \n of various colors, from delicate pastel tones to \n rich reds. We supply roses from both local and \n imported production.",
    Liliy: "Liliy",
    LiliyMainText: "Magnificent flowers with a captivating form and rich aroma. We offer Oriental, Asiatic, Trumpet, and other varieties of lilies for sale.",
    GwozdikiText: "Carnations",
    GwozdikiMainText: "Vibrant, long-lasting flowers, widely used in bouquets and arrangements. We offer classic carnations as well as unique varieties with double and large blooms.",
    TyplanText: "Tulips",
    TyplanMainText: "Spring flowers with a wide palette of colors, from delicate pastels to rich, vibrant hues.",
    TypesOfFlowerText: "What types of flowers do you sell?",
    TypesOfFlowerMainText: "Check out our wide assortment of plants",
    TimeText: "How long will the purchased flowers stay fresh?",
    TimeMainText: "Learn about the storage life of our plants",
    DeliveryFAQText: "What interesting do we have in delivery?",
    DeliveryFAQMainText: "Learn about the best delivery in the country",
    PaymentType: "What payment methods can you offer?",
    PaymentMainType: "Choose the most convenient payment option for you",
  },
  ru: {
    sliderText1: "Lorem Ipsum — это просто текст-пустышка полиграфической\nи наборной индустрии. Lorem Ipsum был стандартным\n текстом-пустышкой в ​​отрасли с 1500-х годов",
    sliderItemDelivery: "Lorem Ipsum - это просто текст-заполнитель полиграфической и \n наборной промышленности. Lorem Ipsum используется с XVI века,\n став стандартным текстом-заполнителем в этой области.",
    DeliveryText: "Lorem Ipsum - это просто текст-заполнитель полиграфической и наборной промышленности. Lorem Ipsum используется как стандартный текст-заполнитель в этой области",
    CutstomerText: "Lorem Ipsum - это просто текст-заполнитель полиграфической и наборной промышленности. Lorem Ipsum используется как стандартный текст-заполнитель в этой области",
    OriginalPlants: "Lorem Ipsum - это просто текст-заполнитель полиграфической и наборной промышленности. Lorem Ipsum используется как стандартный текст-заполнитель в этой области",
    AffordablePrice: "Lorem Ipsum - это просто текст-заполнитель полиграфической и наборной промышленности. Lorem Ipsum используется как стандартный текст-заполнитель в этой области",
    BuyMorePlantsText: "Покупайте больше растений, \n это помогает вам расслабиться",
    BuyMorePlantsMainText: "Я без понятия как переводить этот бред...",
    GetPlant: "Приобретите свои любимые растения \n в нашем магазине прямо сейчас",
    PreviousText: "Предыдущий",
    NextText: "Следующий",
    RoseText: "Розы",
    RoseMainText: "Классика цветочного мира. У нас вы найдете розы \n различных расцветок, от нежных пастельных тонов до \n насыщенных красных. Мы поставляем розы как местного, так \n и импортного производства.",
    Liliy: "Лилии",
    LiliyMainText: "Великолепные цветы с завораживающей формой и насыщенным ароматом. В продаже лилии Ориентальные, Азиатские, Трубчатые и другие разновидности.",
    GwozdikiText: "Гвоздики",
    GwozdikiMainText: "Яркие, долговечные цветы, широко используемые в букетах и композициях. Мы предлагаем классические гвоздики, а также необычные сорта с махровыми и крупными цветками.",
    TyplanText: "Тюльпаны",
    TyplanMainText: "Весенние цветы с широкой палитрой цветов, от нежных пастельных до насыщенных ярких оттенков.",
    TypesOfFlowerText: "Какие виды цветов вы продаёте?",
    TypesOfFlowerMainText: "Ознакомьтесь с нашим широким ассортиментом растений",
    TimeText: "Как долго будут свежими купленные цветы?",
    TimeMainText: "Узнайте сроки хранения наших растений",
    DeliveryFAQText: "А что у нас интересного по доставке?",
    DeliveryFAQMainText: "Узнайте о лучшей доставке страны",
    PaymentType: "Какие способы оплаты вы можете преложить?",
    PaymentMainType: "Выберете удобный способ оплаты для вас",
 
  }
};

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

function switchLanguage() {
  const languageButton = document.getElementById("ChangeLanguageBtn");
  const languageIcon = languageButton.querySelector("img");

  if (currentLanguage === "en") {
    currentLanguage = "ru";
    languageIcon.src = "assets/img/russia.png";
  } else {
    currentLanguage = "en";
    languageIcon.src = "assets/img/united-kingdom.png";
  }

  getTranslate(currentLanguage);
  localStorage.setItem("language", currentLanguage);
}

const languageButton = document.getElementById("ChangeLanguageBtn");
languageButton.addEventListener("click", switchLanguage);

window.addEventListener("load", () => {
  getTranslate(currentLanguage);
  const languageIcon = languageButton.querySelector("img");
  languageIcon.src = currentLanguage === "en" ? "assets/img/united-kingdom.png" : "assets/img/russia.png";
});