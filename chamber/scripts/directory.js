const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const display = document.querySelector('article');
const membersURL =
  'https://harold2001.github.io/wdd230/chamber/data/members.json';
const directoryArticle = document.querySelector('#directoryArticle');

gridbutton.addEventListener('click', () => {
  display.classList.add('grid');
  display.classList.remove('list');
});

listbutton.addEventListener('click', showList);

function showList() {
  display.classList.add('list');
  display.classList.remove('grid');
}

async function getMembers() {
  const response = await fetch(membersURL);
  const data = await response.json();
  displayMembers(data);
}

function displayMembers(members) {
  const content = members.reduce(
    (acc, m) =>
      (acc += `<section>
        <img src="${m.logo}" alt="${m.businessName}" />
        <h3>${m.businessName}</h3>
        <p>${m.address}</p>
        <p>${m.phone}</p>
        <a href="${m.website}" target="_blank">${m.website}</a>
      </section>`),
    ''
  );

  directoryArticle.innerHTML += content;
}

getMembers();
