"use strict";
var Endabgabe;
(function (Endabgabe) {
    let erstellen = document.getElementById("submit");
    erstellen.addEventListener("click", submitToServer);
    console.log("SubmitToServer wird angefangen");
    /*
    let bearbeiten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bearbeiten-button");
    erstellen.addEventListener("click", handleBearbeiten);
    
    let löschen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("löschen-button");
    erstellen.addEventListener("click", handleLöschen);
    */
    let url = "https://gisapplication.herokuapp.com/";
    async function submitToServer(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        console.log("Formulardaten " + formData);
        let fetchUrl = url + "meineRezepte" + "?" + query.toString();
        let response = await fetch(fetchUrl);
        let responseText = await response.text();
        console.log("Response Text: " + responseText);
        //Antwort auf der Seite ausgeben
        let selectElement = document.querySelector(".ausgabe");
        let paragraph = document.createElement("div");
        paragraph.innerText = responseText;
        selectElement.appendChild(paragraph);
        //window.location.href = "meineRezepte.html";
    }
    /*
    async function handleBearbeiten(_event: Event): Promise<void> {
        
    }

    async function handleLöschen(_event: Event): Promise<void> {
        
    }
    */
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=meineRezepte.js.map