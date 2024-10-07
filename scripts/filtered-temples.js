const lastModified = document.lastModified;
const currentYear = (new Date()).getFullYear();

const yearElement = document.getElementById("currentyear");
yearElement.innerText = currentYear;

const lastModifiedElements = document.getElementsByClassName("last-modified");
if (lastModifiedElements && lastModifiedElements.length > 0) {
	lastModifiedElements[0].innerText = lastModified;
}

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

updateTemples();

// Select all radio inputs with the name "filter"
const filterRadios = document.querySelectorAll('input[name="filter"]');

// Add an event listener to each radio button for the "change" event
filterRadios.forEach(radio => {
	radio.addEventListener('change', updateTemples);
});

function updateTemples() {
	// could have used the event variable but I wanted to call this on page load.
	const mainElement = document.querySelector('main');
	mainElement.innerHTML = '';
	const activeFilter = document.querySelector('input[name="filter"]:checked').value;
	let filteredTemples = [];
	switch (activeFilter) {
		case 'all':
			filteredTemples = temples;
			break;
		case 'old':
			filteredTemples = temples.filter(temple => {
				// Extract the year from the "dedicated" field
				const year = parseInt(temple.dedicated.split(',')[0]);
				return year <= 1900;
			});
			break;
		case 'new':
			filteredTemples = temples.filter(temple => {
				// Extract the year from the "dedicated" field
				const year = parseInt(temple.dedicated.split(',')[0]);
				return year >= 2000;
			});
			break;
		case 'large':
			filteredTemples = temples.filter(temple => temple.area >= 90000)
			break;
		case 'small':
			filteredTemples = temples.filter(temple => temple.area <= 10000)
			break;
	}
	// Sort temples
	filteredTemples.sort((a, b) => a.templeName.localeCompare(b.templeName));
	// Display temples
	filteredTemples.forEach(temple => {
		const card = createCard(temple);
		mainElement.appendChild(card);
		void card.offsetWidth;
		card.classList.add('visible');
	});
}

function createElement(tag, htmlContent = '', className = '', attributes = {}) {
	const element = document.createElement(tag);
	if (htmlContent) element.innerHTML = htmlContent;
	if (className) element.classList.add(className);
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
	return element;
}
function createCard(temple) {
	const card = createElement('div', '', 'temple-card');
	const templeName = createElement('h2', temple.templeName);
	const templeLocation = createElement('p', `<span class="label">Location: </span>${temple.location}`);
	const dedicated = createElement('p', `<span class="label">Dedicated:  </span>${temple.dedicated}`);
	const area = createElement('p', `<span class="label">Area:  </span>${temple.area} sq ft`);
	const image = createElement('img', '', '', { src: temple.imageUrl, alt: temple.name, loading: 'lazy' });

	card.appendChild(templeName);
	card.appendChild(templeLocation);
	card.appendChild(dedicated);
	card.appendChild(area);
	card.appendChild(image);
	return card;
}