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
    console.log(response);
    //alert("Response Text: " + responseText);
    //Antwort auf der Seite ausgeben
    let selectElement = document.querySelector(".ausgabe");
    selectElement.appendChild(document.createTextNode(responseText));
    //selectElement.appendChild(document.createTextNode("\n"));
}
//# sourceMappingURL=anmelden.js.map