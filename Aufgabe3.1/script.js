"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
//Http Modul importieren
const Http = require("http");
var P_3_1Server;
(function (P_3_1Server) {
    console.log("Starting server");
    //environment mit der Angabe der Portnummer von heroku
    let port = Number(process.env.PORT);
    //Wenn der port nicht definiert ist bzw keiner von heroku zugewiesen wurde, wird der port nr. 8100 aufgerufen
    if (!port)
        port = 8100;
    //Server erstellen
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        console.log(_request.url);
        _response.end();
        // Es wird ein Header erstellt und da die request auf einer neuen Seite ausgegeben.
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=script.js.map