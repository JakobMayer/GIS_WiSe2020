

let registerForm: HTMLFormElement = <HTMLFormElement>document.getElementById("register-form");

let registerButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button");
registerButton.addEventListener("click", submitToServer);
let url: string = "https://gisapplication.herokuapp.com/";


async function submitToServer(_event: Event): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let query: URLSearchParams = new URLSearchParams(<any>formData);

    url = url + "?" + query.toString();
    console.log(url);

    
    let response: Response = await fetch(url);
    let responseText: string = await response.text();
    console.log(response);
    
    //alert("Response Text: " + responseText);

    //Antwort auf der Seite ausgeben
    let selectElement: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("ausgabe")[0];
    selectElement.appendChild(document.createTextNode(responseText));

   
    
    


}
