//Init weather object

const storage = new Storage();
const weatherLocation = storage.getLocationData();

const weather = new Weather(weatherLocation.city);
const ui = new UI();

//Get weather on DOM Load
document.addEventListener("DOMContentLoaded", getWeather);

//Change location event
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  //const state = document.getElementById("state").value;

  weather.changeLocation(city);

  //Set location in LS
  storage.setLocationData(city);
  //Get and display weather again
  getWeather();
  $("#locModal").modal("hide");
});

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results);
      // console.log(results);
    })
    .catch((err) => console.log(err));
}
