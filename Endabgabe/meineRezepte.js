"use strict";
var meineRezepte;
(function (meineRezepte) {
    let erstellButton = document.getElementById("send-button");
    erstellButton.addEventListener("click", submitToServer);
    let erstellUrl = "https://gisapplication.herokuapp.com/";
    async function submitToServer(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        console.log("Formulardaten " + formData);
        let fetchUrl = erstellUrl + "meineRezepte" + "?" + query.toString();
        let response = await fetch(fetchUrl);
        let responseText = await response.text();
        console.log("Response Text: " + responseText);
        //Antwort auf der Seite ausgeben
        let selectElement = document.querySelector(".ausgabe");
        let paragraph = document.createElement("div");
        paragraph.innerText = responseText;
        selectElement.appendChild(paragraph);
        window.location.href = "meineRezepte.html";
    }
})(meineRezepte || (meineRezepte = {}));
//# sourceMappingURL=meineRezepte.js.map