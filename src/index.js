import './style.css';
import home from './home';
import { menuDiv } from './menu';
import { contactDiv, buildImgs } from './contact';

const content = document.getElementById("content");

// Tab buttons
const homeTab = document.getElementById("home-tab");
const menuTab = document.getElementById("menu-tab");
const contactTab = document.getElementById("contact-tab");

// Home page
function homeRender() {
    // populate html
    content.innerHTML = home;

    // adjust tabs styles
    homeTab.style.borderBottom = "solid 1px rgba(14, 32, 32, 0.85)";
    menuTab.style.borderBottom = "solid 1px #fef807";
    contactTab.style.borderBottom = "solid 1px #fef807";
}

// TODO: Menu page
function menuRender() {
    // populate html
    content.innerHTML = menuDiv;

    // adjust tabs styles
    homeTab.style.borderBottom = "solid 1px #fef807";
    menuTab.style.borderBottom = "solid 1px rgba(14, 32, 32, 0.85)";
    contactTab.style.borderBottom = "solid 1px #fef807";
}

// Contact page
function contactRender() {
    // populate html
    content.innerHTML = contactDiv;
    buildImgs();

    // adjust tabs styles
    homeTab.style.borderBottom = "solid 1px #fef807";
    menuTab.style.borderBottom = "solid 1px #fef807";
    contactTab.style.borderBottom = "solid 1px rgba(14, 32, 32, 0.85)";
}

homeTab.addEventListener('click', homeRender);
menuTab.addEventListener('click', menuRender);
contactTab.addEventListener('click', contactRender);

// Render initial state
// homeRender();

// Testing
contactRender();