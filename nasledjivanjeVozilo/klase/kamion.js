import { Vozilo } from "./vozilo.js";


export class Kamion extends Vozilo{
    constructor(t, b, n){
        super(t, b);
        this.nosivost = n;

    }
    set nosivost(n){
        this._nosivost = n;
    }
    get nosivost(){
        return this._nosivost;
    }
    ispisKamion(){
        console.log(`Kamion je: ${this.tip}, ${this.boja}, ${this.nosivost}`);
    }
}

