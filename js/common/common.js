import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

// JavaScript to show/hide Back to Top button
var backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



// ******* Portfolio swipper effect ******
/**
  Swiper:
  https://swiperjs.com/
**/
 document.addEventListener('DOMContentLoaded', function () {
   const swiper = new Swiper('.swiperCarousel', {
     slidesPerView: 3,
     centeredSlides: true,
     spaceBetween: 10,
     keyboard: {
       enabled: true,
     },
     loop: true,
     pagination: {
       el: '.swiper-pagination',
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   });

   const nextButton = document.querySelector('.swiper-button-next');
   const prevButton = document.querySelector('.swiper-button-prev');

   nextButton.addEventListener('click', () => {
     swiper.slideNext();
   });

   prevButton.addEventListener('click', () => {
     swiper.slidePrev();
   });

   function resizeTextToFit() {
     const quoteEls = document.getElementsByClassName('quote');
     for (const el of quoteEls) {
       el.style.width = el.offsetWidth + 'px';
       el.style.height = el.offsetHeight + 'px';
     }
     textFit(quoteEls, { maxFontSize: 14 });
   }

   resizeTextToFit();
   window.addEventListener('resize', resizeTextToFit);
 });
