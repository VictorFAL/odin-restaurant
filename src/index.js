import './style.css';
import home from './home';

const content = document.getElementById("content");

// TODO: Tab buttons

// Home page
function homeRender() {
    content.innerHTML = home;
}

// TODO: Menu page

// TODO: Contact page

// Test
homeRender();