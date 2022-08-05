import './style.css';
// import Background from './barBackground.png';

const content = document.getElementById("content");

// TODO: Add tab buttons

// TODO: Home page
function home() {
    const homeDiv = document.createElement('div');

    homeDiv.innerHTML = `   <h1>The Abyss Bar</h1>
                            <div>
                                <h2>Open 24/7</h2>
                            </div>
                            <div>
                                <h2>Location</h2>
                                <p>Hoxxes IV, Space Rig 17</p>
                            </div>`;

    homeDiv.classList.add("info-div");
    
    return homeDiv;
}

// TODO: Menu page

// TODO: Contact page

// Test
content.appendChild(home());