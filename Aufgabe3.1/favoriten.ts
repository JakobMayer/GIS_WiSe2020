namespace Endabgabe {

    let url: string = "https://gisapplication.herokuapp.com/";
    let fetchUrl: string = url + "favoriten";

    rezepteAnzeigen();
    async function rezepteAnzeigen(): Promise<void> {
        console.log("Rezepte werden angezeigt");
        console.log(fetchUrl);

        interface Rezept {
            "titel": string;
            "zutat1": string;
            "zutat2": string;
            "zutat3": string;
            "zutat4": string;
            "zutat5": string;
            "zutat6": string;
            "zutat7": string;
            "zutat8": string;
            "zutat9": string;
            "zutat10": string;
            "zubereitung": string;
        }
        
        let response: Response = await fetch(fetchUrl);
        console.log("Response: " + response);
        let rezepte: Rezept[] = await response.json();
        console.log(rezepte);

        let selectElement: HTMLDivElement = <HTMLDivElement>document.querySelector(".ausgabe");

        for (let rezeptCollection of rezepte) {

            let rezept: HTMLDivElement = document.createElement("div");
            selectElement.appendChild(rezept);

            let rezeptTitel: HTMLElement = document.createElement("h2");
            rezeptTitel.textContent = rezeptCollection["titel"];
            rezept.appendChild(rezeptTitel);

            let löschButton: HTMLElement = document.createElement("button");
            löschButton.textContent = "Löschen";
            rezept.appendChild(löschButton);
            löschButton.addEventListener("click", () => löscheRezept(rezeptCollection.titel));

            let zutatenSchrift: HTMLElement = document.createElement("h3");
            zutatenSchrift.textContent = "Zutaten";
            rezept.appendChild(zutatenSchrift);

            let zutaten: HTMLElement = document.createElement("p");
            zutaten.innerText = rezeptCollection.zutat1 + " " + rezeptCollection.zutat2 + " " + rezeptCollection.zutat3 + " " + rezeptCollection.zutat4 + " " + rezeptCollection.zutat5 + " " + rezeptCollection.zutat6 + " " + rezeptCollection.zutat7 + " " + rezeptCollection.zutat8 + " " + rezeptCollection.zutat9 + " " + rezeptCollection.zutat10;
            rezept.appendChild(zutaten);
            
            let zubereitungsSchrift: HTMLElement = document.createElement("h3");
            zubereitungsSchrift.textContent = "Zubereitung";
            rezept.appendChild(zubereitungsSchrift);

            let zubereitung: HTMLElement = document.createElement("p");
            zubereitung.textContent = rezeptCollection["zubereitung"];
            rezept.appendChild(zubereitung);
        }
    }

    async function löscheRezept(rezeptName: string): Promise<void> {
        //Rezept aus Favoriten löschen
        console.log("Aus Favoriten entfernt");
    }
}