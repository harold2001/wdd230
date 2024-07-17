const currentTemp = document.querySelector('#current-temp');
const currentCity = document.querySelector('#current-city');
const weatherIcon = document.querySelector('#weather-icon');
const url =
  'https://api.openweathermap.org/data/2.5/weather?lat=-12.01&lon=-77.03&appid=f26a1d2c7387a78efdda84903fecbb7f&units=imperial';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F - ${data.weather[0].main}`;
  currentCity.innerHTML = data.name
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
}

apiFetch();
