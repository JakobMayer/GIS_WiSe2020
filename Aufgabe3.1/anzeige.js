"use strict";
var anzeigen;
(function (anzeigen) {
    let anzeigeButton = document.getElementById("anzeige-button");
    anzeigeButton.addEventListener("click", accountsAnzeigen);
    //let anzeigeUrl: string = "https://gisapplication.herokuapp.com/";
    let anzeigeUrl = "http://localhost:8100/";
    let userCollection;
    async function accountsAnzeigen() {
        console.log("Nutzerkonten werden angezeigt");
        let response = await fetch(anzeigeUrl);
        let accounts = await response.json();
        //let responseText: string = await response.text();
        let selectElement = document.querySelector(".ausgabe");
        for (userCollection of accounts) {
            selectElement.appendChild(document.createTextNode(userCollection.vorname + " " + userCollection.nachname));
        }
    }
})(anzeigen || (anzeigen = {}));
//# sourceMappingURL=anzeige.js.map