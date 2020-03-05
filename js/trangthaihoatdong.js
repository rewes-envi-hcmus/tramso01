var a=document.getElementById("link").innerHTML;
var ni1;
var in1;
var nhietdo1;
var doam1;
var sen1;
var sen2;
var sen3;
$.getJSON(a, function(myrio) {
var ni2=myrio.realtime;
var in2=myrio.dose;
var nhietdo2=myrio.Te;
var doam2=myrio.Hu;
var sen12=myrio.sen1;
var sen22=myrio.sen2;
var sen32=myrio.sen3;
if(ni2!=null){
	
	if(ni1==ni2)
{
		var div=document.getElementById("td090");
		div.style.background="red";
};
if (ni2!=ni1)
	{ni1=ni2;
		
		var div=document.getElementById("td090");
		div.style.background="lime";
	};

};
//
if(in2!=null){
	
	if(in1==in2)
{
		var div=document.getElementById("td091");
		div.style.background="red";
		
};
if (in2!=in1)
	{in1=in2;
		
		var div=document.getElementById("td091");
		div.style.background="lime";
		
	};
};

//
if(nhietdo2!=null){
	if(nhietdo1==nhietdo2)
{
		var div=document.getElementById("td092");
		div.style.background="red";
};
if (nhietdo2!=nhietdo1)
	{nhietdo1=nhietdo2;
		
		var div=document.getElementById("td092");
		div.style.background="lime";
	};

};
//
if(doam2!=null){
	if(doam1==doam2)
{
		var div=document.getElementById("td093");
		div.style.background="red";
};
if (doam2!=doam1)
	{doam1=doam2;
		
		var div=document.getElementById("td093");
		div.style.background="lime";
	};

};
//
if(sen12!=null){
	if(sen1==sen12)
{
		var div=document.getElementById("td094");
		div.style.background="red";
};
if (sen12!=sen1)
	{sen1=sen12;
		
		var div=document.getElementById("td094");
		div.style.background="lime";
	};

};
//
if(sen22!=null){
	if(sen2==sen22)
{
		var div=document.getElementById("td095");
		div.style.background="red";
};
if (sen22!=sen2)
	{sen2=sen22;
		
		var div=document.getElementById("td095");
		div.style.background="lime";
	};

};
if(sen32!=null){
	if(sen3==sen32)
{
		var div=document.getElementById("td096");
		div.style.background="red";
};
if (sen32!=sen3)
	{sen3=sen32;
		
		var div=document.getElementById("td096");
		div.style.background="lime";
	};

};
});
var ni1="";
var in1="";
var myVar1=setInterval(myTime1, 5000);
function myTime1()
{
	$(document).ready(function() {

		$.getJSON(a, function(myrio) {
var ni2=myrio.realtime;
var in2=myrio.dose;

if(ni2!=null){
	
	if(ni1==ni2)
{
		var div=document.getElementById("td090");
		div.style.background="red";
};
};
if (ni2!=ni1)
	{ni1=ni2;
		
		var div=document.getElementById("td090");
		div.style.background="lime";
	};



//
if(in2!=null){
	if(in2<0.001){
	if(in1==in2)
{
		var div=document.getElementById("td091");
		div.style.background="red";

};
};
if (in2!=in1)
	{in1=in2;
		
		var div=document.getElementById("td091");
		div.style.background="lime";

	};
};
});
});
};

var myVar=setInterval(myTime, 300);
function myTime()
{
	$(document).ready(function() {

		$.getJSON(a, function(myrio) {

var nhietdo2=myrio.Te;
var doam2=myrio.Hu;
var sen12=myrio.sen1;
var sen22=myrio.sen2;
var sen32=myrio.sen3;
//
if(nhietdo2>0){
	
		var div=document.getElementById("td092");
		div.style.background="lime";
}else{
		
		var div=document.getElementById("td092");
		div.style.background="red";
	};

//
if(doam2>0){
	
		var div=document.getElementById("td093");
		div.style.background="lime";
}
else{
		
		var div=document.getElementById("td093");
		div.style.background="red";
	};

//
if(sen12>0){
	
		var div=document.getElementById("td094");
		div.style.background="lime";
}else

	{
		var div=document.getElementById("td094");
		div.style.background="red";
	};

//
if(sen22>0){

		var div=document.getElementById("td095");
		div.style.background="lime";
}else
	{
		
		var div=document.getElementById("td095");
		div.style.background="red";
	};


if(sen32>0){


		var div=document.getElementById("td096");
		div.style.background="lime";
}else 
	{
		
		var div=document.getElementById("td096");
		div.style.background="red";
	};

});
});
};

