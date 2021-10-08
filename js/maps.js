(() => {
    function openFullObj() {
        let title = $(this);
        let info = title.parent();
        let obj = info.parent();
        let img = obj.find('.object__img_container');
        let inf = obj.find('.inf_wrapp');
        let contacts = obj.find('.contacts');
        let fullAddress = obj.find('.full-object__address');
        let fullTel = obj.find('.full-object__tel');
        let fullSked = obj.find('.full-object__schedule');
        let SkedText = obj.find('.object__schedule_text');
        let fullSkedWrapp = obj.find('.object__schedule_wrapper');

        obj.addClass('full-object');
        img.addClass('full-object__img_container');
        info.addClass('full-object__info');
        inf.css('display', 'block');
        contacts.addClass('full-object__contacts');
        fullAddress.css('display', 'flex');
        fullTel.css('display', 'flex');
        fullSked.css('display', 'flex');
        SkedText.css('display', 'none');
        fullSkedWrapp.addClass('full-object__schedule_wrapper');

        let otherObj = $('.object:not(.full-object)');
        otherObj.css('display', 'none');
    }

    $('.site-nav__back_text').click(function(){
        let otherObj = $('.object:not(.full-object)');
        let obj = $('.full-object');
        let img = $('.full-object__img_container');
        let info = $('.full-object__info');
        let inf = $('.inf_wrapp');
        let contacts = $('.full-object__contacts');
        let fullAddress = $('.full-object__address');
        let fullTel = $('.full-object__tel');
        let fullSked = $('.full-object__schedule');
        let SkedText = $('.object__schedule_text');
        let fullSkedWrapp = $('.full-object__schedule_wrapper');

        otherObj.css('display', 'flex');
        obj.removeClass('full-object');
        img.removeClass('full-object__img_container');
        info.removeClass('full-object__info');
        inf.css('display', 'none');
        contacts.removeClass('full-object__contacts');
        fullAddress.css('display', 'none');
        fullTel.css('display', 'none');
        fullSked.css('display', 'none');
        SkedText.css('display', 'block');
        fullSkedWrapp.removeClass('full-object__schedule_wrapper');
    });

    $('.object__title').click(openFullObj);
    $('.object__img').click(openFullObj);
    $('.inf__item_text').click(function(){
        if($(this).hasClass('inf__item_active')) {
            return;
        }
        $(this).parent().addClass('inf__item_active');
        if($('.inf__item_active').length > 0) {
            $('.filter__submit').addClass('filter__submit_active');
        }
        $(this).parent().children('.close').css('display', 'inline-block');
    });
    $('.close').click(function(){
        let item = $(this).parent();
        item.removeClass('inf__item_active');
        if($('.inf__item_active').length < 1) {
            $('.filter__submit').removeClass('filter__submit_active');
        }
        $(this).css('display', 'none');
    });
    document.querySelector('.filter__form').addEventListener('click', function(e){
        e.preventDefault();
    })
    // $('.filter__button').click(function(){
    //     if($('.filter_wrapper').hasClass('filter_closed')) {
    //         $('.filter_wrapper').removeClass('filter_closed');
    //     } else {
    //         $('.filter_wrapper').addClass('filter_closed');
    //     }
    // })
    document.querySelector('.filter__button').addEventListener('click', function(){
        document.querySelector('.filter_wrapper').classList.toggle('filter_closed');
    })


})()



