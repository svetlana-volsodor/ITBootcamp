export default class Pacijent {
    constructor (ime, visina, tezina){
        this.ime = ime;
        this.visina = visina;
        this.tezina = tezina;
    }
    stampaj(){
        let i = this.ime;  //mozemo definisati nove prom. i dati im vrednosti ili koristiti this.ime, this.visina, this.tezina
        let h = this.visina;
        let w = this.tezina;
        console.log(`Ime pacijenta: ${i}, visina: ${h}, tezina: ${w}`);
    }
    bmi(){
        let bmi = this.tezina / (this.visina/100)**2 ;
        return bmi;
    }
    kritican(){
        if(this.bmi() < 15 || this.bmi() > 40){  //this.bmi() pozivam metodu za zadati objekat a ne promenljivu bmi
            return true;
        } else {
            return false;
        }
        /*let bmi = this.bmi();
        if(bmi < 15 || bmi>40) {
            return true} 
            else {
                return false
            }*/
        
    }
}
