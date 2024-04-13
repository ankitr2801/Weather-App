const SearchInput = document.getElementById('SearchInput')
const Serachbtn = document.getElementById('Serachbtn')
const WeatherImage = document.getElementById('WeatherImage')
const temprature = document.querySelector('.weather-temp')
const description = document.querySelector('.description')
const humidity = document.getElementById('humidity')
const WindSpeed= document.getElementById('wind-speed')
const locationNotFound= document.getElementById('location-not-found')
const weatherbody= document.getElementById('weather-body')
const Weatherdetails= document.getElementById('Weather-details')

async function checkWeather(city) {

      const apiKey = '3da145cca9a15192776a2c8917ee1949';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      const weatherData = await fetch(`${apiUrl}`).then(response => response.json());
      console.log(weatherData);

      temprature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
      description.innerHTML = `${ weatherData.weather[0].description }`;
      WindSpeed.innerHTML = `${weatherData.wind.speed}km/H`;
      humidity.innerHTML = `${weatherData.main.humidity}%`;


      if (weatherData.cod === "404") {
            locationNotFound.style.display = "flex";
            weatherbody.style.display = "none"
            Weatherdetails.style.display = "none"
            return;   
      } else {
            locationNotFound.style.display = "none";
            weatherbody.style.display = "flex"
            Weatherdetails.style.display = "flex"
      }
    
      switch (weatherData.weather[0].main) {
           
            case 'Cloud':
                  WeatherImage.src = "Assets/cloud.png";
                  break;
            case 'Rain':
                  WeatherImage.src = "Assets/rain.jpg";
                  break;
            case 'Mist':
                  WeatherImage.src = "Assets/mist.png";
                  break;
            case 'Snow':
                  WeatherImage.src = "Assets/snow.jpg";
                  break;
            case 'Clear':
                  WeatherImage.src = "Assets/clear.png";
                  break;
      }
      
      
}
Serachbtn.addEventListener('click', ()=> {
      const inputdata = SearchInput.value
      // console.log(inputdata);
      checkWeather(inputdata)
})


    