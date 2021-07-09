
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


    async function conectMongo(_url: string): Promise<void> {
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(mongoUrl);
        await mongoClient.connect();
        //console.log("Mongo verbunden");
        userCollection = mongoClient.db("Test").collection("User");
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
            //console.log(q);

            let data: Query = <Query>q.query;

            if (q.pathname == "/index") {
                /*  for (let key in q.query) {
                    _response.write(key + ":" + q.query[key] + "<br/>");
                } */
                //console.log("hier");
                
                let user: User = {
                    "vorname": data.vorname,
                    "nachname": data.nachname,
                    "email": data.email,
                    "passwort": data.passwort
                };

                _response.write (await registriereUser(user));
            }


            else if (q.pathname == "/einloggen") {
                //let stringJSON: string = JSON.stringify(q.query);
                //_response.write(stringJSON);

                _response.write(await anmelden(data.email, data.passwort));

            }


            else if (q.pathname == "/anzeige") {
                let accounts: User[] = await accountsAnzeigen();
                _response.write(JSON.stringify(accounts));
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

    async function accountsAnzeigen(): Promise<User[]> {
        let accounts: User[] = await userCollection.find().toArray();
        return accounts;
    }




}
