//window.alert("Hello World!!!"); //poruka u alert box-u 
//komentar u jednoj liniji (do kraja linije) 
/*komentar u 
vise
linija, sve izmedju zvezdica i kosih crta, kao u CSS-u*/

//document.write("Hello World!!!");//dodavanje sadrzaja

console.log("Hello World"); //poruka u konzoli brauzera


document.getElementById("par1").innerHTML = "Hello World juhu";
console.log(55);
console.log(-3.996);
console.log('Vozi Misko');
console.log(true);
console.log(false);

let x = 3; //promenljiva "x" a vrednost je "3"
console.log(x);

let y;

y = -9;
x = 5;
console.log(y);

// let $p, _p, p1, p2, p3, p4; ovo su sve dozvojene promenljive, pomenljiva se jednom uvede u program i nadalje koristi

console.log(x, y); //moze vise promenljivih u jednoj komandi

const z = 8.04;
console.log(z);
// z = 5; - ne moze drugacija vrednost od isprva dodeljene jer je "z" konstanta!
console.log(z);
x = "utorak";
console.log(x, y);

x = "Volovo XC60";
y = 'Volvo XC60';
console.log(x, y);
x = "It's alright";
y = 'He is called "Johnny"';
console.log(x, y);
x = "He's called 'Johnny'.";
console.log(x);
x = 'he\'s called "Johnny"';
console.log(x);
x = "it's alright \"Johnny\"";
console.log(x); // ako u jednom stringu imamo i apostrofe i navodnike deaktiviramo ih tako sto stavimo backslash "\" ispred njih
x = true;
y = false;
console.log(x, y);

let m;
console.log(m, m + 3);

let n = null;
console.log(n, n + 3);

let firstName = "Marko";
let lastName = "Markovic";
let fullName = firstName + " " + lastName;
console.log(firstName, lastName, fullName);
//console.log(fullname); - nepostojeca promenljva razlicita od fullName jer je JS "case sensitive"
console.log(fullName.length); //.length - odredjuje duzinu promenljive



x = 8.7;
y = 3;
let t = x * y;
console.log(x, y, t);
x = 5;
y = 2;
t = x / y;
console.log(x, y, t);

x = 6;
y = 4;
console.log(x, y);
x = x + y;
console.log(x, y);

x = 8;
y = 4;
x *= y; //isto kao da je napisano 'x=x*y'
console.log(x, y);
x *= x + y;// kao da stoji "x=x*(x+y)"
console.log(x);
x++ //isto kao x = x + 1;
console.log(x);
x-- // isto kao x = x - 1;
console.log(x);

x = 4;
y = 9;
console.log(y % x); //ostatak pri deljenju

x = 3;
y = 9;
console.log(y**x);

let hours = 14;
let minutes = 36;

hours = hours * 60 + minutes;
console.log(minutes);

let cena = 825;
let novcanica = 1000;
let kusur = novcanica - cena;
console.log(kusur);

let evro = 117.2;
let dinari = 1 / 117.2;
console.log(1200 * dinari);
console.log(55 * evro);



let dinar = 1;
let kursDolari = 110 * dinar;
let kursEvro = 117 * dinar;
let kursDE = kursEvro / kursDolari;
console.log(kursDE);

evro = 100;
dolari = evro * kursEvro / kursDolari;
console.log(dolari);
dolari = evro * kursDE;
console.log(dolari);

 dolari = 150;
evro = dolari * kursDolari / kursEvro;
console.log(evro);
evro = dolari / kursDE;
console.log(evro);

let celzijus = 15;
let farenhajt = celzijus * 1.8 + 32;
console.log(farenhajt);

farenhajt = 100;
celzijus = (farenhajt - 32) / 1.8;
console.log(celzijus);

let kelvin = 150;
celzijus = kelvin - 273.15;
console.log(celzijus);

celzijus = -7;
kelvin = celzijus + 273.15;
console.log(kelvin);






