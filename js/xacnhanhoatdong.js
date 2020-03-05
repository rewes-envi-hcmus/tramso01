var a=document.getElementById("link").innerHTML;
var realtime1=0;

$.getJSON(a, function(ni) {
var realtime2=ni.realtime;

if(realtime2!=null){
	if(realtime2==realtime1)
{
	document.getElementById("trangthai").innerHTML="Hệ đang dừng hoạt động!";
		var div=document.getElementById("td04");
		div.style.color="orange";
};
if (realtime2!=realtime1)
	{realtime1=realtime2;
		
		document.getElementById("trangthai").innerHTML="Hệ đang hoạt động!";
		var div=document.getElementById("td04");
		div.style.color="lime";
	};

}
if (realtime2==null)
{
	document.getElementById("trangthai").innerHTML="Hệ đang tắt!";
		var div=document.getElementById("td04");
		div.style.color="red";
}
});

var myVar=setInterval(myTime, 4000);
function myTime()
{
	
		$.getJSON(a, function(ni) {
var realtime2=ni.realtime;

if(realtime2!=null){
	if(realtime2==realtime1)
{
	document.getElementById("trangthai").innerHTML="Hệ đang dừng hoạt động!";
		var div=document.getElementById("td04");
		div.style.color="orange";
};
if (realtime2!=realtime1)
	{realtime1=realtime2;
		
		document.getElementById("trangthai").innerHTML="Hệ đang hoạt động!";
		var div=document.getElementById("td04");
		div.style.color="lime";
		
	};

}
else
{
	document.getElementById("trangthai").innerHTML="Hệ đang tắt!";
		var div=document.getElementById("td04");
		div.style.color="red";
}
});
};
