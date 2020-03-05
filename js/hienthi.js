var myVar=setInterval(myTimer, 200)
function myTimer(){
	var trangthaini = document.getElementById("td090").style.background;
	var trangthaiin = document.getElementById("td091").style.background;
	var trangthaite = document.getElementById("td092").style.background;
	var trangthaihu = document.getElementById("td093").style.background;
	var trangthais1 = document.getElementById("td094").style.background;
	var trangthais2 = document.getElementById("td095").style.background;
	var trangthais3 = document.getElementById("td096").style.background;
	if(trangthaiin=="red"){
		var div=document.getElementById("dose1");
		div.style.visibility="hidden";
		var div1=document.getElementById("dosemax1");
		div1.style.visibility="hidden";
		var div2=document.getElementById("timedosemax1");
		div2.style.visibility="hidden";
		var div3=document.getElementById("dosemin1");
		div3.style.visibility="hidden";
		var div4=document.getElementById("timedosemin1");
		div4.style.visibility="hidden";
	}
	if (trangthaiin=="lime"){
		var div=document.getElementById("dose1");
		div.style.visibility="visible";
		var div1=document.getElementById("dosemax1");
		div1.style.visibility="visible";
		var div2=document.getElementById("timedosemax1");
		div2.style.visibility="visible";
		var div3=document.getElementById("dosemin1");
		div3.style.visibility="visible";
		var div4=document.getElementById("timedosemin1");
		div4.style.visibility="visible";
	}
	if(trangthaite=="red"){
		var div=document.getElementById("Te1");
		div.style.visibility="hidden";
		var div1=document.getElementById("temax1");
		div1.style.visibility="hidden";
		var div2=document.getElementById("timetemax1");
		div2.style.visibility="hidden";
		var div3=document.getElementById("temin1");
		div3.style.visibility="hidden";
		var div4=document.getElementById("timetemin1");
		div4.style.visibility="hidden";
	}
	if(trangthaite=="lime"){
		var div=document.getElementById("Te1");
		div.style.visibility="visible";
		var div1=document.getElementById("temax1");
		div1.style.visibility="visible";
		var div2=document.getElementById("timetemax1");
		div2.style.visibility="visible";
		var div3=document.getElementById("temin1");
		div3.style.visibility="visible";
		var div4=document.getElementById("timetemin1");
		div4.style.visibility="visible";
	}
	if(trangthaihu=="red"){
		var div=document.getElementById("Hu1");
		div.style.visibility="hidden";
		var div1=document.getElementById("humax1");
		div1.style.visibility="hidden";
		var div2=document.getElementById("timehumax1");
		div2.style.visibility="hidden";
		var div3=document.getElementById("humin1");
		div3.style.visibility="hidden";
		var div4=document.getElementById("timehumin1");
		div4.style.visibility="hidden";
	}
	if(trangthaihu=="lime"){
		var div=document.getElementById("Hu1");
		div.style.visibility="visible";
		var div1=document.getElementById("humax1");
		div1.style.visibility="visible";
		var div2=document.getElementById("timehumax1");
		div2.style.visibility="visible";
		var div3=document.getElementById("humin1");
		div3.style.visibility="visible";
		var div4=document.getElementById("timehumin1");
		div4.style.visibility="visible";
	}
	if(trangthais1=="red"){
		var div=document.getElementById("sen11");
		div.style.visibility="hidden";
		var div1=document.getElementById("sen1max1");
		div1.style.visibility="hidden";
		var div2=document.getElementById("timesen1max1");
		div2.style.visibility="hidden";
		var div3=document.getElementById("sen1min1");
		div3.style.visibility="hidden";
		var div4=document.getElementById("timesen1min1");
		div4.style.visibility="hidden";
	}
	if(trangthais1=="lime"){
		var div=document.getElementById("sen11");
		div.style.visibility="visible";
		var div1=document.getElementById("sen1max1");
		div1.style.visibility="visible";
		var div2=document.getElementById("timesen1max1");
		div2.style.visibility="visible";
		var div3=document.getElementById("sen1min1");
		div3.style.visibility="visible";
		var div4=document.getElementById("timesen1min1");
		div4.style.visibility="visible";
	}
	if(trangthais1=="red"){
		var div=document.getElementById("sen21");
		div.style.visibility="hidden";
		var div1=document.getElementById("sen2max1");
		div1.style.visibility="hidden";
		var div2=document.getElementById("timesen2max1");
		div2.style.visibility="hidden";
		var div3=document.getElementById("sen2min1");
		div3.style.visibility="hidden";
		var div4=document.getElementById("timesen2min1");
		div4.style.visibility="hidden";
	}
	if(trangthais1=="lime"){
		var div=document.getElementById("sen21");
		div.style.visibility="visible";
		var div1=document.getElementById("sen2max1");
		div1.style.visibility="visible";
		var div2=document.getElementById("timesen2max1");
		div2.style.visibility="visible";
		var div3=document.getElementById("sen2min1");
		div3.style.visibility="visible";
		var div4=document.getElementById("timesen2min1");
		div4.style.visibility="visible";
	}
	if(trangthais1=="red"){
		var div=document.getElementById("sen31");
		div.style.visibility="hidden";
		var div1=document.getElementById("sen3max1");
		div1.style.visibility="hidden";
		var div2=document.getElementById("timesen3max1");
		div2.style.visibility="hidden";
		var div3=document.getElementById("sen3min1");
		div3.style.visibility="hidden";
		var div4=document.getElementById("timesen3min1");
		div4.style.visibility="hidden";
	}
	if(trangthais1=="lime"){
		var div=document.getElementById("sen31");
		div.style.visibility="visible";
		var div1=document.getElementById("sen3max1");
		div1.style.visibility="visible";
		var div2=document.getElementById("timesen3max1");
		div2.style.visibility="visible";
		var div3=document.getElementById("sen3min1");
		div3.style.visibility="visible";
		var div4=document.getElementById("timesen3min1");
		div4.style.visibility="visible";
	}
	}