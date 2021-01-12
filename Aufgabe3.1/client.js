"use strict";
let registerForm = document.getElementById("register-form");
let registerButton = document.getElementById("send-button");
registerButton.addEventListener("click", submitToServer);
let url = "https://gisapplication.herokuapp.com";
async function submitToServer(_event) {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    console.log(url);
    let response = await fetch(url);
    let responseText = await response.text();
    console.log(response);
    alert("Antwort: " + responseText);
}
//# sourceMappingURL=client.js.map