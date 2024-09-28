const lastModified = document.lastModified;
const currentYear = (new Date()).getFullYear();

const yearElement = document.getElementById("currentyear");
yearElement.innerText = currentYear;

const lastModifiedElements = document.getElementsByClassName("last-modified");
if(lastModifiedElements && lastModifiedElements.length >0){
    lastModifiedElements[0].innerText = lastModified;
}

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});