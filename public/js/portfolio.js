$('body').imagesLoaded()
.done( function( instance ) {
	$(".loader").hide(0);
  console.log('all images successfully loaded');
})
.progress( function( instance, image ) {
  var result = image.isLoaded ? 'loaded' : 'broken';
  console.log( 'image is ' + result + ' for ' + image.img.src );
});


var html = '';

    $.ajax({
        url:"../json/portfolio.json",
        type:"get",
        dataType:"json",
        data:{ },
        success:function(data){
            if(data.code == 200){
                for(var i = 0; i<data.result.length; i++){
                  html ='<li class="le-tit">'+data.result[i].period+'</li>';
                  html +='<li class="ri-tit">'+data.result[i].period1+'</li>';
                  html +='<li class="le-tit">'+data.result[i].Explanation+'</li>';
                  html +='<li class="ri-tit">'+data.result[i].Explanation1+'</li>';
                  html +='<li class="le-tit">'+data.result[i].Target+'</li>';
                  html +='<li class="ri-tit">'+data.result[i].Target1+'</li>';
                  html +='<li class="le-tit">'+data.result[i].concept+'</li>';
                  html +='<li class="ri-tit">'+data.result[i].concept1+'</li>';
                  html +='<li class="le-tit">'+data.result[i].color+'</li>';
                  html +='<li class="ri-tit">'+data.result[i].color1+'</li>';
                  html +='<li class="le-tit">'+data.result[i].skill+'</li>';
                  html +='<li class="ri-tit">'+data.result[i].skill1+'</li>';
                  html +='<li class="lap lap'+[i+1]+'"><img src='+data.result[i].photo+'></li>';
                  $(".cont").eq(i).append(html);
                }
            }
            else {
                alert("데이터가 이상이 있습니다.\n다시 시도해 주세요.");
            }
        },
        error: function(xhr, status, error){
            console.log(xhr, status, error);
            alert("예기치 못한 오류가 발생했습니다.\n다시 시도해 주세요.");
        }
    });
