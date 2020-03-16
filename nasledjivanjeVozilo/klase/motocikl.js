import { Vozilo } from "./vozilo";

export class Motocikl extends Vozilo{
    constructor(t, b, bt){
        super(t, b);
        this.brToc = bt;
    }
    set brToc(bt){
        this._brToc = bt;
    }
    get brToc(){
        return this._brToc;
    }
    ispisiMotocikl(){
        console.log(`MOtocikl je: ${this.tip}, ${this.boja}, ${this.brToc}`);
    }
}

