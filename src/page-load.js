import Holishkes from './holishkes.jpeg';

const holishkesPicture = new Image();
holishkesPicture.src = Holishkes;
holishkesPicture.setAttribute('id', 'holishkes');

function addElement(elementType, elementClass, elementID, addToID) {

    let newElement = document.createElement(`${elementType}`);
    newElement.className = `${elementClass}`;
    newElement.setAttribute('id', `${elementID}`);
    let parent = document.getElementById(`${addToID}`);
    parent.appendChild(newElement);

    console.log('addElement ran successfully!');

};

function addText (addToID, text){
    let parent = document.getElementById(`${addToID}`);
    parent.innerHTML = (`${text}`);

    console.log('addText ran successfully!');
}

export default function pageLoad() {
    addElement('div', '', 'header', 'container');
    addElement('p', '', 'headerText', 'header');
    addText('headerText', "Claudia's Nosh!");

    addElement('div', '', 'content', 'container');
    addElement('p', '', 'contentText', 'content');
    addText('contentText', 'Blah blah blah');
    document.getElementById('content').appendChild(holishkesPicture);

    addElement('div', '', 'footer', 'container');
    addElement('p', '', 'footerText', 'footer');
    addText('footerText', 'Made by Impressive Turt');

    console.log('pageLoad ran successfully!')
};

console.log('page-load.js ran successfully!');