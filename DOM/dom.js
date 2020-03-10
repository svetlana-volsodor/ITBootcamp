//Query selektor po imenu tag-a:
let paragraf = document.querySelector('p');
console.log(paragraf);  //selektuje samo prvi selektor za paragraf, cim nadje prvi takav prestaje da trazi
let div = document.querySelector('div');
console.log(div);

//Query selektor po imenu klase:
let klasaTest = document.querySelector('.test');
console.log(klasaTest);

let klasaTestParagraf = document.querySelector('p.test') //prvi paragraf sa klasom test,PRVO TAG A POTOM ID
console.log(klasaTestParagraf);

//Query selektor po ID-ju:
let idParagraf = document.querySelector('#treci_paragraf');
console.log(idParagraf);

//Query selektor All - za sve tabove istog naziva:
let sviParagrafi = document.querySelectorAll('p');
console.log(sviParagrafi);
console.log(typeof sviParagrafi);
//pristupanje elementu NODE LISTE:
console.log(sviParagrafi[0]);

//kretanje kroz NODE LISTU:
sviParagrafi.forEach(elem => {
    console.log(elem);
});

//documentsByClassName:
let klasaTestDoc = document.getElementsByClassName('test');
console.log(klasaTestDoc);

//neuspelo kretanje foreach-om kroz HTML kolekcijom
//klasaTestDoc.forEach(elem=>{
//    console.log(elem);
//});

console.log(klasaTestDoc[0]); //pristupanje elementu colekcije; tj. moguce je pristupiti for petljom
//kretanje HTML kolekcijom pomocu for petlje:
for(let i = 0; i < klasaTestDoc.length; i++) {
    console.log(klasaTestDoc[i]);
};

//innerText- menjanje postojeceg ili dodaavanje novog teksta na stranicu
paragraf.innerText = "Zdravo!";
paragraf.innerText += "Kako si?"
//dodavanje sadrzaja innerHTML-om ; ide sa TAG-ovima
paragraf.innerHTML += "<span><b>Sta ima novo?</b></span>";

//VEZBANJE:
//Selektovati sve paragrafe i u svakom od njih pridodati tekst „VAŽNO!!!“:
sviParagrafi.forEach(elem =>{
    //elem.innerText += "Vazno!!!";
    elem.innerHTML += '<b>VAZNO!!!</b>';
});

//Ispisati kvadrate brojeva od 1 do n, svaki u novom paragrafu:
sviParagrafi.forEach((elem, index) =>{//u forEach-u podrazumeva se da je drugi parametar INDEX!!!
    //console.log(index);
    let kv = (index+1) * (index+1);// kv=(index+1)**2
    elem.innerText += ` ${kv}`;
});

//Napraviti niz od najmanje tri imena.
//Proći nizom i imena ispisati:

//Svako u novom paragrafu

let imena = ['Jovana', 'Miljana', 'Milena'];
sviParagrafi.forEach((elem, index) => {
    elem.innerText += ` ${imena[index]}`;
});

//U listi kao stavke liste

let lista = document.querySelector('ul');
imena.forEach(elem => {
    let item = `<li> ${elem} </li>`;
    lista.innerHTML += item;
});

///U jednoj koloni tabele
let tabela = document.querySelector('table');
let sadrzaj ="";
imena.forEach( ime =>{
    let item = `<tr><td>${ime}</td></tr>`;
    sadrzaj += item;
});
tabela.innerHTML += sadrzaj;


//selektovanje sve dece jednog roditelja; njime se ne moze kretati forEach (moze for petljom), pa cemo je konvertovati u NIZ:
let potomci = document.body.children;// moze samo document.head i document.bocy; ostalim tagovima se pristupa preko querySelector-a
console.log(potomci);
//HTML kolekcija pa ne moze forEach, zato vrsimo konverziju u niz:
let niz = Array.from(potomci);  //konvertovanje kolekcije u niz funkcijom Array.from()!!!
niz.forEach(elem =>{
    console.log(elem);
});
//hvatanje dece ul liste:
//let lista = document.querySelector('ul'); da je nismo imali vec

let decaListe = lista.children;
console.log(decaListe);
let nizDecaListe = Array.from(decaListe)
nizDecaListe.forEach(elem => {
    console.log(elem);
});
