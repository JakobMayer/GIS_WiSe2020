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
document.querySelector("#Button5").addEventListener("click", deleteLocalStorage);
function deleteLocalStorage() {
    localStorage.clear();
}
var A23;
(function (A23) {
    let s1 = loadRaketeFromString(localStorage.getItem("Spitze"));
    let s2 = loadRaketeFromString(localStorage.getItem("Mitte"));
    let s3 = loadRaketeFromString(localStorage.getItem("Booster"));
    let fullRocket = [s1, s2, s3];
    async function loadDataFromJSON(_url) {
        let response = await fetch(_url);
        let result = await response.json();
        return result;
    }
    function loadRaketeFromString(_object) {
        let myObj = JSON.parse(_object);
        return myObj;
    }
    let tempString = window.location.pathname.split("/");
    async function open() {
        let result = await loadDataFromJSON("data.json");
        switch (tempString[tempString.length - 1]) {
            case "spitzen.html":
                bilder(result.spitzeArray);
                break;
            case "mitte.html":
                bilder(result.mitteArray);
                break;
            case "booster.html":
                bilder(result.boosterArray);
                break;
            case "auswahl.html":
                bilder(fullRocket);
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
        let temporString = target.src.split("/");
        switch (tempString[tempString.length - 1]) {
            case "spitzen.html":
                let r1 = { name: "Ausgewählte Spitze", img: "Bilder/" + temporString[temporString.length - 1] };
                let myR1 = JSON.stringify(r1);
                localStorage.setItem("Spitze", myR1);
                break;
            case "mitte.html":
                let r2 = { name: "Ausgewählte Mitte", img: "Bilder/" + temporString[temporString.length - 1] };
                let myR2 = JSON.stringify(r2);
                localStorage.setItem("Mitte", myR2);
                break;
            case "booster.html":
                let r3 = { name: "Ausgewählter Booster", img: "Bilder/" + temporString[temporString.length - 1] };
                let myR3 = JSON.stringify(r3);
                localStorage.setItem("Booster", myR3);
                break;
        }
    }
})(A23 || (A23 = {}));
//# sourceMappingURL=script.js.map