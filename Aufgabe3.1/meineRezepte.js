"use strict";
var meineRezepte;
(function (meineRezepte) {
    let url = "https://gisapplication.herokuapp.com/";
    let sendButton = document.getElementById("submit-button");
    sendButton.addEventListener("click", submitToServer);
    /*
    let bearbeiten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bearbeiten-button");
    erstellen.addEventListener("click", handleBearbeiten);
    
    let löschen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("löschen-button");
    erstellen.addEventListener("click", handleLöschen);
    */
    async function submitToServer(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        let fetchUrl = url + "meineRezepte" + "?" + query.toString();
        let response = await fetch(fetchUrl);
        let responseText = await response.text();
        console.log("Response Text: " + responseText);
        let selectElement = document.querySelector(".ausgabe2");
        let paragraph = document.createElement("div");
        paragraph.innerText = responseText;
        selectElement.appendChild(paragraph);
    }
    /*
    async function handleBearbeiten(_event: Event): Promise<void> {
        
    }

    async function handleLöschen(_event: Event): Promise<void> {
        
    }
    */
    //Idee um meine Rezepte auszugeben: username in Local Storage speichern und beim erstellen eines neuen Rezepts den username
    // mit dem Rezept in der Datenbank speichern. ÜBer eine Schleife in der Datenbank nach dem Namen des users suchen und alle Rezepte
    // anzeigen die von dem Nutzer kommen.
})(meineRezepte || (meineRezepte = {}));
//# sourceMappingURL=meineRezepte.js.map