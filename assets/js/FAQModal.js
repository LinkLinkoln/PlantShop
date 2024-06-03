
var modal = document.getElementById("FAQModal");

var btn = document.getElementById("FAQButton");

var span = document.getElementsByClassName("btnClose")[0];

btn.onclick = function() {
  modal.style.display = "flex";
}

span.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const buttons = document.querySelectorAll('.faq-button');
const headerIcon = document.querySelector('.FAQInfo-image');
const headerInfoH1 = document.querySelector('.FAQInfoH1');
const headerInfoH2 = document.querySelector('.FAQInfoH2');
const outputWindow = document.querySelector('.FAQSectionInformation');
const FAQText = document.querySelector('.FAQ_text');
const contentData = {
  CactusFaqContent: {
    SectionImage: 'assets/img/FAQ/cactus.png',
    FAQMainText: `<div class="FAQInfoH1" data-i18="TypesOfFlowerText">
    </div>
    <div class="FAQInfoH2" data-i18="TypesOfFlowerMainText">
    </div>
    `,
    Code: `
    <div class="FlowersFAQ">
    <div class="Flower" alt="Rose">
      <div class="FlowerFAQH1" alt="ChangableText" data-i18="RoseText">
        <a> Розы </a>
      </div>
      <div class="FAQDesignLine"></div>
      <div class="FlowerFAQText" data-i18="RoseMainText">
          Классика цветочного мира. У нас вы найдете розы
          различных расцветок, от нежных пастельных тонов до
          насыщенных красных. Мы поставляем розы как местного, так
          и импортного производства.
      </div>
    </div>
    <div class="Flower" alt="Lilii">
      <div class="FlowerFAQH1" data-i18="Liliy">
        <a> Лилии </a>
      </div>
      <div class="FAQDesignLine"></div>
      <div class="FlowerFAQText" data-i18="LiliyMainText" >
        <a>
          Великолепные цветы с завораживающей формой и насыщенным
          ароматом. В продаже лилии Ориентальные, Азиатские,
          Трубчатые и другие разновидности.
        </a>
      </div>
    </div>
    <div class="Flower" alt="Gwozdiki">
      <div class="FlowerFAQH1" data-i18="GwozdikiText">
        <a> Гвоздики </a>
      </div>
      <div class="FAQDesignLine"></div>
      <div class="FlowerFAQText" data-i18="GwozdikiMainText">
        <a>
          Яркие, долговечные цветы, широко используемые в букетах
          и композициях. Мы предлагаем классические гвоздики, а
          также необычные сорта с махровыми и крупными цветками.
        </a>
      </div>
    </div>
    <div class="Flower" alt="Tulpanu">
      <div class="FlowerFAQH1" data-i18="TyplanText">
        <a> Тюльпаны </a>
      </div>
      <div class="FAQDesignLine"></div>
      <div class="FlowerFAQText" data-i18="TyplanMainText">
        <a>
          Весенние цветы с широкой палитрой цветов, от нежных
          пастельных до насыщенных ярких оттенков.
        </a>
      </div>
    </div>
  </div>
    `
  },
  TimeFaqContent: {
    SectionImage: 'assets/img/FAQ/hourglass.png',
    FAQMainText: `
    <div class="FAQInfoH1" data-i18="TimeText">
    </div>
    <div class="FAQInfoH2" data-i18="TimeMainText">
    </div>
    `,
    Code: `
    <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ad02e9532d33d20dfa605f98e3cb4488f69cb90d8985d3b9778658ba505fe9e0a&amp;width=539&amp;height=458&amp;lang=ru_RU&amp;scroll=true"></script>
    `
  },
  PackageFaqContent: {
    SectionImage: 'assets/img/FAQ/package.png',
    FAQMainText: `
    <div class="FAQInfoH1" data-i18="DeliveryFAQText">
    </div>
    <div class="FAQInfoH2" data-i18="DeliveryFAQMainText">
    </div>
    `,
    Code: '<h2>Информация для кнопки 3</h2>'
  },
  
  CreditCardFaqContent: {
    SectionImage: 'assets/img/FAQ/credit-card.png',
    FAQMainText: `
    <div class="FAQInfoH1" data-i18="PaymentType">
    </div>
    <div class="FAQInfoH2" data-i18="PaymentMainType">
    </div>
    `,
    Code: '<h2>Информация для кнопки 4</h2>'
  }
};


buttons.forEach(button => {
  button.addEventListener('click', () => {
    switchLanguage();
    const contentKey = button.dataset.content;
    const content = contentData[contentKey];
    headerIcon.src = content.SectionImage;
    FAQText.innerHTML = content.FAQMainText;
    outputWindow.innerHTML = content.Code;
    switchLanguage();
  });
});
