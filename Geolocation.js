//get position
var x = document.getElementById("demo");
function getLocation(){
	if (navigator.geolocation){
		//according to the result
		navigator.geolocation.getCurrentPosition(showPosition,showError);
	}else{
		x.innerHTML="Geolocation is not supported by this browser";
	}
}
//unfind var is due to googlemap api
function showPosition(position) {
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	latlon = new google.maps.LatLng(lat,lon);
	mapholder = document.getElementById('mapholder');
	mapholder.style.height = '250px';
}