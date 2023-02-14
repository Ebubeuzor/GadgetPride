$(document).ready(function() {

    $("i#btn").click(function(){
        $("#sidebar").toggle(500);
        if ($(window).width() <=600) {
            $(".hs").toggle();
            $(".companyname").toggle();
            $(".account-header-container").toggle();
            $(".cart").toggle();
        }

    });

    $("i#cancel").click(function(){
        $("#sidebar").toggle(500);
        if ($(window).width() <=600) {
            $(".hs").toggle();
            $(".companyname").toggle();
            $(".account-header-container").toggle();
            $(".cart").toggle();
        }

    });
})