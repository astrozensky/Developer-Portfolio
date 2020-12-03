$(document).ready(function() {

    $(function() {
        $(window).on("scroll", function() { if($(window).scrollTop() > 10) {
            $(".header").addClass("scrolled");
        } else {
            $(".header").removeClass("scrolled");
        } });
    });

});




    
