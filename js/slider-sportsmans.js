var swiper__sportsmans__main = null;
var mediaQuerySize = 700;

function catalogSliderInit () {
  if (!swiper__sportsmans__main) {
    swiper__sportsmans__main = new Swiper('.swiper-container__sportsmans-main', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 40,
        observer: true,
        observeParents: true,
        // If we need pagination
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next__sportsmans-main',
          prevEl: '.swiper-button-prev__sportsmans-main',
        },
        
        breakpoints: {
            // when window width is >= 320px
            768: {
              pagination: {
                el: '.swiper-pagination__sportsmans-main',
                clickable: true,
                type: 'custom',
                renderCustom: function(swiper, current, total) {
                  var names = [];
                  $(".swiper-wrapper .swiper-slide").each(function(i) {
                      names.push($(this).data("name"));
                  });
                  var text = "";
                  for (let i = 1; i <= total; i++) {
                    if(total <= 6){
                      if (current == i) {
                        text += `<span class="swiper-pagination-bullet swiper-pagination-bullet-active">${i}</span>`;
                      }else {
                        text += `<span class="swiper-pagination-bullet">${i}</span>`;
                      }
                    }
                    if(total > 6){
                      if(i == 1){
                        if(i == current && current <= 5){
                          text += `<span class="swiper-pagination-bullet swiper-pagination-bullet-active">${i}</span>`;
                        }
                        if(current > 5){
                          text += `<div class="swiper-pagination-bullet">${i}</div>...&nbsp;`;
                        }
                        if(current <= 5 && i !== current){
                          text += `<span class="swiper-pagination-bullet">${i}</span>`;
                        }
                      }
                      if(i > 1 && i < total){
                        if(current <=4 && i == current && i < 6){
                          text += `<span class="swiper-pagination-bullet swiper-pagination-bullet-active">${i}</span>`;
                        }else if(current <=5 && i !== current && i < 6){
                          text += `<span class="swiper-pagination-bullet">${i}</span>`;
                        }else if(current <=5 && i !== current && i >= 6){
                          text += `<span class="swiper-pagination-bullet" style="display:none;">${i}</span>`;
                        }
            
                        if(i > current + 2 && i >= 6 || i <= current - 2 && i >= 6 && total - i >=5 || i == current + 2 && i >= 6 && total - i >=2 || current >= 7 && i == 5){
                          text += `<span class="swiper-pagination-bullet" style="display:none;">${i}</span>`;
                        }else if(current >= 5 && i == current){
                          text += `<span class="swiper-pagination-bullet swiper-pagination-bullet-active">${i}</span>`;
                        }else 
                        if(current > 5 && i !== current && i >= 5 && i <= current + 2){
                          text += `<span class="swiper-pagination-bullet">${i}</span>`;
                        }else if(current >= 6 && i !== current && i <= 4){
                          text += `<span class="swiper-pagination-bullet" style="display:none;">${i}</span>`;
                        }
                      }
                      if(i == total){
                        if(current > 5 && total == current){
                          text += `<span class="swiper-pagination-bullet swiper-pagination-bullet-active">${i}</span>`;
                        }else if(current > 5 && total !== current && total - current < 4){
                          text += `<span class="swiper-pagination-bullet">${i}</span>`;
                        }
                        if(current <= 5 || total - current >= 4){
                          text += `&nbsp;...<div class="swiper-pagination-bullet">${i}</div>`;
                        }
                      }
                    }
                  }
                  return text;
                }
              },
              spaceBetween: 40,
            },
            1: {
              pagination: {
                el: '.swiper-pagination__sportsmans-main',
                clickable: true,
                type: 'custom',
                renderCustom: function(swiper, current, total) {
                  var names = [];
                  $(".swiper-wrapper .swiper-slide").each(function(i) {
                      names.push($(this).data("name"));
                  });
                  var text = "";
                  for (let i = 1; i <= total; i++) {
                    if(total <= 5){
                      if (current == i) {
                        text += `<span class="swiper-pagination-bullet swiper-pagination-bullet-active">${i}</span>`;
                      }else {
                        text += `<span class="swiper-pagination-bullet">${i}</span>`;
                      }
                    }
                    if(total > 5){
                      if(i == 1){
                        if(i == current && current <= 3){
                          text += `<span class="swiper-pagination-bullet swiper-pagination-bullet-active">${i}</span>`;
                        }
                        if(current > 3){
                          text += `<span class="swiper-pagination-bullet">${i}</span>...&nbsp;`;
                        }
                        if(current <= 3 && i !== current){
                          text += `<span class="swiper-pagination-bullet">${i}</span>`;
                        }
                      }
                      if(i > 1 && i < total){
                        if(current <=3 && i == current && i < 4){
                          text += `<span class="swiper-pagination-bullet swiper-pagination-bullet-active">${i}</span>`;
                        }else if(current <=3 && i !== current && i < 4){
                          text += `<span class="swiper-pagination-bullet">${i}</span>`;
                        }else if(current <=3 && i !== current && i >= 4){
                          text += `<span class="swiper-pagination-bullet" style="display:none;">${i}</span>`;
                        }
            
                        if(i > current + 1 && i >= 4 || i <= current - 1 && i >= 4 && total - i >=3 || i == current + 1 && i >= 4 && total - i >=1){
                          text += `<span class="swiper-pagination-bullet" style="display:none;">${i}</span>`;
                        }else if(current >= 4 && i == current){
                          text += `<span class="swiper-pagination-bullet swiper-pagination-bullet-active">${i}</span>`;
                        }else 
                        if(current > 3 && i !== current && i >= 4 && i <= current + 2){
                          text += `<span class="swiper-pagination-bullet">${i}</span>`;
                        }else if(current >= 4 && i !== current && i <= 3){
                          text += `<span class="swiper-pagination-bullet" style="display:none;">${i}</span>`;
                        }
                      }
                      if(i == total){
                        if(current > 3 && total == current){
                          text += `<span class="swiper-pagination-bullet swiper-pagination-bullet-active">${i}</span>`;
                        }else if(current > 3 && total !== current && total - current < 2){
                          text += `<span class="swiper-pagination-bullet">${i}</span>`;
                        }
                        if(current <= 3 || total - current >= 2){
                          text += `&nbsp;...<span class="swiper-pagination-bullet">${i}</span>`;
                        }
                      }
                    }
                  }
                  return text;
                }
              },
              spaceBetween: 40,
            },
          }
      });
  }
}

function catalogSliderDestroy () {
  if (swiper__sportsmans__main) {
    swiper__sportsmans__main.destroy();
    swiper__sportsmans__main = null;
  }
}

$(window).on('load resize', function () {
  // Берём текущую ширину экрана
  var windowWidth = $(this).innerWidth();
  
  // Если ширина экрана меньше или равна mediaQuerySize(1024)
  if (windowWidth <= mediaQuerySize) {
    // Инициализировать слайдер если он ещё не был инициализирован
    catalogSliderInit()
  } else {
    // Уничтожить слайдер если он был инициализирован
    catalogSliderDestroy()
    catalogSliderInit()
  }
});