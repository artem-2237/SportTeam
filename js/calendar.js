//calendar slider
var swiper__calendar = null;
var mediaQuerySize = 700;
function catalogSliderInit () {
  if (!swiper__calendar) {
    swiper__calendar = new Swiper('.calendar__mein', {
      direction: 'horizontal',
      loop: false,
      autoHeight: true,
      slidesPerView: 1,
      spaceBetween: 40,
      navigation: {
        nextEl: '.swiper-button-next-calend',
        prevEl: '.swiper-button-prev-calend',
      },
  });
  }
}
function catalogSliderDestroy () {
  if (swiper__calendar) {
    swiper__calendar.destroy();
    swiper__calendar = null;
  }
}
$(window).on('load resize', function () {
  var windowWidth = $(this).innerWidth();
  if (windowWidth <= mediaQuerySize) {
    catalogSliderInit()
  } else {
    catalogSliderDestroy()
  }
});
//calendar slider 