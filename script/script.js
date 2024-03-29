// SLIDER
let currentSlide = 0;

function changeSlide(index) {
  currentSlide = index;
  updateSlider();
}

function updateSlider() {
  const slides = document.querySelector('.slides');
  const slideWidth = document.querySelector('.slide').offsetWidth;

  slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

// Adiciona a transição automática a cada 3 segundos
setInterval(() => {
  if (currentSlide < 5) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateSlider();
}, 3000);

// MENU-MOBILE
const menuMobile = document.getElementById("btn-mobile");

function abrirMenu() {
  const menu = document.getElementById("nav");
  menu.classList.toggle("ativo");
}
menuMobile.addEventListener("click", abrirMenu);

// ANIMA SCROLL
function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-content");
  if (sections.length) {
    const heigth = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((item) => {
        const distanciaTop = item.getBoundingClientRect().top;
        const secaoVisivel = distanciaTop - heigth < 0;
        if (secaoVisivel) {
          item.classList.add("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimaScroll();