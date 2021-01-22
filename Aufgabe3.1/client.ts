
let registerForm: HTMLFormElement = <HTMLFormElement>document.getElementById("register-form");

let registerButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button");
registerButton.addEventListener("click", submitToServer);
//let url: string = "https://gisapplication.herokuapp.com/";
let url: string = "http://localhost:8100/";
