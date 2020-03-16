import { Osoba } from "./osoba.js";

export class Zaposleni extends Osoba{
    constructor(i, p, gr, pl, po){
        super(i, p, gr);
        this.plata = pl;
        this.pozicija = po;
    }
    set plata(pl){
        this._plata = pl;
    }
    get plata(){
        return this._plata;
    }
    set pozicija(po){
        this._pozicija = po;
    }
    get pozicija(){
        return this._pozicija; 
    }
    ispisZaposleni(){
        //console.log(`Zaposleni: ${this.ime} ${this.prezime} (${this.godRodj}), iznos plate - ${this.plata}, pozicija - ${this.pozicija}`);
        this.ispisiOsobu();
        console.log(`plata: ${this.plata}, pozicija: ${this.pozicija}`)
    }
    ekonomista(){
        if(this.pozicija== 'ekonomista'){
            console.log('Zaposlen u ekonomskom sektoru');
        }
    }
    natprosecnaPlata(prosek){
        if(this.plata>prosek){
            return true;
        } else {
            return false;
        }
    }
}

