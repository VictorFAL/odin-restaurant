import lloyd from './imgs/Lloyd.png';
import missionCtrl from './imgs/MissionControl.png';

const contactDiv = `<div class="info-div">
                        <h1>Contact</h1>
                        <div class="cont-div">
                            <div>
                                <h3>Lloyd</h3>
                                <span>Bartender</span><br/>
                                <span>Bar counter</span>
                            </div>
                            <img id="img-lloyd">
                        </div>
                        <div class="cont-div">
                            <div>
                                <h3>Mission Control</h3>
                                <span>Management Contact</span><br/>
                                <span>Standard radio frequency</span>
                            </div>
                            <img id="img-ctrl">
                        </div>
                    </div>`;

function buildImgs() {
    const imgLloyd = document.getElementById("img-lloyd");
    const imgCtrl = document.getElementById("img-ctrl");

    imgLloyd.src = lloyd;
    imgCtrl.src = missionCtrl;
}

export {contactDiv, buildImgs};