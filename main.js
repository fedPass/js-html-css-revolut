$(document).ready(function(){
    $('.menu-item').click(function() {
        $('.dropdown-content').slideUp();
        if (!$(this).children('.dropdown-content').is(':visible')) {
            $(this).children('.dropdown-content').slideDown();
        }
    });
});
