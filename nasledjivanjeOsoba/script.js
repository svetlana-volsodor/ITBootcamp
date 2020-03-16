import {Osoba} from "./klase/osoba.js";
import {Zaposleni} from "./klase/zaposleni.js";
import { Sportista } from "./klase/sportista.js";
import { Kosarkas } from "./klase/kosarkas.js";

let o1 = new Osoba('Svetlana', 'Dimitrijevic', -1985);
o1.ispisiOsobu();

let z1 = new Zaposleni('Pera', 'Peric', 1982, 54000, 'ekonomista');
z1.ispisZaposleni();
z1.ekonomista();

let z2 = new Zaposleni('MIka', 'Mikic', 1988, 50000, 'ucitelj');
z2.ekonomista();

let radnici = [z1, z2];
let prosecnaPlata = (niz) =>{
    let s = 0;
    niz.forEach(elem =>{
        s += elem.plata;
    });
    let prosecna = s/niz.length;
    return prosecna;
}
console.log(prosecnaPlata(radnici));

//z1.natprosecnaPlata(prosecnaPlata(radnici));;
let avg = prosecnaPlata(radnici);
console.log(z1.natprosecnaPlata(avg));
console.log(z2.natprosecnaPlata(avg));

let s1 = new Sportista("Michael", "Schumacher", 1971, "Bonn");
s1.ispisiSportistu();

let k1 = new Kosarkas("Nikola", "Jokic", 1995,  "Sombor", [15, 22, 17, 21, 18, 9]);
k1.ispisKosarkas();

let k2 = new Kosarkas('Predrag', 'Stojakovic', 1977, 'Pozega', [20, 12, 15, 24, 10]);
let k3 = new Kosarkas('Vlade', 'Divac', 1968, 'Prijepolje', [12, 10 , 8, 15, 8, 11, 9, 6]);

let kosarkasi = [k1, k2, k3];

let najviseUtakmica = (niz)=>{
    let naj = niz[0];
    let najUt = niz[0].poeni.length;
    niz.forEach(elem => {
        let duz = elem.poeni.length;
        if(najUt<duz){
            najUt = duz;
            naj = elem;
        }
    });
    return naj;
};
najviseUtakmica(kosarkasi).ispisKosarkas();

let najvisePoena = (niz) =>{
    let max = niz[0].poeni[0];
    let maxKos = niz[0];
    niz.forEach(k =>{
        let poeni = k.poeni;
        poeni.forEach(p=>{
            if(p > max){
                max = p;
                maxKos = k;
            }
        });
    });
    return maxKos;
};
najvisePoena(kosarkasi).ispisKosarkas();

console.log(k1.prosecnoPoena());
console.log(k2.prosecnoPoena());
console.log(k3.prosecnoPoena());

let najviseProsecnoPoena = (niz)=>{
    let maxProsPo = niz[0].prosecnoPoena();
    let kosMaxProsPo = niz[0]; 
    niz.forEach(elem =>{
        if(elem.prosecnoPoena()>maxProsPo){
            maxProsPo = elem.prosecnoPoena();
            kosMaxProsPo = elem;
        }
    });
    return kosMaxProsPo;
};
najviseProsecnoPoena(kosarkasi).ispisKosarkas();