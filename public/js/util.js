/***** Timestamp 값을 GMT 표기로 바꾸는 함수 *******/

function timeConverter(ts) {
    var a = new Date(ts);
    var months = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var str = year+"년 "+month+"월 "+date+"일 "+amPm(hour)+"시 "+addZero(min)+"분 "+addZero(sec)+"초";
    // var str = String(year).substr(2)+"년 "+month+" "+date+"일 "+amPm(addZero(hour))+"시 "+addZero(min)+"분 "+addZero(sec) +"초";
}