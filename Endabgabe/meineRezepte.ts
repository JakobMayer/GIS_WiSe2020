namespace meineRezepte {

    
    let erstellen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button");
    erstellen.addEventListener("click", test);
    console.log("Hallo");
    
    /*
    let bearbeiten: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bearbeiten-button");
    erstellen.addEventListener("click", handleBearbeiten);
    
    let löschen: HTMLButtonElement = <HTMLButtonElement>document.getElementById("löschen-button");
    erstellen.addEventListener("click", handleLöschen);
    */
   
    let url: string = "https://gisapplication.herokuapp.com/";
    
    async function submitToServer(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        console.log("Formulardaten " + formData);

        let fetchUrl: string = url + "meineRezepte" + "?" + query.toString();

        let response: Response = await fetch(fetchUrl);
        let responseText: string = await response.text();
        console.log("Response Text: " + responseText);

        //Antwort auf der Seite ausgeben
        let selectElement: HTMLDivElement = <HTMLDivElement>document.querySelector(".ausgabe");
        let paragraph: HTMLDivElement = document.createElement("div");
        paragraph.innerText = responseText;
        selectElement.appendChild(paragraph);

        //window.location.href = "meineRezepte.html";
    }

    /*
    async function handleBearbeiten(_event: Event): Promise<void> {
        
    }

    async function handleLöschen(_event: Event): Promise<void> {
        
    }
    */

    function test():void{

        console.log("test erfolgreich");
    }
}