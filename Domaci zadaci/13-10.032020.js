class Brojevi {
    constructor(pb, db){
        this.bPrvi = pb;
        this.bDrugi = db;
    }
    get bPrvi(){
        return this.prviBr;
    }
    set bPrvi(bP){
        this.prviBr = bP;
    }
    get bDrugi(){
        return this.drugiBr;
    }
    set bDrugi(bD){
        this.drugiBr = bD;
    }
    saberi(){
        let x = this.bPrvi;
        let y = this.bDrugi;
        let s = x + y;
        return s;
    }
    oduzmi(){
        let x = this.bPrvi;
        let y = this.bDrugi;
        let r = x - y;
        return r;
    }
    pomnozi(){
        let x = this.bPrvi;
        let y = this.bDrugi;
        let p = x * y;
        return p;
    }
    podeli(){
        let x = this.bPrvi;
        let y = this.bDrugi;
        if(y == 0){
            return 'Nije dozvoljeno deliti nulom'
        } else {
            let k = x / y;
            return k;
        }
    }
}

let brojevi1 = new Brojevi(5, 6);
console.log(brojevi1.saberi());
console.log(brojevi1.oduzmi());
console.log(brojevi1.pomnozi());
console.log(brojevi1.podeli());

let brojevi2 = new Brojevi(112, 20);
console.log(brojevi2.saberi());
console.log(brojevi2.oduzmi());
console.log(brojevi2.pomnozi());
console.log(brojevi2.podeli());

let brojevi3 = new Brojevi(53, 0);
console.log(brojevi3.saberi());
console.log(brojevi3.oduzmi());
console.log(brojevi3.pomnozi());
console.log(brojevi3.podeli());

let brojevi4 = new Brojevi(-4, 15);
console.log(brojevi4.saberi());
console.log(brojevi4.oduzmi());
console.log(brojevi4.pomnozi());
console.log(brojevi4.podeli());


