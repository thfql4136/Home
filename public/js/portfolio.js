/*  $('body').imagesLoaded()
.done( function( instance ) {
	$(".loader").hide(0);
  console.log('all images successfully loaded');
})
.progress( function( instance, image ) {
  var result = image.isLoaded ? 'loaded' : 'broken';
  console.log( 'image is ' + result + ' for ' + image.img.src );
});  */


var config = {
    apiKey: "AIzaSyAOX1jjWv0vxfNvisIgu1JmNvQCoVVKea0",
    authDomain: "thfql4136-portfolio.firebaseapp.com",
    databaseURL: "https://thfql4136-portfolio.firebaseio.com",
    projectId: "thfql4136-portfolio",
    storageBucket: "thfql4136-portfolio.appspot.com",
    messagingSenderId: "89551442823"
  };
  firebase.initializeApp(config);
  var db = firebase.database();
  var ref = db.ref("root/portfolio/");
  var user;
  var key = '';

  (function initPort(){
      ref = db.ref("root/portfolio");
      ref.on('child_added', portAdd);
      //ref.on('child_removed', shopRev);
  })();

function portAdd(data){
    var html = '';
    var id = data.key;
    var v = data.val();
    html += '<div class="box">';
    html += '<div class="title clear">';
    html += '<div class="wave">';
    html += '<img src="../img/wave.png" alt="wave">';
    html += '</div>';
    html += '<div class="wave2">';
    html += '<img src="../img/wave2.png" alt="wave">';
    html += '</div>';
    html += '<div class="tit">';
    html += '<p class="kr">'+v.title+'</p>';
    html += '</div>';
    html += '<ul class="'+v.className+' cont kr clear">';
    html +='<li class="le-tit">'+v.periodTit+'</li>';
    html +='<li class="ri-tit">'+v.periodCont+'</li>';
    html +='<li class="le-tit">'+v.periodTit+'</li>';
    html +='<li class="ri-tit">'+v.periodTit+'</li>';
    html +='<li class="le-tit">'+v.periodTit+'</li>';
    html +='<li class="ri-tit">'+v.periodTit+'</li>';
    html +='<li class="le-tit">'+v.periodTit+'</li>';
    html +='<li class="ri-tit">'+v.periodTit+'</li>';
    html +='<li class="le-tit">'+v.periodTit+'</li>';
    html +='<li class="ri-tit">'+v.periodTit+'</li>';
    html +='<li class="le-tit">'+v.periodTit+'</li>';
    html +='<li class="ri-tit">'+v.periodTit+'</li>';
    html +='<li class="lap lap1"><src="'+v.periodTit+'"></li>';
    html += '</ul>';
    html += '<div class="btn">';
    html += '<div class="le_btn">MAIN</div>';
    html += '<div class="ri_btn">DETAIL</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="mokup">';
    html += '<div class="n1">';
    html += '<div class="opa">';
    html += '</div>';
    html += '</div>';
    html += '<div class="n2">';
    html += '<div class="opa">';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    $(".p_right").append(html);

    /* for(var i = 0; i<data.result.length; i++){
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
    } */
};























/*json파일을 Ajax통신으로 데이터 받기 */
/* var html = '';

$.ajax({
    url:"../json/portfolio.json",
    type:"get",
    dataType:"json",
    data:{},
    success:function(data){
        if(data.code == 200){
            $(".loader").show();
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
            $(".cont").imagesLoaded().done( function( instance ) {
                $(".loader").hide(0);
            });
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
 */
