function zdravoSvete() {
    console.log("Zdravo svete!");
}
zdravoSvete();//tek kad se funkcija pozove ona obavi sta treba
console.log("***");
zdravoSvete();
for(i=1; i<=10;i++) {
    zdravoSvete();
}

//Funkcija sa peosledjenim jednim parametrom
function ispisi(tekst) {
    console.log(tekst);//tekst kao promenljiva

}
ispisi("blablabla");
ispisi("JavaScript");
let ime = "Ana";
ispisi(ime);
ispisi(17.3);

//Funkicja sa vise parametara
function ispisKorisnika(ime, prezime, godRodj ) {
    console.log(`Korisnik je ${ime} ${prezime}, rodjen ${godRodj}.`)

}
ispisKorisnika("Mika", "Mitic", 1981);
ispisKorisnika("Svetlana", "Dimitrijevic", 1985);
let korisnikIme = "Micko";
let korisnikPrezime = "Jocic";
let korisnikGodRodj = 1992;
ispisKorisnika( korisnikIme, korisnikPrezime, korisnikGodRodj);
//redosled promenljivih ne zanima funkciju, jedino je bitno da ih ima tri, jer ih je toliko definisano

//funkcija moze i da ispisuje racunske operacije
function zbir(x, y) {
    let z = x + y;
    console.log(z);//console.log(x+y)
}
zbir(5 , 6); 
zbir("2", "7");
zbir(6, "4");

//digitron
function digitron(a, b, o){
    let rez; //rez je rezultat
    if(o == "+") {
    rez = a + b;
    } else if(o == "-") {
        rez = a - b;
    } else if(o == "*") {
        rez = a * b;
    } else {
        if(b == 0) {
        rez = "nije dozvoljeno deliti nulom"} 
        else {
            rez = a / b;
        }
    }
    console.log(rez);
}
digitron(5, 3, "+");
digitron(5, 3, "-");
digitron(5, 3, "*");
digitron(5, 3, "/");
digitron(6, 0, "/");
digitron(5, 3, "aaa"); //smatra da je "aaa" deljenje!

//funkcija sa  vracanjem - return
function saberi(a, b) {
    let c = a + b;
    return c //na ovaj nacin mozemo kasnije van funkcije da manipulisemo ovom vrednoscu
}
let zBir = saberi(1, 5);
console.log(zBir);
let pom = zBir + 1;
console.log(pom);

let zbir1 = saberi(3, 4);
let zbir2 = saberi(2, 7);
let zbir3 = zbir1 + zbir2;
console.log(`${zbir1} + ${zbir2} = ${zbir3}`);
//drugi nacin:
zbir3 = saberi(zbir1, zbir2);
console.log(zbir3);

/*4)Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim 
napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.*/
function maks2(a, b) {
    if(a > b) {
        return a;
    } else {
        return b;
    }
}
let m = maks2(2, 5);
console.log(m);

function maks4(a, b, c, d) {
    let max1 = maks2(a, b);
    let max2 = maks2(c, d);
    let max3 = maks2(max1, max2);
    return max3
}

m = maks4(5, 3, 7, 4);
console.log(m)

/* 3)Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je
neparan ili netačno ukoliko nije neparan.*/
function neparan(n){
    if(n % 2 != 0) {
        return true;
    }
    else {
        return false;//moze da vraca i string a ne samo promenljive i logicke vrednosti
    }

}
let parNepar = neparan(12);
console.log(parNepar);
if(parNepar == true) {
    console.log('broj je neparan')
}else {
    console.log('broj je paran')
}

/*9) Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-
ti dan u nedjelji (npr. za 1 se ispisuje „Ponedjeljak“, za 7 ispisuje “Nedelja”, a
za 8 opet “Ponedeljak”).
Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini.*/
function sedmiDan(dan) {
    let pomDan = dan % 7; //pomocni dan
    switch(pomDan) {
        case 0:
            return "Nedelja";
            break;
        case 1:
            return "Ponedeljak"; 
            break;
        case 2:
            return "Utorak";
            break;
        case 3:
            return "Sreda"; 
            break;
        case 4:
            return "Cetvrtak";
            break;
        case 5:
            return "Petak" ;
            break;
        case 6:
            return "Subota";
            break;
        default:
            return "los unos";           
    }
}
let dan = sedmiDan(14);
console.log(dan);


function tekuciMesec(mesec) {
    let pomMesec = mesec % 12;
    switch(pomMesec) {
        case 0: 
            return "Januar";
            break;
        case 1:
            return "Februar";
            break;
        case 2:
            return "Mart" ;
            break;
        case 3:
            return "April";
            break;
        case 4:
            return "Maj" ; 
            break;
        case 5:
            return "Jun" ;
            break;
        case 6:
            return "Jul" ;
            break;
        case 7:
            return "Avgust" ;
            break;
        case 8:
            return "Sept";
            break;
        case 9:
            return "Okt";
            break;
        case 10:
            return "Nov";
            break;
        case 11:
            return "Dec" ;
            break;
        default:
            return "Napravilan unos"                                     
    }
}
let mesecJe= tekuciMesec(15);
console.log(mesecJe);