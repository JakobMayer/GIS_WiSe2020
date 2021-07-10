"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
//Http Modul importieren
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var Endabgabe;
(function (Endabgabe) {
    console.log("Starting server");
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
    let rezeptCollection;
    console.log("Database connection", rezeptCollection != undefined);
    async function conectMongo(_url) {
        let mongoClient = new Mongo.MongoClient(mongoUrl);
        await mongoClient.connect();
        //console.log("Mongo verbunden");
        userCollection = mongoClient.db("Test").collection("User");
        rezeptCollection = mongoClient.db("Test").collection("Rezepte");
    }
    conectMongo(mongoUrl);
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear everything!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            let data = q.query;
            if (q.pathname == "/index") {
                let user = {
                    "vorname": data.vorname,
                    "nachname": data.nachname,
                    "email": data.email,
                    "passwort": data.passwort
                };
                _response.write(await registriereUser(user));
            }
            else if (q.pathname == "/einloggen") {
                _response.write(await anmelden(data.email, data.passwort));
            }
            else if (q.pathname == "/anzeige") {
                //let accounts: User[] = await accountsAnzeigen();
                //_response.write(JSON.stringify(accounts));
                let rezepte = await rezeptAnzeigen();
                _response.write(JSON.stringify(rezepte));
            }
            else if (q.pathname == "/meineRezepte.html") {
                let rezept = {
                    "titel": data.titel,
                    "zutat1": data.zutat1,
                    "zutat2": data.zutat2,
                    "zutat3": data.zutat3,
                    "zutat4": data.zutat4,
                    "zutat5": data.zutat5,
                    "zutat6": data.zutat6,
                    "zutat7": data.zutat7,
                    "zutat8": data.zutat8,
                    "zutat9": data.zutat9,
                    "zutat10": data.zutat10,
                    "zubereitung": data.zubereitung
                };
                _response.write(await registriereRezept(rezept));
            }
        }
        _response.end();
    }
    //User registrieren
    async function registriereUser(_user) {
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
    // User anmelden
    async function anmelden(_email, _passwort) {
        let countDocuments = await userCollection.countDocuments({ "email": _email, "passwort": _passwort });
        if (countDocuments > 0) {
            return "angemeldet";
        }
        else {
            return "falsche Daten eingegeben";
        }
    }
    // User anzeigen
    /*
    async function accountsAnzeigen(): Promise<User[]> {
        let accounts: User[] = await userCollection.find().toArray();
        return accounts;
    }
    */
    // Rezepte anzeigen
    async function rezeptAnzeigen() {
        let rezepte = await rezeptCollection.find().toArray();
        return rezepte;
    }
    //rezept hinzufügen
    async function registriereRezept(_rezept) {
        await rezeptCollection.insertOne(_rezept);
        console.log("Rezept hinzugefügt");
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map