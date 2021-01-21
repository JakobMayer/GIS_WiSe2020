"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
//Http Modul importieren
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var P_3_1Server;
(function (P_3_1Server) {
    async function conectMongo() {
        let mongoClient = new Mongo.MongoClient("localhost:27017");
        await mongoClient.connect();
    }
    conectMongo();
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
        console.log("I hear you!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            console.log(q.pathname);
            if (q.pathname == "/index") {
                for (let key in q.query) {
                    _response.write(key + ":" + q.query[key] + "<br/>");
                }
            }
            if (q.pathname == "/json") {
                let stringJSON = JSON.stringify(q.query);
                _response.write(stringJSON);
            }
        }
        _response.end();
        // Es wird ein Header erstellt und da die request auf einer neuen Seite ausgegeben.
    }
    let databaseUrl = "mongodb+srv://Beispiel_User:<password>@cluster2000.9tkvz.mongodb.net/<dbname>?retryWrites=true&w=majority";
    let user;
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map