const lastModified = document.lastModified;
const currentYear = (new Date()).getFullYear();

const yearElement = document.getElementById("current-year");
yearElement.innerText = currentYear;

const lastModifiedElements = document.getElementsByClassName("last-modified");
if(lastModifiedElements && lastModifiedElements.length >0){
    lastModifiedElements[0].innerText = lastModified;
}

function updateWeather() {
    let temperature = document.getElementById("weather-temperature");
    let conditions = document.getElementById("weather-conditions");
    let wind =  document.getElementById("weather-wind");
    let heat = document.getElementById("weather-heat");
    let windChill = document.getElementById("weather-wind-chill");
    let humidity = document.getElementById("weather-humidity");
    temperature.innerHTML = "85";
    conditions.innerHTML = "Sunny";
    humidity.innerHTML = "40";
    wind.innerHTML = "5";
    heat.innerHTML = getHeatIndex(85, 40);
    windChill.innerHTML = getWindChill(85, 5);

}

function getWindChill(temp, windSpeed) {
    if (temp > 50 || windSpeed <= 3){
        return "N/A";
    } 
    
    
    return Math.round(calculateWindChill(temp, windSpeed));
}
function calculateWindChill(temp, windSpeed) {
    const baseTemp = 35.74;
    const tempFactor = 0.6215 * temp;
    const windSpeedFactor = 35.75 * Math.pow(windSpeed, 0.16);
    const combinedFactor = 0.4275 * temp * Math.pow(windSpeed, 0.16);
    
    const windChill = baseTemp + tempFactor - windSpeedFactor + combinedFactor;
    return windChill;
}
function getHeatIndex(temp, humidity) {
    if (temp < 80 || humidity < 40) {
        return "N/A";
    }
    const heatIndex = calculateHeatIndex(temp, humidity);
    return Math.round(heatIndex);
}

function calculateHeatIndex(temp, humidity) {
    const T = temp;
    const R = humidity;
    const heatIndex = -42.379 + 2.04901523 * T + 10.14333127 * R - 0.22475541 * T * R 
                      - 0.00683783 * T * T - 0.05481717 * R * R 
                      + 0.00122874 * T * T * R + 0.00085282 * T * R * R 
                      - 0.00000199 * T * T * R * R;
    return heatIndex;
}

updateWeather();