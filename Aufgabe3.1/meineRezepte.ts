namespace meineRezepte {
    
    let url: string = "https://gisapplication.herokuapp.com/";
    
    let sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit-button");
    sendButton.addEventListener("click", submitToServer);
    
    /*
    let bearbeiten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bearbeiten-button");
    erstellen.addEventListener("click", handleBearbeiten);
    
    let löschen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("löschen-button");
    erstellen.addEventListener("click", handleLöschen);
    */
    
    console.log(localStorage.getItem("userName"));
   
    async function submitToServer(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let fetchUrl: string = url + "meineRezepte" + "?" + query.toString();

        let response: Response = await fetch(fetchUrl);
        let responseText: string = await response.text();
        console.log("Response Text: " + responseText);


        let selectElement: HTMLDivElement = <HTMLDivElement>document.querySelector(".ausgabe2");
        let paragraph: HTMLDivElement = document.createElement("div");
        paragraph.innerText = responseText;
        selectElement.appendChild(paragraph);
    }

    /*
    async function handleBearbeiten(_event: Event): Promise<void> {
        
    }

    async function handleLöschen(_event: Event): Promise<void> {
        
    }
    */


    //Idee um meine Rezepte auszugeben: username in Local Storage speichern und beim erstellen eines neuen Rezepts den username
    // mit dem Rezept in der Datenbank speichern. ÜBer eine Schleife in der Datenbank nach dem Namen des users suchen und alle Rezepte
    // anzeigen die von dem Nutzer kommen.

}