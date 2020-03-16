import{Vozilo} from "./vozilo.js";
//KLASA NASLEDNICA:
export class Automobil extends Vozilo{ ///extends - kljucna rec za nasledjivanje
    constructor(t, b, rb){
        super(t, b);//POZIVANJE RODITELJSKOG KONSTRUKTORA:
        this.regBr = rb;//POZIVANJE SETTERA ZA REG BROJ
    }
    set regBr(rb){
        this._regBr = rb;
    }
    get regBr(){
        return this._regBr;
    }
    ispisiAutomobil(){
        console.log(`Automobil: tip ${this.tip}, boja ${this.boja}, registarski broj ${this.regBr}.`);
    }
}