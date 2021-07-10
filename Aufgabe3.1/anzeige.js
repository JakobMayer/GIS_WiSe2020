"use strict";
var anzeigen;
(function (anzeigen) {
    //let anzeigeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("anzeige-button");
    //anzeigeButton.addEventListener("click", accountsAnzeigen);
    let anzeigeUrl = "https://gisapplication.herokuapp.com/";
    //let anzeigeUrl: string = "http://localhost:8100/";
    let fetchUrl = anzeigeUrl + "anzeige";
    //accountsAnzeigen();
    /*
    async function accountsAnzeigen(): Promise<void> {
        console.log("Nutzerkonten werden angezeigt");
        //let users: Mongo.Collection = db("Test").collection("Students");

        interface User {
            "vorname": string;
            "nachname": string;
            "email": string;
            "passwort": string;
        }

        let response: Response = await fetch(fetchUrl);
        let accounts: User[] = await response.json();

        console.log(accounts);
        //let responseText: string = await response.text();
        let selectElement: HTMLDivElement = <HTMLDivElement>document.querySelector(".ausgabe");

        for (let userCollection of accounts) {
            let paragraph: HTMLDivElement = document.createElement("div");
            paragraph.innerText = userCollection.vorname + " " + userCollection.nachname;
            
            selectElement.appendChild(paragraph);
        }
    }
    */
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
            let rezept = document.createElement("div");
            selectElement.appendChild(rezept);
            let rezeptTitel = document.createElement("h2");
            rezeptTitel.textContent = rezeptCollection["titel"];
            rezept.appendChild(rezeptTitel);
            let favButton = document.createElement("button");
            favButton.textContent = "Favorisieren";
            rezept.appendChild(favButton);
            let zutatenSchrift = document.createElement("h3");
            zutatenSchrift.textContent = "Zutaten";
            rezept.appendChild(zutatenSchrift);
            let zutaten = document.createElement("p");
            zutaten.innerText = rezeptCollection.zutat1 + " " + rezeptCollection.zutat2 + " " + rezeptCollection.zutat3 + " " + rezeptCollection.zutat4 + " " + rezeptCollection.zutat5 + " " + rezeptCollection.zutat6 + " " + rezeptCollection.zutat7 + " " + rezeptCollection.zutat8 + " " + rezeptCollection.zutat9 + " " + rezeptCollection.zutat10;
            rezept.appendChild(zutaten);
            let zubereitungsSchrift = document.createElement("h3");
            zubereitungsSchrift.textContent = "Zubereitung";
            rezept.appendChild(zubereitungsSchrift);
            let zubereitung = document.createElement("p");
            zubereitung.textContent = rezeptCollection["zubereitung"];
            rezept.appendChild(zubereitung);
            //let paragraph: HTMLDivElement = document.createElement("div");
            //paragraph.innerText = rezeptCollection.titel + " " + rezeptCollection.zutat1 + " " + rezeptCollection.zutat2 + " " + rezeptCollection.zutat3 + " " + rezeptCollection.zutat4 + " " + rezeptCollection.zutat5 + " " + rezeptCollection.zutat6 + " " + rezeptCollection.zutat7 + " " + rezeptCollection.zutat8 + " " + rezeptCollection.zutat9 + " " + rezeptCollection.zutat10 + " " + rezeptCollection.zubereitung;
            //selectElement.appendChild(paragraph);
        }
    }
})(anzeigen || (anzeigen = {}));
//# sourceMappingURL=anzeige.js.map