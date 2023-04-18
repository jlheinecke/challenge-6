var jsonData
var API = document.getElementById("weath");
API.addEventListener("click", getForecast);

const onClick = function () {
  window.city=this.innerHTML
  setTimeout(()=>{getLocForecast();},500);
}

document.getElementById('1').onclick = onClick;
document.getElementById('2').onclick = onClick;
document.getElementById('3').onclick = onClick;
document.getElementById('4').onclick = onClick;
document.getElementById('5').onclick = onClick;
document.getElementById('6').onclick = onClick;
document.getElementById('7').onclick = onClick;
document.getElementById('8').onclick = onClick;

function getForecast() {
  getLoc();
  setTimeout(() => { getWeather(); }, 500);
}

function getLocForecast() {
  getLoc1()
  setTimeout(() => { getWeather1(); }, 500);
}

async function getLoc1() {
  
  var locationUrl = 'https://api.openweathermap.org/geo/1.0/direct?';
  // var city = document.querySelector('#city').value;
  var keyLoc = 'b7d35f53dfb737a9ac4ff57d775f49a7';
  var location = locationUrl + "q=" + window.city + "&appid=" + keyLoc
  console.log(location)

  await fetch(location)
    .then(response => response.json())
    .then(function (data) {
      window.lat = data[0].lat;
      window.lon = data[0].lon;
      // return lat, lon;
    })
}

async function getLoc() {
  
  var locationUrl = 'https://api.openweathermap.org/geo/1.0/direct?';
  var city = document.querySelector('#city').value;
  var keyLoc = 'b7d35f53dfb737a9ac4ff57d775f49a7';
  var location = locationUrl + "q=" + city + "&appid=" + keyLoc
  console.log(location)

  await fetch(location)
    .then(response => response.json())
    .then(function (data) {
      window.lat = data[0].lat;
      window.lon = data[0].lon;
      // return lat, lon;
    })
}

async function getWeather() {
  var weatherUrl = 'https://api.openweathermap.org/data/3.0/onecall?'
  var city = document.querySelector('#city').value;
  var keyFor = 'b7d35f53dfb737a9ac4ff57d775f49a7';
  // var cnt = 6;
  var units = 'imperial'
  var weather = weatherUrl + "lat=" + window.lat + "&lon=" + window.lon + "&appid=" + keyFor + "&units=" + units + "&exclude=minutely,hourly,alerts";
  var today = dayjs();

  var response = await fetch(weather)
  var json = await response.json()
  console.log(json)
  //forecast current day
  document.getElementById("location").innerHTML = city + " " + today.format('M/DD/YYYY');
  document.getElementById("temp").innerHTML = "Temp: " + json.current.temp + " °F";
  document.getElementById("wind").innerHTML = "Wind: " + json.current.wind_speed + " MPH";
  document.getElementById("humidity").innerHTML = "Humidity: " + json.current.humidity + "%";
  var icon = json.current.weather[0].icon;
  var img = document.querySelector("img")
  img.src = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';

  //forecast day 1
  var d1 = today.add(1, 'day')
  document.getElementById("day1").innerHTML = d1.format('M/DD/YYYY');
  document.getElementById("temp1").innerHTML = "Temp: " + json.daily[0].temp.max + " °F";
  document.getElementById("wind1").innerHTML = "Wind: " + json.daily[0].wind_speed + " MPH";
  document.getElementById("humidity1").innerHTML = "Humidity: " + json.daily[0].humidity + "%";
  // var icon1 = json.daily[0].weather[0].icon;
  // var img1 = document.querySelector("img1")
  // img1.src = 'https://openweathermap.org/img/wn/'+icon1+'@2x.png';

  //forecast day 2
  var d2 = today.add(2, 'day')
  document.getElementById("day2").innerHTML = d2.format('M/DD/YYYY');
  document.getElementById("temp2").innerHTML = "Temp: " + json.daily[1].temp.max + " °F";
  document.getElementById("wind2").innerHTML = "Wind: " + json.daily[1].wind_speed + " MPH";
  document.getElementById("humidity2").innerHTML = "Humidity: " + json.daily[1].humidity + "%";
  // var icon2 = json.daily[1].weather[1].icon;
  // var img2 = document.querySelector("img2")
  // img2.src = 'https://openweathermap.org/img/wn/'+icon2+'@2x.png';

  //forecast day 3
  var d3 = today.add(3, 'day')
  document.getElementById("day3").innerHTML = d3.format('M/DD/YYYY');
  document.getElementById("temp3").innerHTML = "Temp: " + json.daily[2].temp.max + " °F";
  document.getElementById("wind3").innerHTML = "Wind: " + json.daily[2].wind_speed + " MPH";
  document.getElementById("humidity3").innerHTML = "Humidity: " + json.daily[2].humidity + "%";

  //forecast day 4
  var d4 = today.add(4, 'day')
  document.getElementById("day4").innerHTML = d4.format('M/DD/YYYY');
  document.getElementById("temp4").innerHTML = "Temp: " + json.daily[3].temp.max + " °F";
  document.getElementById("wind4").innerHTML = "Wind: " + json.daily[3].wind_speed + " MPH";
  document.getElementById("humidity4").innerHTML = "Humidity: " + json.daily[3].humidity + "%";

  //forecast day 5
  var d5 = today.add(5, 'day')
  document.getElementById("day5").innerHTML = d5.format('M/DD/YYYY');
  document.getElementById("temp5").innerHTML = "Temp: " + json.daily[4].temp.max + " °F";
  document.getElementById("wind5").innerHTML = "Wind: " + json.daily[4].wind_speed + " MPH";
  document.getElementById("humidity5").innerHTML = "Humidity: " + json.daily[4].humidity + "%";

}

async function getWeather1() {
  var weatherUrl = 'https://api.openweathermap.org/data/3.0/onecall?'
  var city = document.querySelector('#city').value;
  var keyFor = 'b7d35f53dfb737a9ac4ff57d775f49a7';
  // var cnt = 6;
  var units = 'imperial'
  var weather = weatherUrl + "lat=" + window.lat + "&lon=" + window.lon + "&appid=" + keyFor + "&units=" + units + "&exclude=minutely,hourly,alerts";
  var today = dayjs();

  var response = await fetch(weather)
  var json = await response.json()
  console.log(json)
  //forecast current day
  document.getElementById("location").innerHTML = window.city + " " + today.format('M/DD/YYYY');
  document.getElementById("temp").innerHTML = "Temp: " + json.current.temp + " °F";
  document.getElementById("wind").innerHTML = "Wind: " + json.current.wind_speed + " MPH";
  document.getElementById("humidity").innerHTML = "Humidity: " + json.current.humidity + "%";
  var icon = json.current.weather[0].icon;
  var img = document.querySelector("img")
  img.src = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';

  //forecast day 1
  var d1 = today.add(1, 'day')
  document.getElementById("day1").innerHTML = d1.format('M/DD/YYYY');
  document.getElementById("temp1").innerHTML = "Temp: " + json.daily[0].temp.max + " °F";
  document.getElementById("wind1").innerHTML = "Wind: " + json.daily[0].wind_speed + " MPH";
  document.getElementById("humidity1").innerHTML = "Humidity: " + json.daily[0].humidity + "%";
  // var icon1 = json.daily[0].weather[0].icon;
  // var img1 = document.querySelector("img1")
  // img1.src = 'https://openweathermap.org/img/wn/'+icon1+'@2x.png';

  //forecast day 2
  var d2 = today.add(2, 'day')
  document.getElementById("day2").innerHTML = d2.format('M/DD/YYYY');
  document.getElementById("temp2").innerHTML = "Temp: " + json.daily[1].temp.max + " °F";
  document.getElementById("wind2").innerHTML = "Wind: " + json.daily[1].wind_speed + " MPH";
  document.getElementById("humidity2").innerHTML = "Humidity: " + json.daily[1].humidity + "%";
  // var icon2 = json.daily[1].weather[1].icon;
  // var img2 = document.querySelector("img2")
  // img2.src = 'https://openweathermap.org/img/wn/'+icon2+'@2x.png';

  //forecast day 3
  var d3 = today.add(3, 'day')
  document.getElementById("day3").innerHTML = d3.format('M/DD/YYYY');
  document.getElementById("temp3").innerHTML = "Temp: " + json.daily[2].temp.max + " °F";
  document.getElementById("wind3").innerHTML = "Wind: " + json.daily[2].wind_speed + " MPH";
  document.getElementById("humidity3").innerHTML = "Humidity: " + json.daily[2].humidity + "%";

  //forecast day 4
  var d4 = today.add(4, 'day')
  document.getElementById("day4").innerHTML = d4.format('M/DD/YYYY');
  document.getElementById("temp4").innerHTML = "Temp: " + json.daily[3].temp.max + " °F";
  document.getElementById("wind4").innerHTML = "Wind: " + json.daily[3].wind_speed + " MPH";
  document.getElementById("humidity4").innerHTML = "Humidity: " + json.daily[3].humidity + "%";

  //forecast day 5
  var d5 = today.add(5, 'day')
  document.getElementById("day5").innerHTML = d5.format('M/DD/YYYY');
  document.getElementById("temp5").innerHTML = "Temp: " + json.daily[4].temp.max + " °F";
  document.getElementById("wind5").innerHTML = "Wind: " + json.daily[4].wind_speed + " MPH";
  document.getElementById("humidity5").innerHTML = "Humidity: " + json.daily[4].humidity + "%";

}