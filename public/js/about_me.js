$(window).resize(function(){

    $("#girl").animate({"right":"5%"}, 500);
    function scroll(){
        $(".t_text li:first").slideUp(function () {
        $(this).appendTo($(".t_text")).slideDown();
        });
        }
        setInterval(function() {
        scroll()}, 2500);

      
       
}).trigger("resize");
