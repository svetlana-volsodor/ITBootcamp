 export class Vozilo{
    constructor(t, b){
        this.tip = t;
        this.boja = b;
    }
    set tip(t){
        this._tip = t;
    }
    set boja(b){
        this._boja = b;
    }
    get tip(){
        return this._tip;
    }
    get boja(){
        return this._boja;
    }
    ispisiVozilo(){
        console.log(`Vozilo: ${this.tip}, boja ${this.boja}.`);
    }
    vozi(){
        console.log('Vozilo u pokretu!');
    }
}