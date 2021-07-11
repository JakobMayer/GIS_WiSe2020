"use strict";
let anmeldeForm = document.getElementById("register-form");
let anmeldeButton = document.getElementById("send-button");
anmeldeButton.addEventListener("click", submitToServer);
let anmeldeUrl = "https://gisapplication.herokuapp.com/";
//let anmeldeUrl: string = "http://localhost:8100/";
async function submitToServer(_event) {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    let fetchUrl = anmeldeUrl + "einloggen" + "?" + query.toString();
    //console.log(url);
    let response = await fetch(fetchUrl);
    let responseText = await response.text();
    let userName = document.getElementById("userName").value;
    localStorage.clear();
    localStorage.setItem("username", userName);
    //Antwort auf der Seite ausgeben
    let selectElement = document.querySelector(".ausgabe");
    let paragraph = document.createElement("div");
    paragraph.innerText = responseText;
    selectElement.appendChild(paragraph);
    if (responseText == "angemeldet") {
        window.location.href = "anzeige.html";
        localStorage.clear();
        //localStorage.setItem("username", username);
    }
}
//# sourceMappingURL=anmelden.js.map