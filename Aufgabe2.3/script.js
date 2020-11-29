"use strict";
/*  --------  Aufgabe 1 ----------
let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");
interface Rechteck {
    x: number;
    y: number;
    höhe: number;
    breite: number;
}

function createRect() {
    let x = (Math.random() * (400 - 0)) + 0;
    let y = (Math.random() * (400 - 150)) + 150;
    let höhe = (Math.random() * (100 - 50)) + 50;
    let breite = (Math.random() * (100 - 50)) + 50;
    let maße: number[] = [x, y, höhe, breite];
    return maße;
}

function drawRect(array: number[]) {
    context.strokeRect(array[0], array[1], array[2], array[3]);
}

let rechteckArray = [createRect(), createRect(), createRect()];

for(let i: number =0; i<rechteckArray.length; i++){
    drawRect(rechteckArray[i]);
}


// Eventlistener
document.querySelector('#Button1').addEventListener('click', addRectangle);
document.querySelector('#Button2').addEventListener('click', function(){location.reload()});

function addRectangle(){
    rechteckArray.push(createRect());
    for(let i=0; i<rechteckArray.length; i++){
        drawRect(rechteckArray[i]);
    }
}
*/
var A23;
(function (A23) {
    /*
    interface Rakete {
        AusgewählteSpitze?: Raketenteil;
        AusgewählteMitte?: Raketenteil;
        AusgewählterBooster1?: Raketenteil;
    }
    */
    let tempString = window.location.pathname.split("/");
    function open() {
        switch (tempString[tempString.length - 1]) {
            case "spitzen.html":
                bilder(A23.ganzeRakete.spitzeArray);
                break;
            case "mitte.html":
                bilder(A23.ganzeRakete.mitteArray);
                break;
            case "booster.html":
                bilder(A23.ganzeRakete.boosterArray);
                break;
        }
    }
    open();
    function bilder(_info) {
        let selectElement = document.getElementsByClassName("container")[0];
        for (let i = 0; i < _info.length; i++) {
            let div = document.createElement("div");
            selectElement.appendChild(div);
            let optionImage = document.createElement("img");
            optionImage.src = _info[i].img;
            div.appendChild(optionImage);
            optionImage.addEventListener("click", auswahlZurückgeben);
        }
    }
    function auswahlZurückgeben(_event) {
        let target = _event.currentTarget;
        let tempString = target.src.split("/");
        console.log("Du hast auf " + tempString[tempString.length - 1] + " geklickt");
    }
})(A23 || (A23 = {}));
//# sourceMappingURL=script.js.map