import addElement from './addElement.js';
import addText from './addText.js';

export default function loadHome(){
    addElement('div', '', 'homeContainer', 'content');
    addElement('p', '', 'restaurantName', 'homeContainer');
    addText('restaurantName', "Claudia's Nosh");
    addElement('p', '', 'restaurantInfo', 'homeContainer');
    addText('restaurantInfo', "Claudia's Nosh is a Surinamese-Ashkenazi restaraunt.  A place for kindlech and Suriname-mofo alike!  Whether you want your Bubbe's kugel or your Granmama's braune bohnen, we've got it!");
};