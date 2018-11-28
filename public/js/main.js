

// $('.movie_bg').tubular({ videoId: 'qREKP9oijWI'});

var now = 0;
var hei = [];

$(window).on("mousewheel DOMMouseScroll", wheelFn);
 function wheelFn(e) {
    console.log(e);
    e.preventDefault();
    e.stopPropagation();
    scTop = $(window).scrollTop();
    var delta = e.originalEvent.wheelDelta;

    $(window).off("mousewheel DOMMouseScroll");
    $(".slide").each(function(i){
        hei[i] = $(this).offset().top;
    });
    for(var i=0; i< hei.length; i++) {
        if(scTop <= hei[i]) {
            now = i;
            break;
        }
    }
    //console.log("S:"+now);

    if(delta > 0) {
        if(now > 0)  now--;
    }
    else {
        if(now < hei.length-1)  now++;
    }
    //console.log("L:"+now);
    $(".sc-menu").css({"font-size":"1.5em"});
    $(".sc-menu").eq(now).css({"font-size":"6em"});
    
    $(".sc-menu").eq(now).slideUp(function(){
        $(this).appendTo($(this)).slideDown();
    });
    $("html, body").stop().delay(100).animate({"scrollTop":hei[now]}, 300, function(){
        $(window).on("mousewheel DOMMouseScroll", wheelFn);
    });
};

$(".menu li a").hover(function(){
    $(".overlay li").animate({"opacity":"0.5"});
}, function(){
    $(".overlay li").animate({"opacity":"0.2"});
});

$(".overlay").mousemove(function (evt) {  //클래스배너에서 마우스가 움직이면 이벤트가 발생하겠습니다.
    var delta = 50;
    var cX = evt.clientX;
    var cY = evt.clientY;
    var iX = $(this).find(".slide").width() / 2;
    var iY = $(this).find(".slide").height() / 2;
    var mX = (iX - cX)/delta;
    var mY = (iY - cY)/delta;
    $(this).find(".slide").css("transform", "translate("+mX+"px, "+mY+"px)");
    
});

$("html, body").stop().animate({"scrollTop":0});
