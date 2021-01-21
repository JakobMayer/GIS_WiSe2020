"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P_3_1Server = void 0;
//Http Modul importieren
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
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
    let mongoUrl = "mongodb+srv://Beispiel_User:<password>@cluster2000.9tkvz.mongodb.net/<dbname>?retryWrites=true&w=majority";
    let user;
    async function conectMongo(_url) {
        let mongoClient = new Mongo.MongoClient("localhost:27017");
        await mongoClient.connect();
        console.log("Mongo verbunden");
        user = mongoClient.db("Formulare").collection("User");
    }
    conectMongo(mongoUrl);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear you!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            if (q.pathname == "/index") {
                /*  for (let key in q.query) {
                    _response.write(key + ":" + q.query[key] + "<br/>");
                } */
                let queryParameters = q.query;
                let user = {
                    "vorname": queryParameters.vorname,
                    "nachname": queryParameters.nachname,
                    "email": queryParameters.email,
                    "passwort": queryParameters.passwort
                };
                await registriereUser(user);
                if (q.pathname == "/einloggen") {
                    //let stringJSON: string = JSON.stringify(q.query);
                    //_response.write(stringJSON);
                    let queryParameters = q.query;
                    await anmelden(queryParameters.email, queryParameters.passwort);
                }
            }
            _response.end();
            // Es wird ein Header erstellt und da die request auf einer neuen Seite ausgegeben.
        }
        async function registriereUser(_user) {
            //überprüfen ob es schon ein Konto mit der Mailadresse gibt
            //countDocuments
            let countDocuments = await user.countDocuments({ "email": _user.email });
            if (countDocuments > 0) {
                console.log("Mailadresse bereits vergeben");
                //TODO: An Client weitergeben
            }
            else {
                await user.insertOne(_user);
            }
        }
        async function anmelden(_email, _passwort) {
            let countDocuments = await user.countDocuments({ "email": _email, "passwort": _passwort });
            if (countDocuments > 0) {
                console.log("angemeldet");
            }
            else {
                console.log("falsche Daten eingegeben");
            }
        }
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map