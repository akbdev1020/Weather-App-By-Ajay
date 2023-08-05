function asd(data) {
    console.log(data)
} //console.log karega ye function 

asd("hello")

const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("search-btn");
const weatherImg = document.querySelector(".Weather-Img");
const tempreture = document.querySelector(".tempreture");
const discription = document.querySelector(".discription");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-apeed") 

// ==================================================================================

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
})

async function checkWeather(city) {
    const api_key = "d1e067b4aef803c9f96ea5d0648f19f5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weatherData = await fetch(url).then(res => res.json())
    asd(weatherData);

    tempreture.innerHTML= `${Math.round(weatherData.main.temp - 273.15)}°C`
    discription.innerHTML= `${weatherData.weather[0].main}`
    humidity.innerHTML= `${weatherData.main.humidity}%`
    windSpeed.innerHTML= `${weatherData.wind.speed}km/h`

}

