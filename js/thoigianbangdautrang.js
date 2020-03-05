            var date = new Date();
            var time1=date.getTime();
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
    		document.getElementById('timeload').innerHTML = data;
     


    var myVar = setInterval(myTimer, 1000);
    function myTimer() {
    $(document).ready(function() {

            var d = new Date();
            var time2=d.getTime();
            
            time=(time2-time1)/1000;
            

            var ngay = Math.floor(time/86400);
            var gio = Math.floor((time-ngay*86400)/3600);
            var phut = Math.floor((time-ngay*86400-gio*3600)/60);
            var giay = Math.floor(time-ngay*86400-gio*3600-phut*60);
            if(ngay<10){ngay="0"+ngay;}
            if(gio<10){gio="0"+gio;}
            if(phut<10){phut="0"+phut;}
            if(giay<10){giay="0"+giay;}
        var runtime = ngay +" ngày, " +gio+" giờ "+phut+" phút "+giay+ " giây";
        document.getElementById("timeloaded").innerHTML=runtime; 
        });
};