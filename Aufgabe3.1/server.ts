
//Http Modul importieren
import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace Endabgabe {

    console.log("Starting server");
    
    let port: number = Number(process.env.PORT);
    //Wenn der port nicht definiert ist bzw keiner von heroku zugewiesen wurde, wird der port nr. 8100 aufgerufen
    if (!port)
        port = 8100;

    //Server erstellen
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    interface User {
        "vorname": string;
        "nachname": string;
        "email": string;
        "passwort": string;
    }

    interface Rezept {
        "titel": string;
        "zutat1": string;
        "zutat2": string;
        "zutat3": string;
        "zutat4": string;
        "zutat5": string;
        "zutat6": string;
        "zutat7": string;
        "zutat8": string;
        "zutat9": string;
        "zutat10": string;
        "zubereitung": string;
    }
    

    let mongoUrl: string = "mongodb+srv://Beispiel_User:12345@cluster2000.9tkvz.mongodb.net/Test?retryWrites=true&w=majority";
    let userCollection: Mongo.Collection;
    let rezeptCollection: Mongo.Collection;


    async function conectMongo(_url: string): Promise<void> {
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(mongoUrl);
        await mongoClient.connect();
        //console.log("Mongo verbunden");
        userCollection = mongoClient.db("Test").collection("User");
        rezeptCollection = mongoClient.db("Test").collection("Rezepte");
    }
    conectMongo(mongoUrl);

    function handleListen(): void {
        console.log("Listening");
    }

    interface Query {
        [key: string]: string;
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("I hear everything!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            let data: Query = <Query>q.query;


            if (q.pathname == "/index") {

                let user: User = {
                    "vorname": data.vorname,
                    "nachname": data.nachname,
                    "email": data.email,
                    "passwort": data.passwort
                };
                _response.write (await registriereUser(user));
            }


            else if (q.pathname == "/einloggen") {

                _response.write(await anmelden(data.email, data.passwort));

            }


            else if (q.pathname == "/anzeige") {
                //let accounts: User[] = await accountsAnzeigen();
                //_response.write(JSON.stringify(accounts));

                let rezepte: Rezept[] = await rezeptAnzeigen();
                _response.write(JSON.stringify(rezepte));
            }


            else if (q.pathname == "/meineRezepte.html") {
                
                let rezept: Rezept = {
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
                await rezeptCollection.insertOne(rezept);
            }

        }
        _response.end();
    }

    //User registrieren
    async function registriereUser(_user: User): Promise<string> {

        let countDocuments: number = await userCollection.countDocuments({ "email": _user.email });

        if (countDocuments > 0) {
            return "Mailadresse bereits vergeben";
            //TODO: An Client weitergeben
        } else {
            await userCollection.insertOne(_user);
            return "Neuer Account erstellt";
        }
    }

    // User anmelden
    async function anmelden(_email: string, _passwort: string): Promise<string> {

        let countDocuments: number = await userCollection.countDocuments({ "email": _email, "passwort": _passwort });

        if (countDocuments > 0) {
            return "angemeldet";
        } else {
            return "falsche Daten eingegeben";
        }
    }


    // Rezepte anzeigen
    async function rezeptAnzeigen(): Promise<Rezept[]> {
        let rezepte: Rezept[] = await rezeptCollection.find().toArray();
        return rezepte;
    }

    

    //rezept hinzufügen
    /*async function registriereRezept(_rezept: Rezept): Promise<string> {
        
        await rezeptCollection.insertOne(_rezept);
        console.log("Rezept hinzugefügt");
        return "Rezept hinzugefügt"; 
    }
    */

}
