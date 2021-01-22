"use strict";
var submit;
(function (submit) {
    //let url: string = "https://gisapplication.herokuapp.com/";
    let url = "http://localhost:8100/";
    async function submitToServer(_event) {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        url = url + _event.target.getAttribute("data-request-target") + "?" + query.toString();
        console.log(url);
        let response = await fetch(url);
        let responseText = await response.text();
        console.log(response);
        //alert("Response Text: " + responseText);
        //Antwort auf der Seite ausgeben
        let selectElement = document.querySelector(".ausgabe");
        selectElement.appendChild(document.createTextNode(responseText));
    }
    submit.submitToServer = submitToServer;
})(submit || (submit = {}));
//# sourceMappingURL=extern.js.map