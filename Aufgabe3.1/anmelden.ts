let anmeldeForm: HTMLFormElement = <HTMLFormElement>document.getElementById("register-form");

let anmeldeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button");
anmeldeButton.addEventListener("click", submitToServer);

//let url: string = "https://gisapplication.herokuapp.com/";
let anmeldeUrl: string = "http://localhost:8100/";

async function submitToServer(_event: Event): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>formData);

    anmeldeUrl = anmeldeUrl + "einloggen" + "?" + query.toString();
    //console.log(url);


    let response: Response = await fetch(anmeldeUrl);
    let responseText: string = await response.text();
    console.log(response);
    //alert("Response Text: " + responseText);

    //Antwort auf der Seite ausgeben
    let selectElement: HTMLDivElement = <HTMLDivElement>document.querySelector(".ausgabe");
    selectElement.appendChild(document.createTextNode(responseText));

}