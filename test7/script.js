
import { Laptop } from "./laptop.js";

let l1 = new Laptop('45p9', 'crvena', 123);
let l2 = new Laptop('5o569', 'siva', 178);
let l3 = new Laptop('25fd', 'plava', 92);
let l4 = new Laptop('58tds', 'bela', 101);
let l5 = new Laptop('659p', 'crna', 93);

l1.ispisLaptopa();
l1.ispisRacunara();
l2.ispisLaptopa();
l2.ispisRacunara();
l3.ispisLaptopa();
l3.ispisRacunara();
l4.ispisLaptopa();
l4.ispisRacunara();
l5.ispisLaptopa();
l5.ispisRacunara();


let nizL = [l1, l2, l3, l4, l5];

let natprosecnoTeski = niz =>{
    let ukupnaTez = 0;
    niz.forEach(l =>{
        ukupnaTez += l.masa;
        
    });
    let avgTez = ukupnaTez / niz.length;
    let natTez = niz[0];
    niz.forEach(l=>{
        if(l.masa > avgTez){  
        natTez = l.ispisLaptopa();
        return natTez;
        }
    });
}
natprosecnoTeski(nizL);

let najcescaBoja = niz =>{
    let boje=[];
    niz.forEach(l=>{
        boje.push(l.boja)
    });
    let najcesca = boje[0];
    let pon = 0;
    let maxPon = 0;

 for (let i = 0; i<boje.length; i++){
     for(let j = 0; j<boje.length; j++){
        if(boje[i] == boje[j]){
            pon ++;
        }
     }
     if(pon > maxPon){
         maxPon = pon;
         najcesca = boje[i];
     }

     pon = 0;
  }
  console.log(`najcesca boja je ${najcesca}`);

}

najcescaBoja(nizL);
