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
  var ref = db.ref("root/port/");
  var user;
  var key = '';

  var page = [];
  page[0] = [];
  page[0][0] = "제작 기간";
    page[1][0] = "2018. 11. 26";
    page[2][0] = "기획 의도";
    page[3][0] = "1";
    page[4][0] = "타겟층";
    page[5][0] = "1";
    page[6][0] = "컨셉";
    page[7][0] = "1";
    page[8][0] = "컬러 플랜";
    page[9][0] = "1";
    page[10][0] = "스킬";
    page[11][0] = "1";
    page[12][0] = "../img/laptop1.jpg";

  (function initPort(){
      ref.db.ref("root/port");
      ref.on('child_added', portAdd);
      ref.on('child_removed', shopRev);
  })();

function portAdd(data){
   var html = '';
   if(data.result) {
       console.log(data.result);
       if(i=0){
           for(var i=0; i<data.result.length; i++){
            html='<li class="le-tit">'+page[0][i]+'</li>';
            html+='<li class="ri-tit">'+page[1][i]+'</li>';
            html+='<li class="le-tit">'+page[2][i]+'</li>';
            html+='<li class="ri-tit">'+page[3][i]+'</li>';
            html+='<li class="le-tit">'+page[4][i]+'</li>';
            html+='<li class="ri-tit">'+page[5][i]+'</li>';
            html+='<li class="le-tit">'+page[6][i]+'</li>';
            html+='<li class="ri-tit">'+page[7][i]+'</li>';
            html+='<li class="le-tit">'+page[8][i]+'</li>';
            html+='<li class="ri-tit">'+page[9][i]+'</li>';
            html+='<li class="le-tit">'+page[10][i]+'</li>';
            html+='<li class="ri-tit">'+page[11][i]+'</li>';
            html+='<li class="lap lap1"><src="'+page[12][i]+'"></li>';
           }
       }
       $(".content1").append(html);
   }
    
    $(".cont").each(function(i){
        var id = $(this).attr("id");
        db.ref("root/port/"+id).once("value").then(function(snapshot){
            $("#")
        })
    })

   


    
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