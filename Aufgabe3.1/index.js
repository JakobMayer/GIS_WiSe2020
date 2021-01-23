"use strict";
var registrieren;
(function (registrieren) {
    let registerForm = document.getElementById("register-form");
    let anmeldeButton = document.getElementById("send-button");
    anmeldeButton.addEventListener("click", submitToServer);
    let registerUrl = "https://gisapplication.herokuapp.com/";
    //let registerUrl: string = "http://localhost:8100/";
    async function submitToServer(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let fetchUrl = registerUrl + "index" + "?" + query.toString();
        //console.log(url);
        let response = await fetch(fetchUrl);
        let responseText = await response.text();
        //console.log(response);
        //console.log("Response Text: " + responseText);
        //Antwort auf der Seite ausgeben
        let selectElement = document.querySelector(".ausgabe");
        selectElement.appendChild(document.createTextNode(responseText));
    }
})(registrieren || (registrieren = {}));
//# sourceMappingURL=index.js.map