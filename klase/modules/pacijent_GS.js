export class Pacijent {
    constructor (i, v, t){
        this.pIme = i;
        this.pVisina = v;
        this.pTezina = t;
    }
    get pIme(){
        return this.ime;
    }
    set pIme(i){
        this.ime = i;
    }
    get pVisisna(){
        return this.visina
    }
    set pVisina(v){
        if(v<0){
            this.visina = 0;
        }
         else if(v <=250){
             this.visina = v
         } else {
             v = 250;
         }    
    }
    get pTezina(){
        return this.tezina;
    }
    
    set pTezina(t){
        if(t<0){
            this.tezina = 0;
        } 
        else if(t<=550){
            this.tezina = t;
        } else {
            this.tezina = 550;
        }
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