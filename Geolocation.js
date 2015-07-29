//get position
var x = document.getElementById("demo");
function getLocation(){
	if (navigator.geolocation){
		//according to the result
		//navigator.geolocation.getCurrentPosition(showPosition,showError);
		//返回用户的当前位置，并继续返回用户移动时的更新位置
		navigator.geolocation.watchPosition(showPosition);
	}else{
		x.innerHTML="Geolocation is not supported by this browser";
	}
}

//unfind var is due to googlemap api
function showPosition(position) {
	speed  = position.coords.speed;
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	latlon = new google.maps.LatLng(lat,lon);
	mapholder = document.getElementById('mapholder');
	mapholder.style.height = '250px';
	mapholder.style.width  = '500px';
	
	var myOptions={
		center:latlon,zoom:14,
		mapTypeId:google.maps.MapTypeId.ROADMAP,
		mapTypeControl:false,
		navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
	};
	//use mapholder&myoptions to build a sample map
	var map = new google.maps.Map(document.getElementById("mapholder"),myOptions);
	var marker = new google.maps.Marker({
		position:latlon,map:map,title:"FiterFiter",
		animation:google.maps.Animation.BOUNCE//use animations
		});
		
	//add a info window
	var contentString = '<div id="content">'+'<p>Your <b>Speed</b>is :</p>'+speed+'</div>';
	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth:200
	});
	google.maps.event.addListener(marker,'click',function(){
		infowindow.open(map,marker);
	});
}

////////////////////////////
//ErrorCode
//Permission denied - 用户不允许地理定位
//Position unavailable - 无法获取当前位置
//Timeout - 操作超时

////////////////////////////
function showError(error) {
	switch(error.code){
		case error.PERMISSION_DENIED:
			x.innerHTML = "USER denied the request for Geolocation.";
			break;
		case error.POSITION_UNAVAILABLE:
			x.innerHTML = "Location information is unavailable.";
			break;
		case error.TIMEOUT:
			x.innerHTML = "Timed out";
			break;
		case error.UNKONWN_ERROR:
			x.innerHTML = "Something unknown";
			break;
	}
}