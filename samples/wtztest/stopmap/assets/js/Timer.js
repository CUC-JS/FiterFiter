var se,m=0,h=0,s=0,ss=1;
function second(){
	if((ss%100)==0){s+=1;ss=1;}
	if(s>0 && (s%60)==0){m+=1;s=0;}
	if(m>0 && (m%60)==0){h+=1;m=0;}
	t=h+":"+m+":"+s;
	document.getElementById("showtime").innerHTML=t;
	ss+=1;
}
//setTimeout or setInterval is counted by millisecond
function startclock(){se=setInterval("second()",1);console.log("Start")}
//toggle by button click
function pauseclock(){clearInterval(se);}
function stopclock(){clearInterval(se);ss=1;m=h=s=0;}
//toggle by button stop