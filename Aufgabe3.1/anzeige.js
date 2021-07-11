"use strict";
var Endabgabe;
(function (Endabgabe) {
    let anzeigeUrl = "https://gisapplication.herokuapp.com/";
    //let anzeigeUrl: string = "http://localhost:8100/";
    let fetchUrl = anzeigeUrl + "anzeige";
    rezepteAnzeigen();
    async function rezepteAnzeigen() {
        //console.log("Rezepte werden angezeigt");
        //console.log(fetchUrl);
        let response = await fetch(fetchUrl);
        let rezepte = await response.json();
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
            favButton.addEventListener("click", () => favorisiereRezept(rezeptCollection["titel"]));
            let zutatenSchrift = document.createElement("h3");
            zutatenSchrift.textContent = "Zutaten";
            rezept.appendChild(zutatenSchrift);
            let zutaten = document.createElement("p");
            zutaten.innerText = rezeptCollection.zutat1 + "  " + rezeptCollection.zutat2 + "  " + rezeptCollection.zutat3 + "  " + rezeptCollection.zutat4 + "  " + rezeptCollection.zutat5 + "  " + rezeptCollection.zutat6 + "  " + rezeptCollection.zutat7 + "  " + rezeptCollection.zutat8 + "  " + rezeptCollection.zutat9 + "  " + rezeptCollection.zutat10;
            rezept.appendChild(zutaten);
            let zubereitungsSchrift = document.createElement("h3");
            zubereitungsSchrift.textContent = "Zubereitung";
            rezept.appendChild(zubereitungsSchrift);
            let zubereitung = document.createElement("p");
            zubereitung.textContent = rezeptCollection["zubereitung"];
            rezept.appendChild(zubereitung);
        }
    }
    async function favorisiereRezept(titel) {
        //Rezept zu Favoriten hinzufügen
        alert(titel + " zu Favoriten hinzugefügt");
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=anzeige.js.map