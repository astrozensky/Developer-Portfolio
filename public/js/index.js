$(document).ready(function() {

    $(function() {
        $(window).on("scroll", function() { if($(window).scrollTop() > 10) {
            $(".header").addClass("scrolled");
        } else {
            $(".header").removeClass("scrolled");
        } });
    });

    $(function() {
        $(".mobile-nav__btn").on("click", () => {
            if( $(".mobile-nav__container").hasClass("hidden") ) {
                $(".mobile-nav__container").removeClass("hidden")
                $(".mobile-nav__container").addClass("visible");
            } else {
                $(".mobile-nav__container").removeClass("visible");
                $(".mobile-nav__container").addClass("hidden");
            }
        });
    });
    

});




    
