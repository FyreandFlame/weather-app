function correctDate(date){
  let today = new Date ();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
 let month = months[today.getMonth()];
 let days = ["Sun", "Mon","Tues", "Wed", "Thur", "Fri", "Sat"];
 let day = days[today.getDay()];
 let number = today.getDate();
 let year = today.getFullYear();
 year = year.toString().substr(-2);

return `${day} <hr/> <h5>${number} ${month} ${year}</h5>`;}

 function correctTime(time){
 let now = new Date();
let hour = now.getHours();
  if (hour < 10){
   hour = `0${hour}`;
  } 

  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }

 return `${hour}:${minute}`
  }
function showSearch(event){
  event.preventDefault();
  let city = document.querySelector("#cities");
  let searchCity = document.querySelector("#search-bar");
  city.innerHTML = searchCity.value;
}


 let day = document.querySelector("#current-day");
 let today = new Date();
 day.innerHTML = correctDate(today);

 let time = document.querySelector("#time-Update")
 time.innerHTML = correctTime(today);


let newCity = document.querySelector("#find-city-form");
newCity.addEventListener("submit", showSearch);


function showWeather(response){
document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
document.querySelector("#weather-today").innerHTML = (response.data.weather[0].description);
document.querySelector("#cities").innerHTML =(response.data.name);
}

let searchInput = document.querySelector(`#search-bar`);
let searchButton = document.querySelector(`#find-city`);
searchButton.addEventListener("click",citySelect);

function citySelect()
{
  let citySearch = searchInput.value;
  let apiKey = "8111e41df7ccf91003deb151dd8812f4";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric`;
  axios.get(`${url}&appid=${apiKey}`).then(showWeather);
} 

let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", searchCurrent);

function searchCurrent(){
navigator.geolocation.getCurrentPosition(currentPosition);}

function currentPosition(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "8111e41df7ccf91003deb151dd8812f4";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`;
  axios.get(`${url}&appid=${apiKey}`).then(currentWeather);
}

function currentWeather(response){
  console.log(response);
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
document.querySelector("#cities").innerHTML = (response.data.name);
document.querySelector("#weather-today").innerHTML = (response.data.weather[0].description);

}
function search(city){
  let apiKey = "8111e41df7ccf91003deb151dd8812f4";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${url}&appid=${apiKey}`).then(showWeather);
}
search ("London");