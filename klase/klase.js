import {Auto} from "./modules/prvi.js";
import Film from "./modules/film.js";
import Pacijent from "./modules/pacijent.js";
import {Pacijent as PacijentGS} from "./modules/pacijent_GS.js"



let datum = new Date(); 
//ovde je 'Date' ime klase i to je ugradjena klasa
// 'new' Date(); - kljucna rec koja kreira klase Date
//promenljiva datum cuva objekat klase Date

console.log(datum.getDay());

let niz1 = [1,2,3];
let niz2 = new Array(1,2,3); 
console.log(niz1);
console.log(niz2);
//new Array - klasa za kreiranje niza
console.log(niz1.length);

let o1 = {
    ime: "Pera",
    godine: 25
}
let o2 = new Object();
o2.ime = "Pera";
o2.godine = 25;
console.log(o1);
console.log(o2);
//new Object klasa za objekat

let s1 = "Pera";
let s2 = new String("Pera");//klasa za kreiranje stringa
console.log(s1);
console.log(s2);

//KLASA AUTO:
//kreiranje nove klase:


let auto1 = new Auto("Peugeot 208", "bela", false);//prosledjujem parametre klasi
//pozvan je konstruktor sa prosledjenim parametrima
//auto1.marka = "Peugeot 208"
//auto1.boja = "bela"
//auto1.imaKrov = false
let auto2 = new Auto("Mazda CX-30", "crvena", true);

console.log(auto1);
console.log(auto2);
auto1.sviraj(); //metode se pozivaju posebno
auto2.sviraj();
console.log(auto1.marka);
//auto1.marka = "Citroen";
console.log(auto1.aMarka); //---!!!--- GETTER se poziva bez zagrada!!! ---!!!!---, pristupa mi se kao polju objekta a postavlja se u klasi kao metoda
auto1.aMarka = "Citroen C5";
console.log(auto1.aMarka);
auto1.aBoja = "Plava";
console.log(auto1);

class Kafa {
    constructor (vrsta, tip, brend, cena, secer){
        this.vrsta = vrsta;
        this.tip = tip;
        this.brend = brend;
        this.cena = cena;
        this.secer = secer;
    }
}
let kafa1 = new Kafa("arabika", "espreso", "lavazza", "480", false);
console.log(kafa1);

//kreirati klasu film


let film1 = new Film("Otac", "Srdan Golubovic", 1600);
let film2 = new Film("Ko to tamo peva", "Slobodan Sijan", 1980);
let film3 = new Film("Ajvar", "Ana Marija Rossi", 2019);

film1.stampaj();
film2.stampaj();
film3.stampaj();


let pacijent1 = new Pacijent ("Pera Peric", 185, 88);
let pacijent2 = new Pacijent ("Mika Mikic", 178, 127);
let pacijent3 = new Pacijent ("Dunja Dunjic", 165, 60);
let pacijent4 = new Pacijent ("Sara Saric", 177, 44);

pacijent1.stampaj();
console.log(pacijent1.bmi());
console.log(pacijent1.kritican());

pacijent2.stampaj();
console.log(pacijent2.bmi());
console.log(pacijent2.kritican());

pacijent3.stampaj();
console.log(pacijent3.bmi());
console.log(pacijent3.kritican());

pacijent4.stampaj();
console.log(pacijent4.bmi());
console.log(pacijent4.kritican());

let f1 = new Film("Naked Gun", "David Zucker", 1500);
//f1.fGodina = 1599; //tek kad hocu da menjam polje, aktivira se setter, pa ce se ispisati 1800 a ne 1599
console.log(f1);
 
let p5 = new PacijentGS ("Luka Lukic", 269, -25);
console.log(p5);