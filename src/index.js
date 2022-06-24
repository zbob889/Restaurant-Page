import "./style.css";
import addElement from './addElement.js';
import addText from './addText.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

addElement('div', '', 'header', 'container');
addElement('button', 'button', 'home', 'header');
addText('home', 'Home');
addElement('button', 'button', 'menu', 'header');
addText('menu', 'Menu');
addElement('button', 'button', 'contact', 'header');
addText('contact', 'Contact');

addElement('div', '', 'content', 'container');

addElement('div', '', 'footer', 'container');
addElement('p', '', 'footerText', 'footer');
addText('footerText', 'Made by Impressive Turt');

loadHome();

let homeButton = document.getElementById('home');
let menuButton = document.getElementById('menu');
let contactButton = document.getElementById('contact');

homeButton.addEventListener('click', () => {
    addText('content', '');
    loadHome();
});

menuButton.addEventListener('click', () => {
    addText('content', '');
    loadMenu();
});

contactButton.addEventListener('click', () => {
    addText('content', '');
    loadContact();
});
