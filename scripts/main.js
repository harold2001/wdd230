const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const darkButton = document.querySelector('#darkBtn');
const main = document.querySelector('main');
const nav = document.querySelector('nav');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});

darkButton.addEventListener('click', () => {
  main.classList.toggle('dark');
  nav.classList.toggle('dark');
});
