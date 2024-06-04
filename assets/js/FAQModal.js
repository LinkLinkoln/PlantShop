
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
    <div class="MapContainer">
    <div class="FlowerFAQH1" data-i18="ReviewsModal">
      </div>
      <div class="FlowerFAQText" data-i18 = "ReviewMainText">
      </div>
      <div class="FlowerFAQText" data-i18 = "ReviewMainText2">
      </div>
      <a href="reviews.html" class="green-button" data-i18="ReviewsButton" >Go to Target Page</a>
    </div>
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
    Code: `
    <div class="MapContainer">
    <div class="ButtonH1" data-i18="LocationText">
      <a
        >А мы тут! Нас легко найти!
        </a
      >
    </div>
    <div class="GoogleMap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.334173574588!2d30.341416012611887!3d53.
      908037432433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d051e21c08086b%3A0x342bdbdd2dc821f8!2z0JHQtdC70L7RgNGD0YHRgdC60L4t0KDQvt
      GB0YHQuNC50YHQutC40Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgg!5e0!3m2!1sru!2sby!4v1717509837236!5m2!1sru!2sby" width="600" height="450" style="border:0;" 
      allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="OrderButtonClass">
      <button class="order-button" data-i18="OrderButton">Order Now</button>
    </div>
  </div>
    `
  },
  
  CreditCardFaqContent: {
    SectionImage: 'assets/img/FAQ/credit-card.png',
    FAQMainText: `
    <div class="FAQInfoH1" data-i18="PaymentType">
    </div>
    <div class="FAQInfoH2" data-i18="PaymentMainType">
    </div>
    `,
    Code: `
    <div class="MapContainer">
    <div class="FlowerFAQH1" data-i18="ReviewsModal">
      </div>
      <div class="FlowerFAQText" data-i18 = "ReviewMainText">
      </div>
      <div class="FlowerFAQText" data-i18 = "ReviewMainText2">
      </div>
      <a href="reviews.html" class="green-button" data-i18="ReviewsButton" >Go to Target Page</a>
    </div>
    `
  
    
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const contentKey = "CactusFaqContent";
  const content = contentData[contentKey];
  headerIcon.src = content.SectionImage;
  FAQText.innerHTML = content.FAQMainText;
  outputWindow.innerHTML = content.Code;
});


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


