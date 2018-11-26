$(window).resize(function(){   
    $("#girl").css({"right": "-50%"});
    $("#girl").stop().animate({"right":"5%"}, 500);
    
}).trigger("resize");

function scroll(){
    $(".t_text li:first").slideUp(function () {
        $(this).appendTo($(".t_text")).slideDown();
    });
}
var interval = setInterval(scroll, 3000);