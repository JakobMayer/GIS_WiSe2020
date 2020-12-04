document.querySelector("#Button5").addEventListener("click", deleteLocalStorage);
function deleteLocalStorage(): void {
    localStorage.clear();
}

namespace A23 {

    let s1: Raketenteil = loadRaketeFromString(localStorage.getItem("Spitze"));
    let s2: Raketenteil = loadRaketeFromString(localStorage.getItem("Mitte"));
    let s3: Raketenteil = loadRaketeFromString(localStorage.getItem("Booster"));
    let wholeRocket: Raketenteil[] = [s1, s2, s3];


    async function loadDataFromJSON(_url: RequestInfo): Promise<RaketeWahl> {
        let response: Response = await fetch(_url);
        let result: RaketeWahl = await response.json();
        return result;
    }

    function loadRaketeFromString(_object: string): Raketenteil {
        let myObj: Raketenteil = JSON.parse(_object);
        return myObj;
    }

    export interface RaketeWahl {
        spitzeArray: Raketenteil[];
        mitteArray: Raketenteil[];
        boosterArray: Raketenteil[];
    }

    export interface Raketenteil {
        name: string;
        img: string;
    }

    // lade die richtigen Bilder auf der richtigen Seite
    let tempString: string[] = window.location.pathname.split("/");
    console.log(tempString);
    async function open(): Promise<void> {
        let result: RaketeWahl = await loadDataFromJSON("data.json");
        switch (tempString[tempString.length - 1]) {
            case "spitzen.html":
                bilder(result.spitzeArray);
                break;

            case "mitte.html":
                bilder(result.mitteArray);
                break;

            case "booster.html":
                bilder(result.boosterArray);
                break;

            case "auswahl.html":
                bilder(wholeRocket);
                sendCacheToServer("https://gis-communication.herokuapp.com");
                break;
        }
    }
    open();


    
    function bilder(_info: Raketenteil[]): void {
        let selectElement: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("container")[0];

        for (let i: number = 0; i < _info.length; i++) {
            let div: HTMLDivElement = <HTMLDivElement>document.createElement("div");

            selectElement.appendChild(div);

            let optionImage: HTMLImageElement = <HTMLImageElement>document.createElement("img");
            console.log(_info[i]);
            optionImage.src = _info[i].img;
            div.appendChild(optionImage);
            optionImage.addEventListener("click", auswahlZurückgeben);
        }
    }

    // Element auswählen und im Local Storage speichern
    function auswahlZurückgeben(_event: Event): void {
        let target: HTMLImageElement = <HTMLImageElement>_event.currentTarget;
        let temporString: string[] = target.src.split("/");

        switch (tempString[tempString.length - 1]) {
            case "spitzen.html":
                let r1: Raketenteil = { name: "Ausgewählte Spitze", img: "Bilder/" + temporString[temporString.length - 1] };
                let myR1: string = JSON.stringify(r1);
                localStorage.setItem("Spitze", myR1);
                break;

            case "mitte.html":
                let r2: Raketenteil = { name: "Ausgewählte Mitte", img: "Bilder/" + temporString[temporString.length - 1] };
                let myR2: string = JSON.stringify(r2);
                localStorage.setItem("Mitte", myR2);
                break;

            case "booster.html":
                let r3: Raketenteil = { name: "Ausgewählter Booster", img: "Bilder/" + temporString[temporString.length - 1] };
                let myR3: string = JSON.stringify(r3);
                localStorage.setItem("Booster", myR3);
                break;
        }
    }

    async function sendCacheToServer(_url: string): Promise<void> {

        let query: URLSearchParams = new URLSearchParams(localStorage);
        _url = _url + "?" + query.toString();
        let response: Response = await fetch(_url);
        let serverMessage: ServerMessage = await response.json();
        let serverResponse: HTMLElement = document.getElementById("serverResponse");
        let text: HTMLParagraphElement = document.createElement("p");
    
        if (serverMessage.message !== undefined) {  
           text.innerText = serverMessage.message;
        }
    
        if (serverMessage.error !== undefined) {
            text.setAttribute("style", "color:red");
            text.innerText = serverMessage.error;
        }
        serverResponse.appendChild(text);
    } 
    
    interface ServerMessage {
        message: string;
        error: string;
    }
}

