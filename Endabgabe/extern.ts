namespace submit {

    //let url: string = "https://gisapplication.herokuapp.com/";
    let url: string = "http://localhost:8100/";

    export async function submitToServer(_event: Event): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
    
        url = url + (<HTMLInputElement>_event.target).getAttribute("data-request-target") + "?" + query.toString();
        console.log(url);
    
    
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        console.log(response);
        //alert("Response Text: " + responseText);
    
        //Antwort auf der Seite ausgeben
        let selectElement: HTMLDivElement = <HTMLDivElement>document.querySelector(".ausgabe");
        selectElement.appendChild(document.createTextNode(responseText));
    
    }
}
