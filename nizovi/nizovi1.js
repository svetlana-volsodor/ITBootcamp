let cars = ["toyota", "bmw", "opel"];//element je string
console.log(cars);
console.log(cars[0]);//pristupa elementu cii je index "0", tj. toyoti
console.log(cars[2]);//index 2 tj. opel
console.log(cars[1]); //index 1 tj. bmw
console.log(cars[3]); //nedefinisana vrednost

//ZA NIZ OD 'n' ELEMENATA INDEKSI SU: 0, 1, 2,..., n-1
 
cars[1] = "ford";
console.log(cars);

let test = [6.07, "sreda", -9, false];
console.log(test);

//ispis svih elemenata niza:
for(let i=0; i < cars.length; i++) {   //.length - duzina niza
    console.log(cars[i]);
    }
//drugi nacin:
for(let i=0; i <= cars.length-1; i++)  {
    console.log(cars[i]);
}  


//ispis svih elemenata u obrnutom redosledu:
for(let i = cars.length - 1; i >= 0; i--) {
    console.log(cars[i]);
}

//ZADACI:
// 2)Odrediti zbir elemenata celobrojnog niza.:
let niz = [1, 2, 3, 4, 5];
let s = 0;
for(let i = 0; i < niz.length; i++) {
    s = s + niz[i];
}
console.log(s);

//3)Odrediti proizvod elemenata celobrojnog niza:
let p = 1;
for(let i = 0; i < niz.length; i++) {
    p = p * niz[i];
}
console.log(p);

//4)Odrediti srednju vrednost elemenata celobrojnog niza.:
s=0;

for(let i=0; i<niz.length; i++) {
    s = s + niz[i];

}
let arsr;
if(niz.length==0) {
    arsr = 0;
} else {
 arsr = s / niz.length;} //ne treba nam brojac "br" jer "niz.length" vec sadrzi vrednost koja nam treba
console.log(arsr);


//5)Odrediti maksimalnu vrednost u celobrojnom nizu.

niz=[5, -9, 6, -4,-5, 5, 9, 7, 8, 0, -2];
let max=niz[0];//greska "max=0", jer nekada niz moze imati samo negativne vrednosti
for(let i = 1; i<niz.length; i++) { //let i = "1" jer je "0" vec dodeljena promenljivoj "max"
    if(max < niz[i]) {
        max = niz[i];
    }
}
console.log(max)

//6)Odrediti minimalnu vrednost u celobrojnom nizu.
let min=niz[0];
for(let i = 1; i < niz.length; i++) {
    if(min > niz[i]) {
        min = niz[i];
    }
}
console.log(min);

// Napisati ARROW funkciju koja vraca minimalni element niza:
let minArrow = niz => {
    let min = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(min > niz[i]) {
            min = niz[i];
            }
    }
    return min;
}
console.log(minArrow(niz));
console.log(minArrow([1, -7, 8, -6, 15, 5, 4]));



//7)Odrediti indeks najvećeg elementa celobrojnog niza.
let maxIndex = niz => {
    let max = niz[0];
    let index = 0;
    for(let i = 1; i < niz.length; i++) {
        if(max < niz[i]) {
            max=niz[i];
            index = i;
        }
    }
    return index;
}
console.log(maxIndex(niz));
console.log(maxIndex([1, 5, 6, 9, 12, 4]))

//8)Odrediti indeks najmanjeg elementa celobrojnog niza.
let minIndex = niz => {
    let min=niz[0];
    let index = 0;
    for(let i=1; i< niz.length; i++) {
        if(min > niz[i]) {
            min = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(minIndex(niz));
console.log(minIndex([1, 7, -3, 4, 6, 8]));

//
let arSred = niz => {
    let s=0;
    for(let i=0; i < niz.length; i++) {
        s += niz[i];

    }
    return s / niz.length;
}

//9)Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let brEl = niz => {
    let s = 0;
    for(let i = 0; i < niz.length; i++) {
        s = s + niz[i];
    }
    let arsr= arSred(niz); 
    let br = 0;
    for(let i = 0; i < niz.length; i++) {
        if(arsr < niz[i]) {
            br++
        } 
    }
    return br
}
console.log(brEl(niz));
console.log(brEl([1, 2, 3, 4]));

//


//10)Izračunati zbir pozitivnih elemenata celobrojnog niza
let zbir = niz => {
    let s = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] >= 0) {
            s = s + niz[i];
        }

    }
    return s;
}
console.log(zbir(niz));
console.log(zbir([1, 2, -3, -4, 5]));

//11)Odrediti broj parnih elemenata u celobrojnom nizu.
let parni = niz => {
    let br=0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0) {
            br++
        }
    }
    return br;
}
console.log(parni(niz));
console.log(parni([1, 2, 3, 4,5,6]));

//12)Odrediti broj parnih elemenata sa neparnim indeksom.
let brParNepInd = niz => {
    let br=0;
    for(let i = 0; i < niz.length; i++) {
        if((niz[i] % 2 == 0) && (i%2!=0)) {
            br++
        }
    }
    return br;
}
console.log(brParNepInd(niz));
console.log(brParNepInd([2,4,6,8,1,1,1,6]));

//14)Promeniti znak svakom elementu celobrojnog niza.
let znak = niz => {
    for(let i=0; i<niz.length; i++) {
        niz[i]=niz[i] * -1;//niz[i]*=-1
    }

}
znak(niz);
console.log(niz);//pozivanje funkcije pa ispisivanje

/*16)Dat je niz stavki za kupovinu (članovi niza su stringovi).
Prolaskom kroz niz napraviti neuređenu listu i ispisati je u
html dokument.*/
let lista = niz => {
    /*elementi niza su stringovi!!!
    ["jaja", "mleko", "jogurt"]
    <ul>
        <li>jaja</li>
        <...
    </ul>  */
    let result = ""; //"" prazan string je neutral za konkatenaciju
    result += "<ul>";
    for(let i = 0; i<niz.length; i++) {
        result+=`<li>${niz[i]}</li>`;
    }
    result+="</ul>";
    return result;
}
let div = document.getElementById('blabla');
div.innerHTML = lista(["jaja", "mleko", "jogurt"]);

/*17) Dat je niz imena košarkaškog tima. Prolaskom kroz niz
formirati tabelu u čijim su redovima imena tima, i tabelu
ispisati u html dokument.*/
let nizTimova = ["Denver Nuggets", "Sakramento", "Chicago Bulls", "Atlanta Hawks", "Boston Celtics", "Charlotte Hornets", "Cleveland Cavaliers"];
let tabela = "<table>";
for(let i = 0; i < nizTimova.length; i++) {
    tabela += `<tr><td>${nizTimova[i]} </td></tr>`;
}
tabela += "</table>"
let divTabela = document.getElementById('tabela');
divTabela.innerHTML = tabela;

//u tabeli u istom redu:
tabela = "<table><tr>";
for(let i = 0; i < nizTimova.length; i++) {
    tabela += `<td>${nizTimova[i]} </td>`; 
}
tabela += "</tr></table>"
divTabela = document.getElementById('tabela2');
divTabela.innerHTML = tabela;

/*<table>
    <tr><td>tim a</td></tr>
    <tr><td>tim b</td></tr>
    <tr><td>tim c</td></tr>
</table>*/


/* 18) Dat je niz stringova čiji su članovi putanje do slika.
Prikazati sve sliku u html dokumentu sa putanjama
navedenim u nizu.*/
let nizSlika = ['Lisabontramvaj.jpg', 'otvoreno.jpg', 'Rodosmacka.jpg'];
let slike = "";//prazan string kao neutral jer ne postoji tag koji otvara sliku kao kod tabele <table>
for(let  i = 0; i < nizSlika.length; i++) {
    slike += `<img src=${nizSlika[i]}><br>`;//<br> ako zelim da su slicice jedna ispod druge, u novim redovima
}
div = document.getElementById('slike');
div.innerHTML = slike;

//STRINGOVI I NJIHOVI METODI:

//Kako odrediti duzinu stringa:
let str = 'Zdravo svete!' //string je kao niz, svaki element ima svoju poziciju od "0" pa nadalje
//Duzinna stringa :
console.log(str.length);

//Da li sadrzi neki slovni karakter - "includes":
console.log(str.includes('v')) //stavim pod navodnicima koji karakter zelim da nadjem VELIKA I MALA SLOVA - CASE SENSITIV!!!
if(str.includes('o')) {
    console.log('String sadrzi slovo "o"');
} else {
    console.log('String ne sadrzi slovo "o"');
}

//Da li sadrzi karakter na specificiranoj poziciji - dva parametra
console.log(str.includes('Z', 0));

//Vraca index za prvi uneti karakter na koji naidje - "indexOf"
console.log(str.indexOf('e'));

//Poslednji index slova - "lastIndexOf" - vraca poslednji uneti karakter 
console.log(str.lastIndexOf('e'));

//Ispituje prvo slovo reci - "startsWith"
console.log(str.startsWith('Z'));

//Ispituje koje je poslednje slovo stringa - "endsWith"
console.log(str.endsWith('?'));

//slice - odakle poceti ( od koje pozicije) podstring, gde zavrsiti (do koje pozicije) podstring
console.log(str.slice(3, 5));//ne ukljucuje karakter na poziciji 5

//substr - odakle poceti (od koje pozicije) podstring, koliko elemenata od te pozicije na dalje uzeti
console.log(str.substr(3, 5));

//replace - zamenjuje neki karakter nekim drugim (vazi samo za prvo slovo ako ih je vise)
console.log(str.replace('e', 'w'));
console.log(str.replace('avo' , 'bre'));


// 19)Ispisati dužinu svakog elementa u nizu stringova.
for(let i = 0; i < nizTimova.length; i++) {
    let duzReci = nizTimova[i].length;
    console.log(duzReci)
    //console.log(nizTimova[i].length)
}

//20)Odrediti element u nizu stringova sa najvecom duzinom
max = nizTimova[0].length;
for(let i = 0; i < nizTimova.length; i++) {
    if(max < nizTimova[i]) {
        max = nizTimova[i];
    }

}
console.log(max)

let najduzaRec = nizTimova => {
    let max = nizTimova[0].length;
    let maxRec = nizTimova[0];
    for(let i = 1; i < nizTimova.length; i++) { //i=1; jer smo vec pretpostavili i0 u postavci
        if(max < nizTimova[i]) {
            max = nizTimova[i];
            maxRec = nizTimova[i];//naziv tima - tj. konkretni string
        }
    }

    return maxRec;
}
console.log(najduzaRec(nizTimova));

//*prosek slova, tj duzine svih reci
let prosekSlova = nizTimova => {
    let s = 0;
    for(let i = 0; i < nizTimova.length; i++) {
        s += nizTimova[i].length;
        
        }
    let arsr = s / nizTimova.length;
    return arsr;
    }
    console.log(prosekSlova(nizTimova));

//* Ispisati natprosecno dugacke reci:
let natprosecnoDugacke = niz => {
    let ar = prosekSlova(niz);
    for(let i=0; i < niz.length; i++) {
        if(niz[i].length > ar) {
            console.log(niz[i]);
        } 
    }
}
natprosecnoDugacke(nizTimova);

//21) Odrediti broj elemenata u nizu stringova čija je dužina
//veća od prosečne dužine svih stringova u nizu.
    
let brojNatprosecnoDugacke = niz => {
    let ar = prosekSlova(niz);
    br = 0;
    for(let i=0; i < niz.length; i++) {
        if(niz[i].length > ar) {
            br++
            } 
    }
    return br;
}
console.log(brojNatprosecnoDugacke(nizTimova));

//22)Odrediti broj elemenata u nizu stringova koji sadrže slovo
//'a’.
let imaSlovoA = nizTimova => {
    let  br = 0;
    for(let i = 0; i < nizTimova.length; i++) {
        if(nizTimova[i].includes('a')) {
            br++
        }
    }
    return br;
}
console.log(imaSlovoA(nizTimova));
//*
let brojElemenataSaKarakterom = (niz, slovo) =>{
    let br = 0;
    for(let i = 0; i<niz.length; i++) {
        if(niz[i].includes(slovo)) {
            br++;
        }
    }
    return br;
}
console.log(brojElemenataSaKarakterom(nizTimova, 'a'));


//23)Odredii broj elemenata koji pocinju slovom "a" ili "A"
let brojElemenataKojiPocinjuSlovom = (niz, slovo) =>{
    let br = 0;
    for(let i = 0; i<niz.length; i++) {
        //slovo.toUpperCase() - za pretvaranje slova u veliko slovo
        //slovo.toLowerCase() - za pretvaranje slova u malo slovo
        //if(niz[i].startsWith('a') || niz[i].startsWith('A'))  
        if(niz[i].startsWith(slovo.toLowerCase()) || niz[i].startsWith(slovo.toUpperCase())) {
            br++;
        }
    }
    return br;
}
console.log(brojElemenataKojiPocinjuSlovom(nizTimova, 'b'));
console.log(brojElemenataKojiPocinjuSlovom(nizTimova, 'c'));
console.log(brojElemenataKojiPocinjuSlovom(nizTimova, 'a'));

//24) Dati su nizovi a[0], a[1], ...a[n-1]
//b[0], b[1]
let a = [2,5,7];
let b = [-7, -5 ,-9];
let c = []; //mora biti prazan na poctku da bi bilo mesta za dodavanje novih elemenata
for(let i=0; i<a.length; i++){
    c.push(a[i]);
    c.push(b[i]);
} 
console.log(c);
console.log(c.pop())
c.pop()
console.log(c)


//25)
let proizvodElemenata = (a, b) => {
    let c = [];
    for(let i =0; i<b.length; i++) {
        c.push(a[i]*b[i]);
    }
    return c;
    
}
console.log(proizvodElemenata(a, b));

//26)Na osnovu niza a formirati niz b
a = [2, 4 , 6, 12, 10, 14];
//   0  1   2  3   4  5
b = [];
let n = a.length / 2;
for(let i = 0; i<n; i++) { 
    let i_pom = a.length - i -1;
    b.push((a[i] + a[i_pom])/2)
}
console.log(b);
