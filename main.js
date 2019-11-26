$(document).ready(function(){
    $('.menu-item').click(function() {
        $('.dropdown-content').slideUp();
        if ($(this).children('.dropdown-content').is(':hidden')) {
            $(this).children('.dropdown-content').slideDown();
        }
        if ($('.dropdown-content.languages').is(':visible')) {
            $('.fas.fa-caret-down').removeClass('fa-caret-down').addClass('fa-caret-up');
        } else {
            $('.fas.fa-caret-up').removeClass('fa-caret-up').addClass('fa-caret-down');}
    });
});
