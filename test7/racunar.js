export class Racunar{
    constructor(s, b){
        this.sifra = s;
        this.boja = b;
    }
    set sifra(s){
        if(s.length == 4){
            this._sifra = s}
        else {
            this._sifra = "aaaa"
        }    
    }
    get sifra(){
        return this._sifra;
    }
    set boja(b){
        if(b == "crna" || b=="siva" || b=="bela"){
        this._boja = b;
        } else {
            this._boja = "bela"
        }
    }
    get boja(){
        return this._boja;
    }
    ispisRacunara(){
        console.log(`Sifra racunara je ${this.sifra}, boja je ${this.boja}`);
    }
}