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
    let mongoUrl = "mongodb+srv://Beispiel_User:12345@cluster2000.9tkvz.mongodb.net/Test?retryWrites=true&w=majority";
    let userCollection;
    async function conectMongo(_url) {
        let mongoClient = new Mongo.MongoClient(mongoUrl);
        await mongoClient.connect();
        //console.log("Mongo verbunden");
        userCollection = mongoClient.db("Test").collection("User");
    }
    conectMongo(mongoUrl);
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear you!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            //console.log(q);
            let data = q.query;
            if (q.pathname == "/index") {
                /*  for (let key in q.query) {
                    _response.write(key + ":" + q.query[key] + "<br/>");
                } */
                //console.log("hier");
                let user = {
                    "vorname": data.vorname,
                    "nachname": data.nachname,
                    "email": data.email,
                    "passwort": data.passwort
                };
                _response.write(await registriereUser(user));
            }
            else if (q.pathname == "/einloggen") {
                //let stringJSON: string = JSON.stringify(q.query);
                //_response.write(stringJSON);
                _response.write(await anmelden(data.email, data.passwort));
            }
            else if (q.pathname == "/anzeige") {
                let accounts = await accountsAnzeigen();
                _response.write(JSON.stringify(accounts));
            }
        }
        _response.end();
    }
    async function registriereUser(_user) {
        //überprüfen ob es schon ein Konto mit der Mailadresse gibt
        //countDocuments
        let countDocuments = await userCollection.countDocuments({ "email": _user.email });
        if (countDocuments > 0) {
            return "Mailadresse bereits vergeben";
            //TODO: An Client weitergeben
        }
        else {
            await userCollection.insertOne(_user);
            return "Neuer Account erstellt";
        }
    }
    async function anmelden(_email, _passwort) {
        let countDocuments = await userCollection.countDocuments({ "email": _email, "passwort": _passwort });
        if (countDocuments > 0) {
            return "Login erfolgreich";
        }
        else {
            return "falsche Daten eingegeben";
        }
    }
    async function accountsAnzeigen() {
        let accounts = await userCollection.find().toArray();
        return accounts;
    }
})(P_3_1Server = exports.P_3_1Server || (exports.P_3_1Server = {}));
//# sourceMappingURL=server.js.map