export default function addElement(elementType, elementClass, elementID, addToID) {

    let newElement = document.createElement(`${elementType}`);
    newElement.className = `${elementClass}`;
    newElement.setAttribute('id', `${elementID}`);
    let parent = document.getElementById(`${addToID}`);
    parent.appendChild(newElement);

};