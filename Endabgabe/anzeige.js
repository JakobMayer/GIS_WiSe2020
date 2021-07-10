"use strict";
var anzeigen;
(function (anzeigen) {
    //let anzeigeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("anzeige-button");
    //anzeigeButton.addEventListener("click", accountsAnzeigen);
    let anzeigeUrl = "https://gisapplication.herokuapp.com/";
    //let anzeigeUrl: string = "http://localhost:8100/";
    let fetchUrl = anzeigeUrl + "anzeige";
    //accountsAnzeigen();
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
    rezepteAnzeigen();
    async function rezepteAnzeigen() {
        console.log("Rezepte werden angezeigt");
        console.log(fetchUrl);
        let response = await fetch(fetchUrl);
        console.log("Response: " + response);
        let rezepte = await response.json();
        console.log(rezepte);
        let selectElement = document.querySelector(".ausgabe");
        for (let rezeptCollection of rezepte) {
            let paragraph = document.createElement("div");
            paragraph.innerText = rezeptCollection.titel + " " + rezeptCollection.zutat1 + " " + rezeptCollection.zutat2 + " " + rezeptCollection.zutat3 + " " + rezeptCollection.zutat4 + " " + rezeptCollection.zutat5 + " " + rezeptCollection.zutat6 + " " + rezeptCollection.zutat7 + " " + rezeptCollection.zutat8 + " " + rezeptCollection.zutat9 + " " + rezeptCollection.zutat10 + " " + rezeptCollection.zubereitung;
            selectElement.appendChild(paragraph);
        }
    }
})(anzeigen || (anzeigen = {}));
//# sourceMappingURL=anzeige.js.map