"use strict";
var anzeigen;
(function (anzeigen) {
    //let anzeigeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("anzeige-button");
    //anzeigeButton.addEventListener("click", accountsAnzeigen);
    let anzeigeUrl = "https://gisapplication.herokuapp.com/";
    //let anzeigeUrl: string = "http://localhost:8100/";
    let fetchUrl = anzeigeUrl + "anzeige";
    accountsAnzeigen();
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