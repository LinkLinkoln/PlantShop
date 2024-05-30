
var modal = document.getElementById("FAQModal");

var btn = document.getElementById("FAQButton");

var span = document.getElementsByClassName("btnClose")[0];

btn.onclick = function() {
  modal.style.display = "flex";e;
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
const contentData = {
  CactusFaqContent: {
    SectionImage: 'assets/img/FAQ/cactus.png',
    HeaderH1: 'Какие виды цветов вы продаёте?',
    HeaderH2: 'Ознакомьтесь с нашим широким ассортиментом растений',
    Code: `
    <div class="FlowersFAQ">
    <div class="Flower" alt = "Rose">
        <div class="FlowerFAQH1">
            <a> Розы </a>
        </div>
        <div class="FAQDesignLine">
        </div>
        <div class="FlowerFAQText">
            <a> Классика цветочного мира. У нас вы найдете розы различных 
                расцветок, от нежных пастельных тонов до насыщенных 
                красных. Мы поставляем розы как местного, так и 
                импортного производства. </a>
        </div>
    </div>
    <div class="Flower" alt = "Lilii">
        <div class="FlowerFAQH1">
            <a> Лилии </a>
        </div>
        <div class="FAQDesignLine" >
        </div>
        <div class="FlowerFAQText">
            <a> Великолепные цветы с завораживающей формой и 
                насыщенным ароматом. В продаже лилии Ориентальные, 
                Азиатские, Трубчатые и другие разновидности. </a>
        </div>
    </div>
    <div class="Flower" alt = "Gwozdiki">
        <div class="FlowerFAQH1">
            <a> Гвоздики </a>
        </div>
        <div class="FAQDesignLine" >
        </div>
        <div class="FlowerFAQText">
            <a> Яркие, долговечные цветы, широко используемые 
                в букетах и композициях. Мы предлагаем классические 
                гвоздики, а также необычные сорта с махровыми и крупными 
                цветками. </a>
        </div>
    </div>
    <div class="Flower" alt = "Tulpanu">
        <div class="FlowerFAQH1">
            <a> Тюльпаны </a>
        </div>
        <div class="FAQDesignLine" >
        </div>
        <div class="FlowerFAQText">
            <a> Весенние цветы с широкой палитрой цветов, от нежных 
                пастельных до насыщенных ярких оттенков. </a>
        </div>
    </div>
</div>
    `
  },
  TimeFaqContent: {
    SectionImage: 'assets/img/FAQ/hourglass.png',
    HeaderH1: 'Как долго будут свежими купленные цветы?',
    HeaderH2: 'Узнайте сроки хранения наших растений',
    Code: `
    <h2>Информация для кнопки 1</h2>
    <p>
      Это может быть текст с 
      <span class="custom-text">особым стилем</span>.
    </p>
    `
  },
  PackageFaqContent: {
    SectionImage: 'assets/img/FAQ/package.png',
    HeaderH1: 'А что у нас интересного по доставке?',
    HeaderH2: 'Узнайте о лучшей доставке страны',
    Code: '<h2>Информация для кнопки 3</h2>'
  },
  
  CreditCardFaqContent: {
    SectionImage: 'assets/img/FAQ/credit-card.png',
    HeaderH1: 'Какие способы оплаты вы можете предложить?',
    HeaderH2: 'Выберите удобный способ оплаты для вас',
    Code: '<h2>Информация для кнопки 4</h2>'
  }
};


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const contentKey = button.dataset.content;
    const content = contentData[contentKey];
    headerIcon.src = content.SectionImage;
    headerInfoH1.textContent = content.HeaderH1
    headerInfoH2.textContent = content.HeaderH2
    outputWindow.innerHTML = content.Code;
  });
});
