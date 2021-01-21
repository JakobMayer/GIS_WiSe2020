
//Http Modul importieren
import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace P_3_1Server {

    console.log("Starting server");
    //environment mit der Angabe der Portnummer von heroku
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

    let mongoUrl: string = "mongodb+srv://Beispiel_User:<password>@cluster2000.9tkvz.mongodb.net/<dbname>?retryWrites=true&w=majority";
    let user: Mongo.Collection;


    async function conectMongo(_url: string): Promise<void> {
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient("localhost:27017");
        await mongoClient.connect();
        console.log("Mongo verbunden");
        user = mongoClient.db("Formulare").collection("User");
    }
    conectMongo(mongoUrl);


    function handleListen(): void {
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear you!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true);


            if (q.pathname == "/index") {
                /*  for (let key in q.query) {
                    _response.write(key + ":" + q.query[key] + "<br/>");
                } */
                let queryParameters: Query = <Query>q.query;

                let user: User = {

                    "vorname": queryParameters.vorname as string,
                    "nachname": queryParameters.nachname as string,
                    "email": queryParameters.email as string,
                    "passwort": queryParameters.passwort as string
                };

                await registriereUser(user);



                if (q.pathname == "/einloggen") {
                    //let stringJSON: string = JSON.stringify(q.query);
                    //_response.write(stringJSON);

                    let queryParameters: Query = <Query>q.query;
                    await anmelden(queryParameters.email as string, queryParameters.passwort as string);
                }

            }

            _response.end();
            // Es wird ein Header erstellt und da die request auf einer neuen Seite ausgegeben.
        }

        async function registriereUser(_user: User): Promise<void> {
            //überprüfen ob es schon ein Konto mit der Mailadresse gibt
            //countDocuments

            let countDocuments: number = await user.countDocuments({ "email": _user.email });

            if (countDocuments > 0) {
                console.log("Mailadresse bereits vergeben");
                //TODO: An Client weitergeben
            } else {
                await user.insertOne(_user);
            }
        }

        async function anmelden(_email: string, _passwort: string): Promise<void> {

            let countDocuments: number = await user.countDocuments({ "email": _email, "passwort": _passwort });

            if (countDocuments > 0) {
                console.log("angemeldet");
            } else {
                console.log("falsche Daten eingegeben");
            }

        }




    }
