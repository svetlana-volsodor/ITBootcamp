export class Osoba{
    constructor(i, p, gr){
        this.ime = i;
        this.prezime = p;
        this.godRodj = gr;
    }
    set ime(i){
        this._ime = i;
    }
    get ime(){
        return this._ime;
    }
    set prezime(p){
        this._prezime = p;
    }
    get prezime(){
        return this._prezime;
    }
    set godRodj(gr){
        if(gr<0){
            this._godRodj = 0
        } else {
        this._godRodj = gr;}
    }
    get godRodj(){
        return this._godRodj;
    }
    ispisiOsobu(){
        console.log(`Osoba: ${this.ime} ${this.prezime} (${this.godRodj})`);
    }

}