//Hvatamo trenutno vreme
//1) kreiramo object date
let datum = new Date();

let sati = datum.getHours();//koliko je trenutno sati
let minuti = datum.getMinutes();//koliko je trenutno minuta
console.log(sati, minuti);

let minutaOdPonoci = sati * 60 + minuti;
console.log(minutaOdPonoci);

let a = 3;
let b = 5;
console.log(a+b);//rezultat je broj 8

a = "3";
b = "5";
console.log(a+b);//rezultat je konkatenacija stringova "35"

a = 3;
b = "5";
console.log(a+b);//rezultat je opet string "35"; broj prelazi u string

let c;

a = "5";
b = 3;
c = 5;
console.log(a+b+c); //ponovo se dobija string, tj. posto je prva promenljiva string svi nakon njega postaju string

console.log(b+c+a);//rezultat j string ali najpre sabere brojeve pa sve predstavi kao string
/* STRING IMA PRIORITET*/

console.log("prvi broj je: " + b + ", a drugi je: " + c);

//Template string izmedju - `` (backticks) (levo od 1 na tastaturi)
//obocan string izmedju '' ili ""
console.log(`Prvi broj je: ${b}, a drugi je: ${c}`);//template string
console.log('Prvi broj je: ${b}, a drugi je: ${c}');//obican string
console.log(5 / "hello");