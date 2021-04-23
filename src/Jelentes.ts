export default class Jelentes{
    private _telepules: string;
    private _ido: string;
    private _szeliranya: string;
    private _homerseklet: number;

    public get telepules(): string{
        return this._telepules;
    }

     public get ido(): string{
        return this._ido;
    }

    public get szelirany(): string{
        return this._szeliranya;
    }

    public get homerseklet(): number{
        return this._homerseklet;
    }

    constructor (adatok: string){
        const a: string[]=adatok.split(" ");
        this._telepules=a[0];
        this._ido=a[1];
        this._szeliranya=a[2];
        this._homerseklet=parseInt(a[3]);
    }
}