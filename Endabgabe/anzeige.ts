namespace anzeigen {
    //let anzeigeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("anzeige-button");
    //anzeigeButton.addEventListener("click", accountsAnzeigen);

    let anzeigeUrl: string = "https://gisapplication.herokuapp.com/";
    //let anzeigeUrl: string = "http://localhost:8100/";
    let fetchUrl: string = anzeigeUrl + "anzeige";


    //accountsAnzeigen();
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
            let paragraph: HTMLDivElement = document.createElement("div");
            paragraph.innerText = rezeptCollection.titel + " " + rezeptCollection.zutat1 + " " + rezeptCollection.zutat2 + " " + rezeptCollection.zutat3 + " " + rezeptCollection.zutat4 + " " + rezeptCollection.zutat5 + " " + rezeptCollection.zutat6 + " " + rezeptCollection.zutat7 + " " + rezeptCollection.zutat8 + " " + rezeptCollection.zutat9 + " " + rezeptCollection.zutat10 + " " + rezeptCollection.zubereitung;
            
            selectElement.appendChild(paragraph);
        }
    }



}