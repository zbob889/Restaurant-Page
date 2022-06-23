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

};

function addText (addToID, text){
    let parent = document.getElementById(`${addToID}`);
    parent.innerHTML = (`${text}`);
}

export default function pageLoad() {
    addElement('div', '', 'content', 'container');
    addElement('p', '', 'contentText', 'content');
    addText('contentText', 'Blah blah blah');
    document.getElementById('content').appendChild(holishkesPicture);
};