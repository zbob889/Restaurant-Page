import addElement from './addElement.js';
import addText from './addText.js';

function createTextElement(text){
    let newElement = document.createElement('p');
    newElement.className = 'menuText';
    let parent = document.getElementById('menuContainer');
    parent.appendChild(newElement);

    newElement.innerHTML = `${text}`
};

export default function loadMenu(){
    addElement('div', 'card', 'menuContainer', 'content');

    addElement('p', '', 'menuTitle', 'menuContainer');
    addText('menuTitle', 'Menu');

    addElement('div', '', '', 'menuContainer');
    addElement('div', '', '', 'menuContainer');

    createTextElement("Braune Bohen met Rijs");
    createTextElement("€5");

    createTextElement("Saoto");
    createTextElement("€8");

    createTextElement("Three Pasteitjes");
    createTextElement("€5");

    createTextElement("Broodje Bacalao");
    createTextElement("€5");

    createTextElement("Lokshen Kugel");
    createTextElement("€5");

    createTextElement("Chicken Soup with Kneidlach");
    createTextElement("€8");

    createTextElement("Holishkes");
    createTextElement("€8");

    createTextElement("Cholent");
    createTextElement("€8");
};