import oilyImg from './imgs/OilyOaf.png';
import glyphidImg from './imgs/GlyphidSlammer.png';
import leafImg from './imgs/LeafLover.png';

const createBeer = (name, imgUrl, description) => {
    return {name, imgUrl, description};
}

const oilyOaf = createBeer('Oily Oaf', oilyImg,
    `A classic. While one of the lighter drinks available, 
    the rich, buttery aftertaste coupled with the low price 
    tag means the Oaf is here to stay.`);

const glyphidSlammer = createBeer('Glyphid Slammer', glyphidImg,
    `An adventurous mix of a cheap, 
    powerful ale with an equally cheap, powerful energy drink. 
    The result is almost, but not quite, entirely undrinkable. 
    But it sure does put a spring in your step.`);

const leafLover = createBeer('Leaf Lover', leafImg,
    `The Leaf Lover is on this chart entirely to please Management. 
    It'll kill your buzz faster than a pay cut, 
    and leave you with the same empty feeling in your gut. 
    Still, it can be handy on Inspection Day - 
    just don't let anyone know you had one.`);

const beerArray = [oilyOaf, glyphidSlammer, leafLover];


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