const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const darkButton = document.querySelector('#darkBtn');
const main = document.querySelector('main');
const nav = document.querySelector('nav');
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});

darkButton.addEventListener('click', () => {
  main.classList.toggle('dark');
  nav.classList.toggle('dark');
});


