const currentTemp = document.querySelector('#current-temp');
const currentWeather = document.querySelector('#current-weather');
const currentHumidity = document.querySelector('#current-humidity');
const currentWind = document.querySelector('#current-wind');
const currentCity = document.querySelector('#current-city');
const weatherIcon = document.querySelector('#weather-icon');
const latitude = '-12.01';
const longitude = '-77.03';
const apiID = 'f26a1d2c7387a78efdda84903fecbb7f';
// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiID}&units=imperial`;
// const url2 = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=3&appid=${apiID}&units=imperial`;

const weathers = [
  {
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiID}&units=imperial`,
    displayFn: displayCurrent,
  },
  // {
  //   url: `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiID}&units=imperial`,
  //   displayFn: displayForecast,
  // },
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
  console.log(data);
  // currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
  // currentWeather.textContent = data.weather[0].main;
  // currentHumidity.textContent = `${data.main.humidity}%`;
  // currentWind.textContent = data.wind.speed;

  // const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  // let desc = data.weather[0].description;
  // weatherIcon.setAttribute('src', iconsrc);
  // weatherIcon.setAttribute('alt', desc);
}

// apiFetch();
