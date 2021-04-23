import fs from "fs";
import { format } from "node:path";
import Jelentes from "./Jelentes";

export default class Megoldas{
    private _jelentesek: Jelentes[]=[];

    public constructor(forras: string){
        const adatok: string[]=fs.readFileSync(forras).toString().split("\n");
        for(let i =1; i<adatok.length; i++){
            this._jelentesek.push(new Jelentes(adatok[i]));
        }
    }

    public telepulesChoose(varos: string): string{
        for(let i=0; i< this._jelentesek.length; i++){
            if(varos= this._jelentesek[i].telepules)
            {
                return `${this._jelentesek[i].telepules} - ${this._jelentesek[i].ido}`
            }
            
        }
        return `Nincs ilyen település!`
    }

    public MaxHoGet(): string{
        let maxindex:number=0;
        let max:number=0;
        for(let i =0; i<this._jelentesek.length; i++){
            if(max<this._jelentesek[i].homerseklet){
                max=this._jelentesek[i].homerseklet
                maxindex=i;
            }
        }
        return `${this._jelentesek[maxindex].telepules}, ${this._jelentesek[maxindex].ido}, ${this._jelentesek[maxindex].homerseklet} °C`

    }

    public MinHoGet(): string{
        let minindex:number=0;
        let min:number=40;
        for(let i =0; i<this._jelentesek.length; i++){
            if(min>this._jelentesek[i].homerseklet){
                min=this._jelentesek[i].homerseklet
                minindex=i;
            }
        }
        return `${this._jelentesek[minindex].telepules}, ${this._jelentesek[minindex].ido}, ${this._jelentesek[minindex].homerseklet} °C`

    }

    public Szelcsendek():string[]{
        const szelcsendek: string[]=[];
        for (let index = 0; index < this._jelentesek.length; index++) {
            if(this._jelentesek[index].szelirany=="00000")
            szelcsendek.push(`${this._jelentesek[index].telepules} - ${this._jelentesek[index].ido}`);
            
        }
        return szelcsendek;
    }
}