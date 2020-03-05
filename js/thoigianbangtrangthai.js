var a=document.getElementById("link").innerHTML;
var myVar=setInterval(myTime, 500);
function myTime()
{
	$(document).ready(function() {
var trangthai=document.getElementById("trangthai").innerHTML;

if(trangthai=="Hệ đang hoạt động!"){

$.getJSON(a, function(ni) {
var realtime2=ni.realtime;
var date= new Date();
var time=date.getTime();

var months_arr = ['01','02','03','04','05','06','07','08','09','10','11','12'];
var start=new Date(time-realtime2*1000);
var startday=start.getDate();
var startmonth=months_arr[start.getMonth()];
var startyear=start.getFullYear();
var starthour=start.getHours();
var startminutes=start.getMinutes();
if(startday<10){startday="0"+startday;}
if(starthour<10){starthour="0"+starthour;}
if(startminutes<10){startminutes="0"+startminutes;}
var data= starthour+" : "+startminutes+" -- "+startday+" / "+startmonth+" / "+startyear;
document.getElementById("timestart").innerHTML=data;
var div=document.getElementById("td031");
div.style.background="white";
div.style.color="red";


var ngay=Math.floor(realtime2/86400);
var gio = Math.floor((realtime2-ngay*86400)/3600);
var phut = Math.floor((realtime2-ngay*86400-gio*3600)/60);
var giay = Math.floor(realtime2-ngay*86400-gio*3600-phut*60);
if(ngay<10){ngay="0"+ngay;}
if(gio<10){gio="0"+gio;}
if(phut<10){phut="0"+phut;}
if(giay<10){giay="0"+giay;}
var datarun=ngay+" ngày, "+gio+" giờ "+phut+ " phút "+giay+" giây";
document.getElementById("timerun").innerHTML=datarun;
var div=document.getElementById("td032");
div.style.background="white";
div.style.color="red";
});
};
if (trangthai=="Hệ đang dừng hoạt động!") {
document.getElementById("timestart").innerHTML="Hệ đang dừng!";
var div=document.getElementById("td031");
div.style.background="white";
div.style.color="red";
document.getElementById("timerun").innerHTML="Hệ đã dừng!";
var div=document.getElementById("td032");
div.style.background="white";
div.style.color="red";
};
if (trangthai=="Hệ đang tắt!") 
{
document.getElementById("timestart").innerHTML="Hệ đang tắt!";
var div=document.getElementById("td031");
div.style.background="white";
div.style.color="red";
document.getElementById("timerun").innerHTML="Không xác định được!";
var div=document.getElementById("td032");
div.style.background="white";
div.style.color="red";
}
var date1=new Date();
var datenow=date1.getDate();
var monthnow=date1.getMonth()+1;
var yearnow=date1.getFullYear();
var hournow=date1.getHours();
var minutenow=date1.getMinutes();
var secondnow=date1.getSeconds();
if(datenow<10){datenow="0"+datenow;}
if(monthnow<10){monthnow="0"+monthnow;}
if(hournow<10){hournow="0"+hournow;}
if(minutenow<10){minutenow="0"+minutenow;}
if(secondnow<10){secondnow="0"+secondnow;}
var data1= hournow+" : "+minutenow+" : "+secondnow+" -- "+datenow+" / "+monthnow+" / "+yearnow;
document.getElementById("timenow").innerHTML=data1;

});
};