"use strict";
let anmeldeForm = document.getElementById("register-form");
let anmeldeButton = document.getElementById("send-button");
anmeldeButton.addEventListener("click", submitToServer);
//let url: string = "https://gisapplication.herokuapp.com/";
let anmeldeUrl = "http://localhost:8100/";
async function submitToServer(_event) {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    anmeldeUrl = anmeldeUrl + "einloggen" + "?" + query.toString();
    //console.log(url);
    let response = await fetch(anmeldeUrl);
    let responseText = await response.text();
    console.log(response);
    //alert("Response Text: " + responseText);
    //Antwort auf der Seite ausgeben
    let selectElement = document.querySelector(".ausgabe");
    selectElement.appendChild(document.createTextNode(responseText));
}
//# sourceMappingURL=anmelden.js.map