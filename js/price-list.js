(() => {
    document.addEventListener('DOMContentLoaded', () => {
        $('.table').children().children('.first').addClass('tr_opened');
        $('.table:first tr').addClass('tr_opened');
        let td = $('.table td');
        let head = $('.head');
        $(window).resize(function() {
            if (td.css('display') == 'block') {
            $(head).remove();
        } 
            if (td.css('display') == 'inline-block') {
            $('.table tr:first').after(head);
        }
        });
        $('.close').click(function() {
            let table = $(this).parent().parent().parent().parent();
            let restTr = table.children().children('tr:not(.first)');
            if ($(this).hasClass('close_positive')) {
                restTr.addClass('tr_opened')
                $(this).removeClass('close_positive');
            } else {
                restTr.removeClass('tr_opened');
                $(this).addClass('close_positive');
            }
        });
        
    });
})()