const apiKey = 'e02de72de9f47a72c78be020a76ba663';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const citySelect = document.getElementById('city-select');
const btnUpdate = document.getElementById('btn-update');
const resultDiv = document.getElementById('result');
const cityDiv = document.getElementById('city');
const temperatureDiv = document.getElementById('temperature');
const weatherDescriptionDiv = document.getElementById('weather-description');
const rainChanceDiv = document.getElementById('rain-chance');

btnUpdate.addEventListener('click', () => {
  const city = citySelect.value;
  getWeather(city);
});

function getWeather(city) {
  const url = `${baseUrl}?q=${city}&units=metric&appid=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { name: cityName, main: { temp: temperature }, weather: [{ description }], rain } = data;
      const rainChance = rain ? `${rain['1h']}mm` : '0mm';
      cityDiv.textContent = cityName;
      temperatureDiv.textContent = `${temperature}°C`;
      
      rainChanceDiv.textContent = `Chance de chuva: ${rainChance}`;
      resultDiv.style.display = 'block';
    })
    .catch(error => console.error(error));
}

// Iniciar com cidade padrão
getWeather('Sao Paulo');
