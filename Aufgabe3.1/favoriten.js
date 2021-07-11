"use strict";
var Endabgabe;
(function (Endabgabe) {
    let url = "https://gisapplication.herokuapp.com/";
    let fetchUrl = url + "favoriten";
    rezepteAnzeigen();
    async function rezepteAnzeigen() {
        let response = await fetch(fetchUrl);
        //console.log("Response: " + response);
        let rezepte = await response.json();
        let selectElement = document.querySelector(".ausgabe");
        for (let rezeptCollection of rezepte) {
            let rezept = document.createElement("div");
            selectElement.appendChild(rezept);
            let rezeptTitel = document.createElement("h2");
            rezeptTitel.textContent = rezeptCollection["titel"];
            rezept.appendChild(rezeptTitel);
            let löschButton = document.createElement("button");
            löschButton.textContent = "Löschen";
            rezept.appendChild(löschButton);
            löschButton.addEventListener("click", () => löscheRezept(rezeptCollection["titel"]));
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
        }
    }
    async function löscheRezept(titel) {
        //Rezept aus Favoriten löschen
        alert(titel + " aus Favoriten entfernt");
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=favoriten.js.map