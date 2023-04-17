



var responseText = document.getElementById('response-text');
var jsonData
console.log(location)

var API = document.getElementById("weath");
var Loc = document.getElementById("loc");
var Save = document.getElementById("save");
Save.addEventListener("click", getLoc);
API.addEventListener("click", getWeather);

// function displayMessage(){
//     document.getElementById("msg").innerHTML = jsonData;
// }   

var tableBody = document.getElementById('repo-table');

function getLoc(city) {
  var locationUrl = 'https://api.openweathermap.org/geo/1.0/direct?';
  var city = document.querySelector('#city').value;
  var key = 'b7d35f53dfb737a9ac4ff57d775f49a7';
  var location = locationUrl+"q="+city+"&appid="+key
  console.log(location)
  fetch(location)
    .then(response => response.json())
    .then(function (data){
      window.lat = data[0].lat;
      window.lon = data[0].lon;
      // return lat, lon;
    })
    }

  
// function getForecast(){
// setTimeout(()=>{
async function getWeather() {
  // getLoc(city);
  var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?'
  var key = 'b7d35f53dfb737a9ac4ff57d775f49a7';
  var cnt = 6;
  var units = 'imperial'
  var weather = weatherUrl+"lat="+window.lat+"&lon="+window.lon+"&appid="+key+"&cnt="+cnt+"&units="+units;
 console.log(weather)

  let response = await fetch(weather)
  let json = await response.json()
  console.log(json)
  console.log(json.list[0].dt_txt)
  date = json.list[0].dt_txt
  document.getElementById("location").innerHTML = json.city.name;
  
  document.getElementById("current").innerHTML = dayjs(json.list[0].dt_txt).format('M/DD/YYYY');
  document.getElementById("temp").innerHTML = "Temp: " + json.list[0].main.temp + " °F";
  document.getElementById("wind").innerHTML = "Wind: " + json.list[0].wind.speed + " MPH";
  document.getElementById("humidity").innerHTML = "Humidity: " + json.list[0].main.humidity +"%";
  // fetch(weather)
  // .then(response => response.json())
  // console.log(response)
  // .then(function (data){
    // window.date = data.list[0].dt_txt;
    // console.log(data.list[0])
    // console.log(data.list[0].dt_txt)
    // console.log(data.list[0].main.temp)
    // console.log(data.list[0].main.humidity)
    // console.log(data.list[0].wind.speed)
    // console.log(data)
    // return window.date;
// })


}
var json
console.log(json);
// document.getElementById("current").innerHTML = date;
// }
// ,3000);
// }

  //  .then(function (response) {
  //     return response.json();
  //   }
    /*
    .then(function (data) {
      console.log(data)

      
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        // Setting the text of link and the href of the link
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
        
      }
     }*/
    //  );


    