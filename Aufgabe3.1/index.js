"use strict";
var registrieren;
(function (registrieren) {
    let anmeldeButton = document.getElementById("send-button");
    anmeldeButton.addEventListener("click", submitToServer);
    let registerUrl = "https://gisapplication.herokuapp.com/";
    //let registerUrl: string = "http://localhost:8100/";
    async function submitToServer(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let fetchUrl = registerUrl + "index" + "?" + query.toString();
        let response = await fetch(fetchUrl);
        let responseText = await response.text();
        console.log("Response Text: " + responseText);
        //Antwort auf der Seite ausgeben
        let selectElement = document.querySelector(".ausgabe");
        let paragraph = document.createElement("div");
        paragraph.innerText = responseText;
        selectElement.appendChild(paragraph);
        // Wenn registriert dann weiter zu anmelden
        if (responseText == "Neuer Account erstellt") {
            window.location.href = "anmelden.html";
        }
    }
})(registrieren || (registrieren = {}));
//# sourceMappingURL=index.js.map