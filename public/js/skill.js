$(".flip").hover(function(){
	$(this).children("div").addClass("flipper");
}, function(){
	$(this).children("div").removeClass("flipper");
});
