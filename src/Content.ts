import fs from "fs";
import http from "http";
import url from "url";
import Megoldas from "./Megoldas";

export default class Content {
    public static content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre>");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const params = new url.URL(req.url as string, `http://${req.headers.host}/`).searchParams;

        // Kezd a kódolást innen -->

        const mo: Megoldas=new Megoldas("tavirathu13.txt")


        res.write(`2. feladat:\n`)
        const varos: string ="";
        res.write(`Adjon meg egy várost! Város kódja =  <input type='text' name='varos' value='${varos}' style='max-width:100px;' onChange='this.form.submit();'>\n`);
        res.write(`Az ön által válaszott település: ${mo.telepulesChoose(varos)} \n`)
        res.write(`3. feladat:\n`)
        res.write(`A legalacsonyabb hőmérséklet: ${mo.MinHoGet()}\n`)
        res.write(`A legmagasabb hőmérséklet: ${mo.MaxHoGet()}\n`)
        res.write(`4. feladat:\n`)
        const szelcsendek: string []=mo.Szelcsendek();
        if (szelcsendek.length!=0)
        {
            for(const c of szelcsendek){
                res.write(`${c}\n`)
            }
        }
        else
        {
            res.write(`Nem volt szélcsend a mérések idején.`)
        }

        
        res.write(`5. feladat:\n`)
        res.write(`6. feladat:\n`)
        




        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
