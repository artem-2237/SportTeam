const swiper__achievements__main = new Swiper('.achievements-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 40,
    freeMode: true,
    // If we need pagination
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-achievements',
      prevEl: '.swiper-button-prev-achievements',
    },
    breakpoints: {
        // when window width is >= 320px
        993: {
          spaceBetween: 40,
        },
        700: {
          spaceBetween: 24,
        },
        1: {
          spaceBetween: 16,
        },
      }
  });