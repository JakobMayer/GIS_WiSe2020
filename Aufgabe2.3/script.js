"use strict";
document.querySelector("#Button5").addEventListener("click", deleteLocalStorage);
function deleteLocalStorage() {
    localStorage.clear();
}
var A23;
(function (A23) {
    let s1 = loadRaketeFromString(localStorage.getItem("Spitze"));
    let s2 = loadRaketeFromString(localStorage.getItem("Mitte"));
    let s3 = loadRaketeFromString(localStorage.getItem("Booster"));
    let wholeRocket = [s1, s2, s3];
    async function loadDataFromJSON(_url) {
        let response = await fetch(_url);
        let result = await response.json();
        return result;
    }
    function loadRaketeFromString(_object) {
        let myObj = JSON.parse(_object);
        return myObj;
    }
    // lade die richtigen Bilder auf der richtigen Seite
    let tempString = window.location.pathname.split("/");
    console.log(tempString);
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
                bilder(wholeRocket);
                sendCacheToServer("https://gis-communication.herokuapp.com");
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
            console.log(_info[i]);
            optionImage.src = _info[i].img;
            div.appendChild(optionImage);
            optionImage.addEventListener("click", auswahlZurückgeben);
        }
    }
    // Element auswählen und im Local Storage speichern
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
    async function sendCacheToServer(_url) {
        let query = new URLSearchParams(localStorage);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        let serverMessage = await response.json();
        let serverResponse = document.getElementById("serverResponse");
        let text = document.createElement("p");
        if (serverMessage.message !== undefined) {
            text.innerText = serverMessage.message;
        }
        if (serverMessage.error !== undefined) {
            text.setAttribute("style", "color:red");
            text.innerText = serverMessage.error;
        }
        serverResponse.appendChild(text);
    }
})(A23 || (A23 = {}));
//# sourceMappingURL=script.js.map