import "./style.css";
import addElement from './addElement.js';
import addText from './addText.js';
import pageLoad from './page-load.js';

addElement('div', '', 'header', 'container');
addElement('button', 'button', 'home', 'header');
addText('home', 'Home');
addElement('button', 'button', 'menu', 'header');
addText('menu', 'Menu');
addElement('button', 'button', 'contact', 'header');
addText('contact', 'Contact');

pageLoad();

addElement('div', '', 'footer', 'container');
addElement('p', '', 'footerText', 'footer');
addText('footerText', 'Made by Impressive Turt');