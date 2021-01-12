"use strict";
/*
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
    alert("Antwort: " + responseText);


}
*/
let formularForm = document.getElementById("register-form");
let registerButton = document.getElementById("send-button");
registerButton.addEventListener("click", submitToServer);
let url = "https://gisapplication.herokuapp.com/";
async function submitToServer(_event) {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    console.log(url);
    let response = await fetch(url + "?" + query.toString());
    let responseText = await response.text();
    console.log(response);
    alert(responseText);
}
async function communicate(_url) {
    let response = await fetch(_url);
    console.log("Response", response);
}
function processData(_event) {
    console.log();
}
//# sourceMappingURL=client.js.map