export default function addText (addToID, text){
    let parent = document.getElementById(`${addToID}`);
    parent.innerHTML = (`${text}`);
};