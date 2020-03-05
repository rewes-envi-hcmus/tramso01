var a=document.getElementById("link").innerHTML;
var myVar = setInterval(myTimer, 200);
var dosemax=0;
		var humax=0;
		var temax=0;
		var sen1max=0;
		var sen2max=0;
		var sen3max=0;
		var dosemin=99999;
		var humin=99999;
		var temin=99999;
		var sen1min=99999;
		var sen2min=99999;
		var sen3min=99999;
	function myTimer() {
	$(document).ready(function() {
	$.getJSON(a, function(response) {
			
			var date = new Date();
    		var nowdate=date.getDate();
    		var nowmonth=date.getMonth();
    		var newnowmonth=nowmonth+1;
    		var nowyear=date.getFullYear();
    		var nowhour=date.getHours();
    		var nowminute=date.getMinutes();
    		var nowsecond=date.getSeconds();
    		
    		
    		if (nowdate<10){nowdate="0"+nowdate;}
    		if (newnowmonth<10){newnowmonth="0"+newnowmonth;}
    		if (nowhour<10){nowhour="0"+nowhour;}
    		if (nowminute<10){nowminute="0"+nowminute;}
    		if (nowsecond<10){nowsecond="0"+nowsecond;}
    		var data = nowhour+":"+nowminute+":"+nowsecond+" - "+nowdate+"/"+newnowmonth+"/"+nowyear;

    		//tìm max

		var dose=response.dose;
		var dose=dose.toFixed(2);
		if (dosemax <= dose)
		{
			dosemax=dose;
			document.getElementById("dosemax").innerHTML = dosemax;
			
    		document.getElementById('timedosemax').innerHTML = data;
		}
		var Hu=response.Hu;
		var Hu=Hu.toFixed(1);
		if (humax <= Hu)
		{
			humax=Hu;
			document.getElementById("humax").innerHTML = humax;
			
    		document.getElementById('timehumax').innerHTML = data;
		}
		var Te=response.Te;
		var Te=Te.toFixed(1);
		if (temax <= Te)
		{
			temax=Te;
			document.getElementById("temax").innerHTML = temax;
			
    		document.getElementById('timetemax').innerHTML = data;
		}
		var sen1=response.sen1;
		var sen1=sen1.toFixed(2);
		if (sen1max <= sen1)
		{
			sen1max=sen1;
			document.getElementById("sen1max").innerHTML = sen1max;
			
    		document.getElementById('timesen1max').innerHTML = data;
		}
		var sen2=response.sen2;
		var sen2=sen2.toFixed(2);
		if (sen2max <= sen2)
		{
			sen2max=sen2;
			document.getElementById("sen2max").innerHTML = sen2max;
			
    		document.getElementById('timesen2max').innerHTML = data;
		}
		var sen3=response.sen3;
		var sen3=sen3.toFixed(2);
		if (sen3max <= sen3)
		{
			sen3max=sen3;
			document.getElementById("sen3max").innerHTML = sen3max;
			
    		document.getElementById('timesen3max').innerHTML = data;
		}

		//tìm min

		var dose=response.dose;
		var dose=dose.toFixed(2);
		if (dosemin >= dose)
		{
			dosemin=dose;
			document.getElementById("dosemin").innerHTML = dosemin;
			
    		document.getElementById('timedosemin').innerHTML = data;
		}
		var Hu=response.Hu;
		var Hu=Hu.toFixed(1);
		if (humin >=Hu)
		{
			humin=Hu;
			document.getElementById("humin").innerHTML = humin;
			
    		document.getElementById('timehumin').innerHTML = data;
		}
		var Te=response.Te;
		var Te=Te.toFixed(1);
		if (temin >= Te)
		{
			temin=Te;
			document.getElementById("temin").innerHTML = temin;
			
    		document.getElementById('timetemin').innerHTML = data;
		}
		var sen1=response.sen1;
		var sen1=sen1.toFixed(2);
		if (sen1min >= sen1)
		{
			sen1min=sen1;
			document.getElementById("sen1min").innerHTML = sen1min;
			
    		document.getElementById('timesen1min').innerHTML = data;
		}
		var sen2=response.sen2;
		var sen2=sen2.toFixed(2);
		if (sen2min >= sen2)
		{
			sen2min=sen2;
			document.getElementById("sen2min").innerHTML = sen2min;
			
    		document.getElementById('timesen2min').innerHTML = data;
		}
		var sen3=response.sen3;
		var sen3=sen3.toFixed(2);
		if (sen3min >= sen3)
		{
			sen3min=sen3;
			document.getElementById("sen3min").innerHTML = sen3min;
			
    		document.getElementById('timesen3min').innerHTML = data;
		}
				
});
});
};