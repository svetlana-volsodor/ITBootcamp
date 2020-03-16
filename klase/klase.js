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

let f1 = new Film("Naked Gun", "David Zucker", 1500, [10, 8, 7, 9]);
//f1.fGodina = 1599; //tek kad hocu da menjam polje, aktivira se setter, pa ce se ispisati 1800 a ne 1599
console.log(f1);
let f2 = new Film("Avatar", "Dzejms Kamerun", 2009, [3, 8.5, 9, 10, 6]);
let f3 = new Film("Ambis", "Dzejms Kamerun", 1989, [8, 9, 7.5, 8.8, 10]);
 
let p5 = new PacijentGS ("Luka Lukic", 269, -25);
console.log(p5);

//pacijenti:
let p1 = new PacijentGS( "Ana", 173, 70);
let p2 = new PacijentGS("Mira",165, 55);
let p3 = new PacijentGS("Sonja", 176, 65);

let nizPacijenti = [p1, p2, p3];

//ispisati podatke o pacijjentu sa najmanjom tezinom
let minPac = nizPacijenti[0];//cuva ceo objekat, celog pacijenta
let minTez = nizPacijenti[0].pTezina;
console.log(minTez);
nizPacijenti.forEach(elem=>{
    if(minTez>elem.pTezina){
        minPac = elem;
        minTez = elem.pTezina;
    }
});
minPac.stampaj();

//Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
let maxPac = nizPacijenti[0];
let maxBmi = nizPacijenti[0].bmi();
nizPacijenti.forEach(elem=>{
    if(maxBmi<elem.bmi()){
        maxPac = elem;
        maxBmi = elem.bmi();
    }
});
console.log(`Pacijent sa najvecim BMI je: `);
maxPac.stampaj();


let filmovi = [f1, f2, f3];

//ispis ocena ovih filmova:
filmovi.forEach(elem=>{
    let ocene = elem.fOcena;
    console.log(ocene);
    ocene.forEach(o=>{
        console.log(o);
    });
});

console.log(f1.prosecnaOcena());

let filmVek = (niz, odGod, doGod)=>{
    niz.forEach(elem=>{
        if(elem.fGodina>=odGod && elem.fGodina<=doGod) {
            elem.stampaj();
        }
    });

}
filmVek(filmovi, 1999, 2020);

//prosecna ocena svih filmova:

let prosOcena = (niz) => {
    let s = 0;
    let br = 0;
    niz.forEach(film=>{
        let ocene = film.fOcena;
        //moglo je: brojOcena += ocene.lenght
        ocene.forEach(o=>{
            s+=o;
            br++;
        });
    });
    let arSr = s/br;
    return arSr;
};
console.log(`Prosecna ocena svih filmova je ${prosOcena(filmovi)}`);


//nejboljeOcenjeni vraca onaj sa najboljom ocenom:
let najboljeOcenjeni = (niz) =>{
    let naj = niz[0];
    niz.forEach(film =>{
        let p = film.prosecnaOcena();
        if(p > naj.prosecnaOcena()){
            naj = film;
        }
    });
    return naj;
}; 
console.log(`Najbolje ocenjeni film je: `);
najboljeOcenjeni(filmovi).stampaj();

//funkcija osrednji film, prosecna ocena filma da bude najbliza globanoj prosecnoj:

let osrednjiFilm = (niz) =>{
    let globalniProsek = prosOcena(niz);
    //globalniProsek moze biti 6.2
    //f1 = 4.5 - prosecna ocena filma 1
    //f2= 7 -prosecna ocena film 2
    //treba nam apsolutna vrednost
    //|-7|==|+7|
    let najbliziElem = niz[0];
    let najbliziProsek = Math.abs(niz[0].prosecnaOcena() - globalniProsek); //pozivam metod prosecnaOcena();Math.abs()-apsolutna vrednost
    niz.forEach(elem=>{
        let pom = Math.abs(elem.prosecnaOcena - globalniProsek); //pomocna za aktuelni element
        if(pom < najbliziProsek) {
            najbliziElem = elem;
            najbliziProsek = pom;
        }
    });
    return najbliziElem;
};
let osr = osrednjiFilm(filmovi);
console.log("provera");
osr.stampaj();
console.log(f1.prosecnaOcena());
console.log(f2.prosecnaOcena());
console.log(f3.prosecnaOcena());

//funkcijja najcesca ocena: - --!!!ZADATAK KAKAV CESTO DAJU NA INTERVJUIMA ZA POSAO---!!!
let oc = [10, 9, 1, 5 , 4.002, 8.3, 1, 5, 5,1, 1, 1, 1, 9, 7, 6, 5];

let najcescaOcena = (niz)=>{

 };
 let najcesca = oc[0]; //postavljena pretpostavka
 let ponavljanje = 0; //pretpostavka o ponavljanju
 let maxPonavljanja = 0;

 for (let i = 0; i<oc.length; i++){
     for(let j = 0; j<oc.length; j++){
        if(oc[i] == oc[j]){
            ponavljanje ++;
        }
     }
     if(ponavljanje > maxPonavljanja){
         maxPonavljanja = ponavljanje;
         najcesca = oc[i];
     }
     ponavljanje = 0;  //resetovanje ponavljanja da bi svaki put kad krene po nizu da broji krenuo od nule
 }
console.log(`Najfrekventnija ocena je: ${najcesca}.`);


//iznadOceneNoviji
