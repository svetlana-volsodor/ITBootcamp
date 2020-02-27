let suma = function(a, b) {
    let s = a + b;
    return s;
}
console.log(suma(9, 4));
console.log(suma(1, 4));

//drugi nacin zapisa anonimne funkcije je zapravo ARROW FUNKCIJA

let suma2 = (a, b) => {
    return a + b;
}
console.log(suma2(9, 4));
console.log(suma2(1, 4));

//ispisib=vanje u konzoli
let hello = () => {  //stavlja se prazna zagrada jer nema parametara

    console.log("Hello World");
}
hello(); //OVAKO SE POZIVA ARROW FUNKCIJA
hello();

let echo = (s1, s2) => {
    let s = s1 + ", "+s2;
    console.log(s)
}
echo("Pera", "Mika");
echo("Mmm", "Nnn");

/*3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je
neparan ili netačno ukoliko nije neparan.*/
let neparan = (n) => {
    if(n%2!=0) {
        return true
    } else {
        return false
    }
}
console.log(neparan(5));

/*4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim
napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.*/
let maks2 = (a, b) => {
    if(a>b) {
        return a;
    } else {
        return b;
    }
}
console.log(maks2(2, 5));
console.log(maks2(11, 9));

let maks4 = (a, b, c, d) =>{
    let max1 = maks2(a, b);
    let max2 = maks2(c, d);
    /*if(max1>max2) {
        return max1;
    } else {
        return max2;
    }*/
    /*let max3 = maks2(max1, max2);
    return max3;*/
    let m1 = maks2(a, b);
    let m2 = maks2(m1, c);
    let m3 = maks2(m2, d);
    return m3;
    
}
console.log(maks4(12, 2, 7, 3));
console.log(maks4(54, -5, 2, 8));
console.log(maks4(-3, -9, -1, -18));

/*10. Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi
sa tri u intervalu od n do m.
Prebrojati koliko ima ovakvih brojeva od n do m.*/
let br=0;
let deljivSaTri = (n, m) => {
    for(let i = n; i<=m;i++){
        if(i%3==0) {
            br++
        }
    }
 return br;
}
console.log(deljivSaTri(2, 12));

//5)Napraviti funkciju koja prikazuje sliku za prosledjenu adresu slike.
//obicna funkcija:
 function slika(putanja) {
     return `<img src='${putanja}' alt='blabla'>`;//HTML tag koji pokazuje putanju kafotografiji
 }
 

 //arrow funkcija:
 let slika2 = (putanja) => {
     return `<img src='${putanja}' alt='blabla'>`;
 }
 //1) kada telo arrow funkcije se sastoji samo od return naredbe desava se skracenje:
let slika3 = (putanja) => `<img src='${putanja}' alt='blabla'>`; //nema potrebe za blokom
let div = document.getElementById('blabla');
div.innerHTML = slika3('images/Lisabontramvaj.jpg');

//Kad arrow funkcija prima samo jedan parametar ne treba staviti zagrade

let slika4 = putanja =>`<img src='${putanja}' alt='blabla'>`;
div.innerHTML += slika4('images/Rodosmacka.jpg');

let sledbenik = n => n+1;
console.log(sledbenik(5));//prakticna primena ARROW FUNKCIJE