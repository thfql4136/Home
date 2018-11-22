function scroll(){
    $(".t_text li:first").slideUp(function () {
    $(this).appendTo($(".t_text")).slideDown();
    });
    }
    setInterval(function() {
    scroll()}, 3000);