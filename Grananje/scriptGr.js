let a = 5;
let b = 8;
if (a > b) 
{
    console.log(`${a} je vece od ${b}`);
} //ne stavlja se ";" jer je "if" komanda zatvorena sama po sebi pa kad zatvorimo {} zatvorili smo komandu. "If" je block komanda.
console.log("komanda posle 'if'");

a = 6;
b = '6';
if (a == b){
    console.log(`${a} je jednako ${b}`);
}
if(a != b){
    console.log(`${a} nije jednako ${b}`)
}
if (a !== b){
    console.log(`${a} nije jednako ${b} po tipu i vednosti`)
}
if (a === b){
    console.log(`${a} jednako ${b} po tipu i vrednosti`)
}

//"if else"
a = 5;
b = 12;

if (a > b){
    console.log(`${a} je vece od ${b}`);
}
else {
    console.log(`${a} nije vece od ${b}`);
}

if (a == b){
    console.log(`${a} je jednako ${b}`);
}
else {
    console.log(`${a} nije jednako ${b}`);
}

if (a === b){
    console.log(`${a} jednako ${b} po tipu i vrednosti`);
}
else {
    console.log(`${a} nije jednako ${b} po tipu i vrednosti`);
}

let temperatura = -4;
if (temperatura >= 0) {
    console.log("Temperatura je u plusu");
}
else {
    console.log("Temperatura je u minusu");
}

let pol = "z";
let div = document.getElementById('blabla');
if (pol == "z") {
    console.log("zenski avatar");
    div.innerHTML = "<img src='female.png' alt='zenski'>";
}
else {
    console.log("muski avatar");
    div.innerHTML = "<img src='male.png' alt='muski'>";
}

let datum = new Date();
let sati = datum.getHours();
if (sati >= 12) {
    console.log("Trenutno je popodne");
}
else {
    console.log("Trenutno je jutro");
}


let trenutnaGodina = datum.getFullYear();
let godinaRodjenja = 1985;
if (trenutnaGodina - godinaRodjenja >= 18) {
    console.log("Osoba je punoletna");
}
else {
    console.log("Osoba je maloletna");
}

let c = 3;
a = 150;
b = 55;

if (a > b) {console.log(`${a} je vece od ${b}`);}
if (a > c) {console.log(`${a} je najveci broj`);}
else if(b > c) {console.log(`${b} je najveci broj`);}
else {console.log(`${c} je najveci broj`);}

let x = 9;
let y = -3;
let z = 15;
let max = x;
if (y > max) {
    max = y;
}
if (z > max) {
    max = z;
}
console.log(max);