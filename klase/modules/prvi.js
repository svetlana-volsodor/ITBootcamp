export class Auto {  //kljucna rec za kreiranje klase 'class'
    //treba navesti da ima polja: marka, boja, ima krov
    //navodi se preko specijalne metode - 'konstruktor'!
    constructor (m, b, ik){ //kljucna rec constructor sa parametrima
        this.marka = m;     //konst. je mtoda ppa mije metoda unutar nje
        this.boja = b;      
        this.imaKrov = ik;
    }
    sviraj(){               //metoda unutar objekta se definise van konstruktora
        //--"this"--- se odnosi na objekat koji je pozvao metodu (u ovom slucaju Paugeot 208, i Mazda CX-30)
        let m = this.marka; 
        console.log(`Auto marke ${m} svira: Beep! Beep!`);
    }
    /// GETTER je u klasi metoda ali mu se pristupa kao polju objekta
    get aMarka(){     
        return this.marka;
    }
    /// SETTER je u klasi medota ali mu se pristupa kao polju objekta
    ///setterom se postavljau ogranicenja
    set aMarka(m){ 
        if(m.includes("Citroen")) {
            console.log("Nije dozvoljena marka");
        } else {
        this.marka = m;}
    }
    get aBoja(){
        return this.boja;
    }
    set aBoja(b){
        this.boja = b;
    }
    get aImaKrov(){
        return this.imaKrov;
    }
    set aImaKrov(ik){
        this.imaKrov = ik;
    }
}
//---!!! ---- U KLASI NIKAD NE PISATI ARROW FUNKCIJU VEC OBICNU FUNKCIJU---!!!---

