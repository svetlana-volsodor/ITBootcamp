let datum = new Date();
let sati = datum.getHours();
let div = document.getElementById('flower');

if((sati >= 9) && (sati < 17)) {
    console.log("Otvoreno");
    div.innerHTML = "<img src='otvoreno.jpg'>";
} else {
    console.log("zatvoreno");
    div.innerHTML = "<img src='zatvoreno.jpg'>";
}

let dan = datum.getDay();
let dat = datum.getDate();
let mesec = datum.getMonth() + 1;
let god = datum.getUTCFullYear();
let p = document.getElementById("vreme");


switch(dan){
    case 1: 
        p.innerHTML = `<p>Ponedeljak - ${dat}.${mesec}.${god}.god.</p>`;
        break;
    case 2:
        p.innerHTML = `<p>Utorak - ${dat}.${mesec}.${god}.god.</p>`;
        break;
    case 3:
        p.innerHTML = `<p>Sreda - ${dat}.${mesec}.${god}.god.</p>`;
        break;
    case 4:
        p.innerHTML = `<p>Cetvrtak - ${dat}.${mesec}.${god}.god.</p>`;
        break;
    case 5:
        p.innerHTML = `<p>Petak - ${dat}.${mesec}.${god}.god.</p>`;
        break;
    case 6:
        p.innerHTML = `<p>Subota - ${dat}.${mesec}.${god}.god.</p>` ;
        break;
    default:
        p.innerHTML = `<p>Nedelja - ${dat}.${mesec}.${god}.god.</p>`;} 
        
               


//zadatak 1:
let tezina = 230;
let postarina = tezina * 5;
let popust = postarina * 0.9;
console.log(`Cena bez popusta je ${postarina} dinara, cena sa popustom je ${popust} dinara`);

//zadatak 2:
let minuti = datum.getMinutes();
if(sati < 9) {
    console.log("Pre radnog vremena");
} else if (sati > 17) {
    console.log("Nakon radnog vremena")
} else {
    minuti = 17 * 60 - (sati * 60 + minuti);
    console.log(minuti);
}

//Zadatak 3:
let brCvetova = 30;
let plava = 18;
let zuta = 20;
let pz = plava + zuta - brCvetova;
let sz = zuta - pz;
let sp = plava - pz;
console.log(pz, sp, sz)
if(sp >= 10 && sz>=10 && pz>=5) {
    console.log("Ekskluzivan")
} else {
    console.log("nije ekskluzivan");
}


