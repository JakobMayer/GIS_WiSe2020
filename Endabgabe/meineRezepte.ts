namespace meineRezepte {

    let erstellButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button");
    erstellButton.addEventListener("click", submitToServer);

    let erstellUrl: string = "https://gisapplication.herokuapp.com/";

    async function submitToServer(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        console.log("Formulardaten " + formData);

        let fetchUrl: string = erstellUrl + "meineRezepte" + "?" + query.toString();

        let response: Response = await fetch(fetchUrl);
        let responseText: string = await response.text();
        console.log("Response Text: " + responseText);

        //Antwort auf der Seite ausgeben
        let selectElement: HTMLDivElement = <HTMLDivElement>document.querySelector(".ausgabe");
        let paragraph: HTMLDivElement = document.createElement("div");
        paragraph.innerText = responseText;
        selectElement.appendChild(paragraph);

        window.location.href = "meineRezepte.html";
    }
}