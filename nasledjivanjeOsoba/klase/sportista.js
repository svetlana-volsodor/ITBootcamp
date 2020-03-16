import { Osoba } from "./osoba.js";

export class Sportista extends Osoba{
    constructor(i, p, gr, mr){
        super(i, p, gr);
        this.mestoRodj = mr;
    }
    set mestoRodj(mr){
        this._mestoRodj = mr;
    }
    get mestoRodj(){
        return this._mestoRodj;
    }
    ispisiSportistu(){
        console.log(`${this.ime} ${this.prezime} ${this.godRodj} ${this.mestoRodj}`);
    }
}