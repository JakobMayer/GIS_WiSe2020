namespace registrieren {
    //let registerForm: HTMLFormElement = <HTMLFormElement>document.getElementById("register-form");

    let anmeldeButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button");
    anmeldeButton.addEventListener("click", submitToServer);

    let registerUrl: string = "https://gisapplication.herokuapp.com/";
    //let registerUrl: string = "http://localhost:8100/";

    async function submitToServer(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let fetchUrl: string = registerUrl + "index" + "?" + query.toString();
        //console.log(url);

        let response: Response = await fetch(fetchUrl);
        let responseText: string = await response.text();
        console.log("Response Text: " + responseText);

        //Antwort auf der Seite ausgeben
        let selectElement: HTMLDivElement = <HTMLDivElement>document.querySelector(".ausgabe");
        let paragraph: HTMLDivElement = document.createElement("div");
        paragraph.innerText = responseText;
        selectElement.appendChild(paragraph);

        // Wenn registriert dann weiter zu anmelden
        if (responseText == "Neuer Account erstellt") {
            window.location.href = "anmelden.html";
        }

    }
}