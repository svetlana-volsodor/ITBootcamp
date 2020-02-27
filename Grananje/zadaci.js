let x = 80;
let y = 55;
let z = 3;
let max = x;
if(y > max) {
    max = y;
}
if(z > max) {
    max = z;
}
console.log(max);

//ako bih da zamenim vednosti dvema promenljivama moramo uvesti trecu promenljivu
let a = 5;
let b = 9;
let c = a;
a = b;
b = c;
console.log(a, b);

let broj = -5;
if (broj < 0) {
    console.log("Manji od nula")
}
if (broj < 10) {
    console.log("manji od deset")
}
else {
    console.log("veci ili jednako 10")
}

broj = -5;
if (broj < 0) {
    console.log("manji od nula")
}
else if (broj < 10) {
    console.log("manji od 10")
}
else {
    console.log("veci ili jednako 10")
}

let brPoena = 78;
if (brPoena > 90) {
    console.log("ocena je 10")
}
else if(brPoena > 80) {
    console.log("ocena je 9")
}
 else if (brPoena > 70) {
     console.log("ocena je 8")
 }
 else if(brPoena > 60) {
     console.log("ocena je 7")
 }
 else if(brPoena > 50) {
     console.log("ocena je 6")
 }
else {
    console.log("pao je")
}

let datum = new Date();
let danasnjiDatum = datum.getDay();//0 = Sunday, 1= Mon, 2 = Tue, 3 = Wedn, 4= Thursday, 5=Friday, 6= Saturday
if (danasnjiDatum == 0) {
    console.log("vikend je");
}
else if (danasnjiDatum <= 5) {
    console.log("radni dan je");
}
else {
    console.log("vikend je");
}

let trenSati = datum.getHours();
if (trenSati >= 18) {
    console.log("Dobro vece");
}
else if (trenSati >= 12) {
    console.log("Dobar dan");
}
else {
    console.log("Dobro jutro");
}

let dan1 = 7;
let mesec1 = 4;
let godina1 = 2020;
let dan2 = 15;
let mesec2 = 4;
let godina2 = 2020;

if (godina1 < godina2) {
    console.log("Prvi datum je raniji");
}
else if (mesec1 < mesec2) {
    console.log("Prvi datum je raniji");
}
else if (dan1 < dan2) {
    console.log("Prvi datum je raniji");
}
else {
    console.log("Drugi datum je raniji");
}

if(trenSati < 9) {
    console.log("zatvoreno");
}
if(trenSati > 17) {
    console.log("zatvoreno");
}
else {
    console.log("otvoreno");
}


let p1 = 9;
let k1 = 11;
let p2 = 12;
let k2 = 21;
if(( p1 <= p2 ) && ( p2 <= k1)) {
    console.log("preklapaju se");
}
else if(( p2 <= p1) && (p1 <= k2)) {
    console.log("preklapaju se");
}
else {
    console.log("ne preklapaju se");
}
//ili:

if(( p1 <= p2 ) && ( p2 <= k1) || ( p2 <= p1) && (p1 <= k2))
{console.log("preklapaju se")}
else { console.log("ne preklapaju se")}

broj = 18;
let paran
 if (broj % 2 == 0) {
     paran = true;
}
 else {
      paran = false;
     }
 console.log(paran);


let deljivSaTri
 if (broj % 3 == 0) {
     deljivSaTri = true
 }
 else {
     deljivSaTri = false
 }
 console.log(deljivSaTri)

 br1 = 15;
 br2 = 8;
 if(br1 > br2) {
     console.log(br1 -br2)
 }
 

 let boja = "crvena";
 switch(boja){

     case "plava":
     case "teget":
         console.log("Odabrali ste plavu boju");
         break;
     case "zelena":
     case "tirkizna":    
         console.log("Odabrali ste nijansu zelene boju");
         break;
     case "crvena":
     case "grimizna":
     case "bordo":
         console.log("Odabrali ste nijansu crvene boje");
         break;
     default:
         console.log("Neodgovarajuca boja");

 }

 let danas = datum.getDay();
 switch(danas) {
     case 1:
         console.log("Ponedeljak");
         break;
     case 2:
         console.log("Utorak");
         break;
     case 3:
         console.log("Sreda");
         break;
     case 4 :
         console.log("Cetvrtak");
         break;
     case 5 :
         console.log("Petak");
         break;
     case 6:
         console.log("Subota");
        break;
    default:
        console.log("nedelja")
 }

 let ocena = 4;
 switch(ocena) {
     case 1:
         console.log("nedovoljan")
         break;
     case 2:
         console.log("dovoljan")  ;
         break;
     case 3:
         console.log("dobar");
         break;
     case 4:
         console.log("vr.dobar") ;
         break;
     case 5:
         console.log("odlican");            
 }

 broj = 12
 switch(broj) {
     case 0:
         console.log("nula")
         break;
     case 2:
         console.log("dva");
         break;
     case 4:
         console.log("cetiri");
         break;
     case 6:
         console.log("sest")  ;
         break;
     case 8:
         console.log("osam") ;
         break;
     default:
         console.log("neadekvatan broj");      


 }