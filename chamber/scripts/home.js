const spotlightsContainer = document.querySelector('#spotlightsContainer');
const eventsCloseBtn = document.querySelector('#eventsClose');
const eventsSection = document.querySelector('#eventsSection');
const weatherSection = document.querySelector('#weatherSection');
const containerForecast = document.querySelector('#weatherForecast');
const btnShowForecast = document.querySelector('#btnShowForecast');
const today = new Date().getDay();
const bannerDays = [1, 2, 3];
const membersURL =
  'https://harold2001.github.io/wdd230/chamber/data/members.json';

async function getMembers() {
  const response = await fetch(membersURL);
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  const silverGoldMembers = members.filter(
    m => m.status === 'gold' || m.status === 'silver'
  );
  const randomMembers = getRandomElements(silverGoldMembers, 3);
  const content = randomMembers.reduce(
    (acc, m) =>
      (acc += `
          <section class="spotlightsCard">
            <img src="${m.logo}" alt="${m.businessName} logo" >
            <p>${m.address}</p>
            <p>${m.phone}</p>
            <a href="${m.website}" target="_blank">${m.website}</a>
          </section>`),
    ''
  );

  spotlightsContainer.innerHTML += content;
}

function getRandomElements(arr, numElements) {
  return arr
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0, numElements);
}

eventsCloseBtn.addEventListener('click', () => {
  eventsSection.remove();
  weatherSection.style.gridColumn = '1 / 5';
  containerForecast.style.width = 'auto';
});

btnShowForecast.addEventListener('click', () => {
  weatherSection.classList.toggle('active');
  btnShowForecast.textContent = weatherSection.classList.contains('active')
    ? 'Hide forecast'
    : 'Show forecast';
});

if (!bannerDays.includes(today)) {
  eventsSection.remove();
  weatherSection.style.gridColumn = '1 / 5';
  containerForecast.style.width = 'auto';
}

getMembers();
