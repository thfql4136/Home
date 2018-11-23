$('.movie_bg').tubular({ 
    videoId: 'qREKP9oijWI',
    repeat:true
 });

$(window).on("mousewheel DOMMouseScroll", function(e) {
    e.preventDefault();
    e.stopPropagation();
    var delta = e.originalEvent.wheelDelta;
    var scTop = $(window).scrollTop();
    var hei = [];
    var now = 0;
    $(".slide").each(function(i){
        hei[i] = $(this).offset().top;
    });
    for(var i=0; i< hei.length; i++) {
        if(scTop <= hei[i]) {
            now = i;
            break;
        }
    }
    console.log("S:"+now);

    if(delta > 0) {
        if(now > 0)  now--;
    }
    else {
        if(now < hei.length-1)  now++;
    }
    console.log("L:"+now);
    $(".sc-menu").css({"font-size":"1.5em"});
    $(".sc-menu").eq(now).css({"font-size":"6em"});
    
    $(".sc-menu").eq(now).slideUp(function(){
        $(this).appendTo($(this)).slideDown();
    });
    $("html, body").stop().delay(10).animate({"scrollTop":hei[now]}, 300, function(){
        
    });
});




$(".menu li a").hover(function(){
    $(".overlay li").animate({"opacity":"0.5"});
}, function(){
    $(".overlay li").animate({"opacity":"0.2"});
});




