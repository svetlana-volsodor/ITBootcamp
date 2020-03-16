import {Knjiga} from "./klKnjige.js";

let k1 = new Knjiga("Na Drini cuprija", "Ivo Andric", 2003, 1300, 830);
k1.stampaj();
console.log(k1.obimna());
console.log(k1.skupa());
//drugi nacin za ispis: pitamo da li je knjiga obimna
if(k1.obimna()){
    console.log("Knjiga je obimna")
} else {
    console.log("Knjiga nije obimna")
};
console.log(k1.dugackoIme());

let k2 = new Knjiga("Orlovi rano lete", "Branko Copic", 2006, 185, 340);
k2.stampaj();
console.log(k2.obimna());
console.log(k2.skupa());
if(k2.skupa()){
    console.log("Knjiga je skupa");
} else {
    console.log("Knjiga nije skupa");
}
console.log(k2.dugackoIme());

/*Napraviti niz od barem tri knjige

Ispisati sve autore kojima je ime dugačko

Ispisati sve one knjige koje su istovremeno i skupe i obimne

Napraviti funkicju kojoj se prosleđuje niz knjiga a ona određuje:

ukupnaCena - Koliko ukupno koštaju sve knjge u nizu knjiga

prosecnaCena - Kolika je prosečna cena knjige

prosecnaStranica - Kolika je prosečna cena stranice knjige*/

let k3 = new Knjiga("Ana Karenjina", "Lav Nikolajevic Tolstoj", 1996, 1200, 2300);

let nizKnjiga = [k1, k2, k3];

nizKnjiga.forEach(elem =>{
    elem.stampaj();
});

console.log('skupe i obimne knjige:');
nizKnjiga.forEach(elem =>{
    if(elem.skupa() && elem.obimna()){
        elem.stampaj();
    }
});

let ukupnaCena=(niz)=>{
    let s=0;
    
    niz.forEach(elem =>{
        s += elem.cena; 
        
    });
    return s;

};
console.log(`Ukuna cena je:${ukupnaCena(nizKnjiga)}`);

let prosecnaCena = (niz) =>{
    let prosek = ukupnaCena(niz) / niz.length;
    return prosek;
};
console.log(`Prosecna cena knjige je: ${prosecnaCena(nizKnjiga)}`);

//ukupno stranica:
let ukupnoStranica = (niz)=>{
    let ukupno =0;
    niz.forEach(elem=>{
        ukupno+= elem.brStrana;
    });
    return ukupno;
}

let prosecnaStranica = (niz)=>{
    let cena = ukupnaCena(niz);
    let str = ukupnoStranica(niz);
    let rez = cena / str;
    return rez;
};
console.log(`Prosecna cena po stranici svih knjiga je: ${prosecnaStranica(nizKnjiga)}`);