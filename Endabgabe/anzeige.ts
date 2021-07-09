namespace anzeigen {
    //let anzeigeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("anzeige-button");
    //anzeigeButton.addEventListener("click", accountsAnzeigen);

    let anzeigeUrl: string = "https://gisapplication.herokuapp.com/";
    //let anzeigeUrl: string = "http://localhost:8100/";
    let fetchUrl: string = anzeigeUrl + "anzeige";


    accountsAnzeigen();
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



}