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
  displayLinks(data);
}

function displayMembers(members) {
  const content = members.reduce(
    m => `		<section>
			<img src="https://assets.ldscdn.org/c8/b5/c8b5e860a7edbbef90734c83be366e8d359d2c0b/payson_utah_temple.jpg" alt="Payson Utah Temple" />
			<h3>Payson Utah</h3>
			<p>2015</p>
			<a href="https://www.churchofjesuschrist.org/temples/details/payson-utah-temple?lang=eng" target="_blank">Details</a>
		</section>`
  );
}

getMembers();
