const currentTemp = document.querySelector('#current-temp');
const currentWeather = document.querySelector('#current-weather');
const currentHumidity = document.querySelector('#current-humidity');
const currentWind = document.querySelector('#current-wind');
const currentCity = document.querySelector('#current-city');
const weatherIcon = document.querySelector('#weather-icon');
const weatherForecast = document.querySelector('#weatherForecast');
const latitude = '-12.01';
const longitude = '-77.03';
const apiID = 'f26a1d2c7387a78efdda84903fecbb7f';

const weathers = [
  {
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiID}&units=imperial`,
    displayFn: displayCurrent,
  },
  {
    url: `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiID}&units=imperial`,
    displayFn: displayForecast,
  },
];

for (const weather of weathers) {
  apiFetch(weather.url, weather.displayFn);
}

async function apiFetch(url, displayFn) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayFn(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayCurrent(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
  currentWeather.textContent = data.weather[0].main;
  currentHumidity.textContent = `${data.main.humidity}%`;
  currentWind.textContent = data.wind.speed;

  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
}

function displayForecast(data) {
  const { list } = data;
  const today = new Date().getDate();

  const days = {};
  for (const forecast of list) {
    const fecha = new Date(forecast.dt_txt);
    const day = fecha.getDate();

    if (day == today || day >= today + 4) continue;

    const max = forecast.main.temp_max;
    const min = forecast.main.temp_min;

    if (!days.hasOwnProperty(day)) {
      days[day] = {
        tempMax: max,
        tempMin: min,
        times: 1,
        icon: forecast.weather[0].icon,
        dt_txt: forecast.dt_txt,
        weather: forecast.weather[0].main,
      };
    } else {
      days[day].tempMax += max;
      days[day].tempMin += min;
      days[day].times += 1;
    }
  }

  for (const key in days) {
    const forecast = days[key];
    const maxAverage = forecast.tempMax / forecast.times;
    const minAverage = forecast.tempMin / forecast.times;
    const date = new Date(forecast.dt_txt);
    weatherForecast.innerHTML += `
    <div class="weatherCard">
      <span>${date.toLocaleDateString()}</span>
      <img src="https://openweathermap.org/img/w/${
        forecast.icon
      }.png" alt="Weather image">
      <p>${data.city.name}</p>
      <p><strong>${forecast.weather}</strong></p>
      <p>Max:</p>
      <p>${maxAverage.toFixed(1)}</p>
      <p>Min:</p>
      <p>${minAverage.toFixed(1)}</p>
    </div>
    `;
  }
}

// apiFetch();
