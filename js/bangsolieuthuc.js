var a=document.getElementById("link").innerHTML;

var myVar = setInterval(myTimer, 200);
	function myTimer() {
	$(document).ready(function() {
		var date = new Date();
    		var nowdate=date.getDate();
    		var nowmonth=date.getMonth();
    		var newnowmonth=nowmonth+1;
    		var nowyear=date.getFullYear();
    		var nowhour=date.getHours();
    		var nowminute=date.getMinutes();
    		var nowsecond=date.getSeconds();
    		var nowday=date.getDay();
    		if (nowday==1) {nowday="Thứ hai";}
    		if (nowday==2) {nowday="Thứ ba";}
    		if (nowday==3) {nowday="Thứ tư";}
    		if (nowday==4) {nowday="Thứ năm";}
    		if (nowday==5) {nowday="Thứ sáu";}
    		if (nowday==6) {nowday="Thứ bảy";}
    		if (nowday==0) {nowday="Chủ nhật";}
    		if (nowdate<10){nowdate="0"+nowdate;}
    		if (newnowmonth<10){newnowmonth="0"+newnowmonth;}
    		if (nowhour<10){nowhour="0"+nowhour;}
    		if (nowminute<10){nowminute="0"+nowminute;}
    		if (nowsecond<10){nowsecond="0"+nowsecond;}

    		var data = nowday+", "+nowdate+"/"+newnowmonth+"/"+nowyear +" - "+nowhour+":"+nowminute+":"+nowsecond;
    		document.getElementById('time').innerHTML = data;
    			
		$.getJSON(a, function(response) {
		var dose=response.dose;
		var dose=dose.toFixed(2);
		document.getElementById("dose").innerHTML=dose;

		var Hu=response.Hu;
		var Hu=Hu.toFixed(1);
		document.getElementById("Hu").innerHTML = Hu;

		var Te=response.Te;
		var Te=Te.toFixed(1);
		document.getElementById("Te").innerHTML = Te;

		var sen1=response.sen1;
		var sen1=sen1.toFixed(2);
		document.getElementById("sen1").innerHTML=sen1;

		var sen2=response.sen2;
		var sen2=sen2.toFixed(2);
		document.getElementById("sen2").innerHTML=sen2;

		var sen3=response.sen3;
		var sen3=sen3.toFixed(2);
		document.getElementById("sen3").innerHTML=sen3;

		
		});
	});
}