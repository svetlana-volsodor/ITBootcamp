import { Sportista } from "./sportista.js";

export class Kosarkas extends Sportista{
    constructor(i, p, gr, mr, bp){
        super(i, p, gr, mr);
        this.poeni = bp;
    }
    set poeni(bp){
        this._poeni = bp;
    }
    get poeni(){
        return this._poeni;
    }
    ispisKosarkas(){
        console.log(`Kosarkas: ${this.ime} ${this.prezime}, (${this.godRodj}) ${this.mestoRodj}, ${this.poeni}`);
    }
    prosecnoPoena(){
        let ukupno = 0;
        this.poeni.forEach(element => {
            ukupno += element;
        });
        let prosecno = ukupno / this.poeni.length;
        return prosecno;
    }
}

//napravi metod prosecan br poena po kosarkasu!