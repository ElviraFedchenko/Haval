// Swiper 8.4.7
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

const productsSwiper = document.querySelector('.products__slider');
const productsSwiper2 = document.querySelector('.products__slider--haval');

const initProductsSwiper = () => {
  if (productsSwiper) {
    const swiper = new Swiper(productsSwiper, {

      pagination: {
        el: '.products__pagination',
        loop: true,
        clickable: true,
        focusableElements: true,
      },
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      loop: false,
      keyboard: true,
      speed: 600,
      breakpoints: {
        1199: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },

    });
  }
};
const initProductsSwiper2 = () => {
  if (productsSwiper2) {
    const swiper = new Swiper(productsSwiper2, {

      pagination: {
        el: '.products__pagination--haval',
        loop: true,
        clickable: true,
        focusableElements: true,
      },
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      loop: false,
      keyboard: true,
      speed: 600,
      breakpoints: {
        1199: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },

    });
  }
};

export {initProductsSwiper, initProductsSwiper2};
