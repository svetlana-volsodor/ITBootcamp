import { Racunar } from "./racunar.js";


export class Laptop extends Racunar{
    constructor(s, b, m){
        super(s, b);
        this.masa = m;
    }
    set masa(m){
        if(m >= 100){
        this._masa = m;}
        else {
            this._masa = 100;
        }
    }
    get masa(){
        return this._masa;
    }
    ispisLaptopa(){
        console.log(`Laptop sifre ${this.sifra}, boja: ${this.boja}, masa: ${this.masa} `);
    }
}

