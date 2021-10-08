const swiper = new Swiper('.slider-one__content', {
  // Optional parameters
  direction: 'vertical',
  loop: false,
  slidesPerView: 1,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination-one',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-one',
    prevEl: '.swiper-button-prev-one',
  },
  breakpoints: {
      // when window width is >= 320px
      701: {
        direction: 'vertical',
      },
      1: {
        direction: 'horizontal',
      },
    }
});
const swiper__three = new Swiper('.swiper-container-three', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 2,
    spaceBetween: 40,
    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-three',
      prevEl: '.swiper-button-prev-three',
    },
    breakpoints: {
        // when window width is >= 320px
        993: {
          spaceBetween: 40,
        },
        901: {
            slidesPerView: 2,
          },
          
        700: {
            slidesPerView: 1.5,
            spaceBetween: 24,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
      }
});
const swiper__two = new Swiper('.media__content', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 40,
  freeMode: true,
  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-two',
    prevEl: '.swiper-button-prev-two',
  },
  breakpoints: {
      // when window width is >= 320px
      993: {
        spaceBetween: 40,
      },
      768: {
          spaceBetween: 24,
        },
      1: {
          spaceBetween: 16,
        },
    }
});