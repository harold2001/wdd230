const hamButton = document.querySelector('#menu');
const nav = document.querySelector('nav');
const year = new Date().getFullYear();
const lastVisitMessage = getLastVisitMessage();

function getLastVisitMessage() {
  const now = new Date();
  const previousString = localStorage.getItem('lastVisit');
  localStorage.setItem('lastVisit', now.toISOString());

  if (!previousString) {
    return 'Welcome! Let us know if you have any questions';
  }

  const lastVisit = new Date(previousString);
  const timeDiff = now - lastVisit;
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff < 1) {
    return 'Back so soon! Awesome!';
  } else if (daysDiff === 1) {
    return 'You last visited 1 day ago.';
  } else {
    return `You last visited ${daysDiff} days ago.`;
  }
}

document.querySelector(
  '#lastVisitSection'
).innerHTML = `<p><strong>Visit Message:</strong> ${lastVisitMessage}</p>`;
document.querySelector('#year').textContent += year;
document.querySelector(
  '#lastModified'
).textContent = `Last Modification: ${document.lastModified}`;

hamButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamButton.classList.toggle('open');
});
