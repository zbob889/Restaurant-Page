import "./style.css";
import Holishkes from './holishkes.jpeg';
import pageLoad from './page-load.js';


let container = document.getElementById('container');

const holishkesPicture = new Image();
holishkesPicture.src = Holishkes;

pageLoad();