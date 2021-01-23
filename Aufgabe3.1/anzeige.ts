namespace anzeigen {
    let anzeigeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("anzeige-button");
    anzeigeButton.addEventListener("click", accountsAnzeigen);

    //let anzeigeUrl: string = "https://gisapplication.herokuapp.com/";
    let anzeigeUrl: string = "http://localhost:8100/";
    let userCollection: Mongo.Collection;

    async function accountsAnzeigen(): Promise<void> {
        console.log("Nutzerkonten werden angezeigt");
        //let users: Mongo.Collection = db("Test").collection("Students");

        interface User {
            "vorname": string;
            "nachname": string;
            "email": string;
            "passwort": string;
        }

        let response: Response = await fetch(anzeigeUrl);

        let accounts: User[] = await response.json();
        //let responseText: string = await response.text();
        let selectElement: HTMLDivElement = <HTMLDivElement>document.querySelector(".ausgabe");

        for (userCollection of accounts) {
            selectElement.appendChild(document.createTextNode(userCollection.vorname + " " + userCollection.nachname));
        }







        
    }



}