let anmeldeForm: HTMLFormElement = <HTMLFormElement>document.getElementById("register-form");

let anmeldeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button");
anmeldeButton.addEventListener("click", submitToServer);

let anmeldeUrl: string = "https://gisapplication.herokuapp.com/";
//let anmeldeUrl: string = "http://localhost:8100/";

async function submitToServer(_event: Event): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>formData);

    let fetchUrl: string = anmeldeUrl + "einloggen" + "?" + query.toString();
    //console.log(url);

    let response: Response = await fetch(fetchUrl);
    let responseText: string = await response.text();
    
    let userName: string = (<HTMLInputElement><unknown>document.getElementById("userName")).value; 
    localStorage.clear();
    localStorage.setItem("userName", userName);
    console.log(localStorage.getItem("userName"));

    //Antwort auf der Seite ausgeben
    let selectElement: HTMLDivElement = <HTMLDivElement>document.querySelector(".ausgabe");
   
    let paragraph: HTMLDivElement = document.createElement("div");
    paragraph.innerText = responseText;
    selectElement.appendChild(paragraph);

    if (responseText == "angemeldet") {
        window.location.href = "anzeige.html";

        localStorage.clear();
    }
}