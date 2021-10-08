const menu__body = document.querySelector('.menu__body');
const menu__icon = document.querySelector('.menu__icon');
const black__back = document.querySelector('.menu__black-back');
const body = document.querySelector('body');
$(menu__icon).click(function (event) {
    menu__body.classList.toggle('_active');
    menu__icon.classList.toggle('_active');
    black__back.classList.toggle('_active');
    body.classList.toggle('_lock');
});
/*$(menu__body).click(function (event) {
    menu__body.classList.toggle('_active');
    menu__icon.classList.toggle('_active');
    body.classList.toggle('_lock');
});*/
/*const slide_descr = document.querySelectorAll('.slide-descr');
const partnership_descrs = document.querySelectorAll('.partnership-descr');

$(slide_descr).hover(function(event) {
        const partnership_desc = event.target;
        partnership_desc.classList.toggle('_animate');
  });*/
  $(document).ready(function () {
    $('.button__accordion').click(function(event){
        if($('.accordion').hasClass('one')){
            $('.button__accordion').not($(this)).removeClass('_active');
            $('.panel__txt').not($(this).next()).slideUP(300);
        }
        $(this).toggleClass('_active').next().slideToggle(300);
    });
});
$(document).ready(function () {
    $('.search__list').click(function(event){
        if($('.documents__search-button').hasClass('one')){
            $('.search__list').not($(this)).removeClass('_active');
            $('.documents__search-button').not($(this).next()).slideUP(300);
        }
        $(this).toggleClass('_active').next().slideToggle(300);
    });
}); 
/*popup*/
const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.main__form')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}
function bodyLock() {
    body.classList.add('_lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, (timeout));
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('_lock');
    }, timeout);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});
/*popup*/