
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAOX1jjWv0vxfNvisIgu1JmNvQCoVVKea0",
    authDomain: "thfql4136-portfolio.firebaseapp.com",
    databaseURL: "https://thfql4136-portfolio.firebaseio.com",
    projectId: "thfql4136-portfolio",
    storageBucket: "thfql4136-portfolio.appspot.com",
    messagingSenderId: "89551442823"
  };
  firebase.initializeApp(config);

    

  var auth = firebase.auth();
  var db = firebase.database();
  var googleAuth = new firebase.auth.GoogleAuthProvider();
  var ref;
  var user = null;
  var key = '';
  init();


  function timeConverter(ts){
	var a = new Date(ts);
	var months = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();
	var str = year+"년 "+month+" "+date+"일 "+amPm(hour)+"시 "+addZero(min)+"분 "+addZero(sec) +"초";
	return str;
}
function addZero(n) {
	if(n<10) return "0"+n;
	else return n;
}


function amPm(h) {
	if(h<12) return "오전 "+addZero(h);
	else if(h>12) return "오후 "+addZero(h-12);
	else return "오후 12";
}

  $(".btn1 .login").click(function(){
      auth.signInWithPopup(googleAuth);
  });



  auth.onAuthStateChanged(function(result){
    if(result) {
        $(".login").hide();
        $(".logout").show();
        user = result;
    }
    else {
        $(".login").show();
        $(".logout").hide();
        user = null;
    }
  });

  $(".btn2 .logout").click(function(){
     auth.signOut();
  });

  function init(){
      ref = db.ref("root/memos/");
      ref.on("child_added",onAdd );
      ref.on("child_removed",onRev );
  }

  function onAdd(data){
      var id = data.key;
      var val = data.val();
      var wdate = val.wdate;
      var html = '<li class="kr" id="'+id+'">';
      html += '<h4>'+val.content+'</h4>';
      html += '<h5>'+val.email+'</h5>';
      html += '<p>'+timeConverter(wdate)+'</p>';
      html +='</li>'
      $(".lists").prepend(html);
  }

$("#btn_wr").click(function(data){
    if(user) {
        var content = $("#content").val();
        if(content == "" ) {
            alert("내용을 입력해주세요~");
            $("#content").focus();
        }
        else{
            ref = db.ref("root/memos/");
            ref.push({
                content : content,
                wdate: new Date().getTime(),
                email: user.email
            }).key;
            $("#content").val("");
        }
    }
    else {
        alert("로그인을 해주세요~");
    }
});

function onRev(data){
    var id = data.key;
    $("#"+id).remove();
}


