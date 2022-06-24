import addElement from './addElement.js';
import addText from './addText.js';

export default function loadContact(){

    addElement('div', 'card', 'contactContent', 'content');

    addElement('p', '', 'contactTitle', 'contactContent');
    addText('contactTitle', "Contact Information");

    addElement('div', '', 'contactDiv', 'contactContent')


    addElement('p', 'contactText', 'location', 'contactDiv');
    addText('location', "<span class='bold'>Location:</span>  Velperweg 48, Arnhem");

    addElement('p', 'contactText', 'phone', 'contactDiv');
    addText('phone', "<span class='bold'>Phone Number:</span>  55 55 55 55 55");

};