const apiKey = "71474674ffe0bcf299dd06972fe3e5ee";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {

    const response = await fetch(apiUrl + 'imperial' + `&q=` + city + `&appid=${apiKey}`);
    var data = await response.json();
    const weatherTab = document.querySelector('.weather');
    const infoTab = document.querySelector('.info');
    const weatherIcon = document.querySelector('.weather-icon');
    const errorTab = document.querySelector('.error');

    if (response.status == 404) {
        weatherTab.style.display = "none"
        infoTab.style.display = 'none';
        errorTab.style.display = 'block'
    }

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `°F`;
    document.querySelector('.humidity').innerHTML = data.main.humidity + `%`;
    document.querySelector('.wind').innerHTML = data.wind.speed + `mph`;

    if(data.weather[0].main === "Clouds") {
        weatherIcon.src = "img/clouds.png"
    } 
    else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "img/clear.png"
    }
    else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "img/rain.png"
    } 
    else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "img/drizzle.png"
    }
    else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "img/mist.png"
    }

    if(searchBox != "") {
        weatherTab.style.display = "block";
        infoTab.style.display = 'none';
        errorTab.style.display = 'none'
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

checkWeather();