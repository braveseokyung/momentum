const API_KEY="d4757f085f96a9d9c8081063540cc94e";
const weather=document.getElementById("weather");

function onGeoOk(position){
	const lat=position.coords.latitude;
	const lon=position.coords.longitude;
    console.log(lat,lon);
	const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`; //modified
	fetch(url).then(response=>response.json()).then(data=>{
		console.log(data.weather[0].main)
		weather.innerText=`${data.name} / ${data.weather[0].main}`;
	});
}
function onGeoError(){
	alert("Can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);