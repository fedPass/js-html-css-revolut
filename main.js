$(document).ready(function(){
    $('.menu-item').click(function() {
        var subMenuCliccato = $(this).children('.dropdown-content');

        if (subMenuCliccato.is(':hidden')) {
            $('.dropdown-content').slideUp();
            subMenuCliccato.slideDown();
            if (subMenuCliccato.hasClass('languages')) {
                $('.fas.fa-caret-down').removeClass('fa-caret-down').addClass('fa-caret-up');
            }
        } else {
            $('.dropdown-content').slideUp();
            if (subMenuCliccato.hasClass('languages')) {
                $('.fas.fa-caret-up').removeClass('fa-caret-up').addClass('fa-caret-down');
            }
        }
        
        // if ($('.dropdown-content.languages').is(':visible')) {
        //     $('.fas.fa-caret-down').removeClass('fa-caret-down').addClass('fa-caret-up');
        // } else {
        //     $('.fas.fa-caret-up').removeClass('fa-caret-up').addClass('fa-caret-down');
        // }
    });
});
