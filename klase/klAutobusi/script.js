import {Autobus} from "./autobus.js";

let a1 = new Autobus("NI111AA", 64);
a1.stampaj();
let a2 = new Autobus("BG222BB", 38);
let a3 = new Autobus("PO748KL", 54);

let autobusi = [a1, a2, a3];

let ispisAutobusa = (autobusi)=>{
    autobusi.forEach(a =>{
        a.stampaj();
    });
}
ispisAutobusa(autobusi);


let ukupnoSedista =(autobusi)=>{
    let ukupno=0;
    autobusi.forEach(a=>{
        ukupno+=a.brSedista;
    });
    return ukupno;
}
console.log(`Ukupan broj sedista je: ${ukupnoSedista(autobusi)}`);




let ljudi = (brLjudi, niz)=>{
    let ukupno = ukupnoSedista(niz);
    if(ukupno>=brLjudi){
        return true;
    } else {
        return false;
    }
};
console.log(ljudi(160, autobusi));
console.log(ljudi(125, autobusi));