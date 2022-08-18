import beerArray from './beers';

// HTML
let menuDiv = `<div class="info-div">
                    <h1>Menu</h1>
                </div>`;

function buildMenu() {
    let menuObj = document.querySelector('.info-div');

    for(let i = 0; i < beerArray.length; i++) {
        let beerDiv = ` <div class="beer-div">
                            <div>
                                <h2>${beerArray[i].name}</h2>
                                <p>${beerArray[i].description}</p>
                            </div>
                            <img src=${beerArray[i].imgUrl}>                        
                        </div>`;
        
        menuObj.innerHTML += beerDiv;
    }
}

export {menuDiv, buildMenu}