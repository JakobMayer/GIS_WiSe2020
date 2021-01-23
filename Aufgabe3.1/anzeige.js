"use strict";
var anzeigen;
(function (anzeigen) {
    let anzeigeButton = document.getElementById("anzeige-button");
    anzeigeButton.addEventListener("click", accountsAnzeigen);
    //let anzeigeUrl: string = "https://gisapplication.herokuapp.com/";
    let anzeigeUrl = "http://localhost:8100/";
    let fetchUrl = anzeigeUrl + "anzeige";
    async function accountsAnzeigen() {
        console.log("Nutzerkonten werden angezeigt");
        let response = await fetch(fetchUrl);
        let accounts = await response.json();
        console.log(accounts);
        //let responseText: string = await response.text();
        let selectElement = document.querySelector(".ausgabe");
        for (let userCollection of accounts) {
            let paragraph = document.createElement("div");
            paragraph.innerText = userCollection.vorname + " " + userCollection.nachname;
            selectElement.appendChild(paragraph);
        }
    }
})(anzeigen || (anzeigen = {}));
//# sourceMappingURL=anzeige.js.map