
//Http Modul importieren
import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace P_3_1Server {
    
    async function conectMongo(): Promise<void> {
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient("localhost:27017");
        await mongoClient.connect();
    }
    conectMongo();
    

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

    function handleListen(): void {
        console.log("Listening");
    }

    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        console.log("I hear you!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            if (q.pathname == "/html") {
                for (let key in q.query) {
                    _response.write (key + ":" + q.query[key] + "<br/>");
                }
            }

            if (q.pathname == "json"){
                let stringJSON: string = JSON.stringify(q.query);
                _response.write(stringJSON);
            }
            
        }

        _response.end();
        // Es wird ein Header erstellt und da die request auf einer neuen Seite ausgegeben.
    }

   
}
