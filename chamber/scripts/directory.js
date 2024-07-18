const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const display = document.querySelector('article');
const baseURL = 'https://harold2001.github.io/wdd230/';
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
  console.log(members);
  const content = members.reduce(
    (acc, m) =>
      (acc += `<section>
        <img src="${m.logo}" alt="${m.businessName}" />
        <h3>${m.businessName}</h3>
        <p>${m.phone}</p>
        <a href="${m.website}" target="_blank">Page</a>
      </section>`),
    ''
  );

  directoryArticle.innerHTML = content;
}

getMembers();
