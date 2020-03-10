//TO DO LISTA:

let ulZadaci=document.querySelector('ul');
let liZadaci = document.querySelectorAll('li');
let inputUnos = document.querySelector('#unesi')
let btnDodaj = document.querySelector('button')

ulZadaci.addEventListener('click', (e)=>{
    if(e.target.tagName == "LI"){
        e.target.remove();
    }
});
 
let dodavanjeItema = () => {
    let noviZadatak = document.querySelector('input').value;
    let rbDodajPocetak = document.querySelector('#dodajNaPocetak');
    
    if(noviZadatak == ""){
        alert('Morate uneti zadatak!');
    } else {
    let noviItem = document.createElement('li'); 
    noviItem.textContent = noviZadatak;

    if(rbDodajPocetak.checked){
        ulZadaci.prepend(noviItem);
    } else {ulZadaci.append(noviItem);}
}
     document.querySelector('input').value = "";
};
btnDodaj.addEventListener('click', () =>{  
    dodavanjeItema();
});
inputUnos.addEventListener('keyup', (e)=>{
    if(e.keyCode == 13){
        dodavanjeItema();
    }
});

//// KVIZ:

let formSubmit = document.querySelector('form');
let tacniOdgovori = ["A", "B", "C", "B", "A"];
let divPopUp = document.createElement('div');
let text = document.createElement('h1');
text.classList.add('naslov');
divPopUp.appendChild(text);
let divQuiz = document.querySelector("#quiz");
let whereChild = divQuiz.children[1];
divQuiz.insertBefore(divPopUp, whereChild);
divPopUp.style.display = "none";

formSubmit.addEventListener('submit', (event)=>{
    event.preventDefault();


let odg1 = formSubmit.q1.value;
let odg2 = formSubmit.q2.value;
let odg3 = formSubmit.q3.value;
let odg4 = formSubmit.q4.value;
let odg5 = formSubmit.q5.value;

//console.log(odg1, odg2, odg3, odg4, odg5)
let odgovori = [odg1, odg2, odg3, odg4, odg5];
let score = 0;
odgovori.forEach((odgovor, index) => {
    if(odgovor == tacniOdgovori[index]){
        score += 20;
    }
});
divPopUp.style.display = "block";
scrollTo(1349, 500); 
let broj = 0;
let clock = setInterval(()=>{
    text.textContent = `Vas odgovor je: ${broj}%`;
    if(broj<score){
        broj++;
    } else {
        clearInterval(clock);
    }
}, 50); 
});

/////DOM:

//dodati VAZNO!!! svakom paragrafu
let paragraf = document.querySelectorAll("p.dom");
paragraf.forEach(elem =>{
    elem.innerText += "Vazno!!!"; 
});
//Dodati novi tag h1 sa tekstom naslova
let divDom = document.querySelector("#dom");
//divDom.innerHTML += `<h1>"Vezbanje DOM"</h1>`;
let naslov = document.createElement('h1');
divDom.prepend(naslov);
naslov.innerText = "Vezbanje DOM"
let prvi = document.querySelector("p.dom");
//divDom.insertBefore(naslov, prvi);
//Svakom paragrafu dodati kvadrat brojeva od 1 do n(koliko je paragrafa)
paragraf.forEach((e, index)=>{
    let kvadrat = (index+1) *(index+1);
    e.innerText += ` ${kvadrat}`; 
});
//niz imena ispisati u paragrafima, pa u listi i u jednoj kolini tabele:
let imena = ['Danilo', 'Naum', 'Gala' ];
paragraf.forEach((e, index)=>{
    e.innerText += ` ${imena[index]}`;
});

let lista = document.createElement('ul');
divDom.appendChild(lista);
imena.forEach((e)=>{
    let item = `<li>${e}</li>`;
    lista.innerHTML+=item;
});

let tabela = document.createElement('table');
divDom.appendChild(tabela);
let red = "";// da bi bolo u jednom redu ostavljam ko prazan string pre forEacha
imena.forEach((e)=>{
    let item = `<td>${e}</td>`;
    red += item;
});
tabela.innerHTML = red;

paragraf.forEach(e=>{
    e.style.color = "purple";
});

let sviParagrafi = document.querySelectorAll('p');
paragraf.forEach((elem, index)=>{
    if(index%2==0){
        elem.style.color = "green";
    } else {
        elem.style.color = "red";
    }
});

//svi potomci body-ja stavljeni u niz:
let potomci = document.body.children;
console.log(potomci);//HTML kolekcija
let nizPotomaka = Array.from(potomci);
console.log(nizPotomaka);//niz iteriranje forEach petljom

//dodavanje klase:
/*sviParagrafi.forEach((e, index)=>{
    if(index%2==0){
        e.classList.add('error');
    } else {
        e.classList.add('success');
    }
});*/
//dodavanje klase na paragrafe sa odredjenim tekstom
paragraf.forEach((elem)=>{
    if(elem.textContent.includes('drugi')) {
        elem.classList.add('tekst');
    }
});
//Dodati novi div tag dokumentu.
//Formirati ul listu sa stavkama čiji je sadržaj proizvoljan
//tekst, i dodati je div elementu.
//Iz ul liste izbaciti prvu stavku.
//U ul listi zameniti drugu stavku liste.
//Dodati još jednu stavku ul listi, pri čemu je sadržaj
//stavke slika.
let noviDiv = document.createElement('div');
divDom.appendChild(noviDiv);

let novaLista = document.createElement('ul');
noviDiv.appendChild(novaLista);
let li1=document.createElement('li');
li1.innerText = 'Facebook';
let li2 = document.createElement('li');
li2.innerText = 'Instagram';
let li3 = document.createElement('li');
li3.innerText = 'Twitter';
novaLista.appendChild(li1);
novaLista.appendChild(li2);
novaLista.appendChild(li3);

novaLista.removeChild(novaLista.childNodes[0]);//firstChild, lastChild
let liNovi = document.createElement('li');
liNovi.innerText = 'LinkedIn';
novaLista.replaceChild(liNovi, novaLista.childNodes[1]);
let liImg = document.createElement('li');
liImg.innerHTML = `<img src="images/IMG_20190927_180040.jpg" weight="200px" height="200px">`;
novaLista.appendChild(liImg);


///EVENT LISTENER:
//napraviti formu sa inputima i ispisati rezultat u paragrafu:
let rezultati = document.querySelector('#rez');
let dugmeKv = document.querySelector('#btnKv');
dugmeKv.addEventListener('click', ()=>{
    let br = document.querySelector('#inputKv').value;
    let kv = br*br;
    rezultati.innerHTML += `Rezultat kvadriranja zadatog broja ${br} je: ${kv}.<br>`
});
let dugmePola = document.querySelector('#btnPl');
dugmePola.addEventListener('click', ()=>{
    let br = document.querySelector('#inputPl').value;
    let pl = br/2;
    rezultati.innerHTML += `Polovina zadatog broja ${br} je: ${pl}.<br> `;
});
let dugmePrecnik = document.querySelector('#btnKrug');
dugmePrecnik.addEventListener('click', ()=>{
    let br = document.querySelector('#krug').value;
    let povrsina = br * br * 3.14;
    rezultati.innerHTML += `Povrsina kruga zadatog precnika ${br} iznosi: ${povrsina}.<br>  `;
});

//DIGITRON:
let btn = document.querySelectorAll('.broj');
let btnOperacije = document.querySelectorAll('.operacije');
let jednako = document.querySelector('#jednako');

let x = 0;
let y = 0;
let op = "";
let rezultat = 0;
btn.forEach(e=>{
    e.addEventListener('click', ()=>{
        if(x==0){
            x = e.textContent;
        } else {
            y = e.textContent;
            console.log(y);
        }
    });
});

btnOperacije.forEach(e=>{
    e.addEventListener('click', ()=>{
        op = e.textContent;
        console.log(op);
        
    });
});

jednako.addEventListener('click', ()=>{
    x = parseInt(x); //prebacuje string u broj
    y = parseInt(y);
    switch(op){
        case "+":
            rezultat = x + y;
            break;
        case "-" :
            rezultat = x - y;
            break;
        case "*" :
            rezultat = x * y;
            break;
        case "/" :
            rezultat = x/y;
            break;
            
    }
    let ispis = document.querySelector('#prikaz');
    ispis.innerText = rezultat;
    x=0;
    y=0;
    rezultat = 0;
   
});

///DIGITALNI SAT:
let sat = document.querySelector('#sat');
setInterval(function(){
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if(sati < 10){
        sati = "0" + sati;
    }
    if(minuti < 10){
        minuti = "0"+ minuti;
    }
    if(sekunde < 10){
        sekunde = "0" + sekunde;
    }
    sat.innerText = `${sati}:${minuti}:${sekunde}`;

}, 1000);

///STOPERICA:
let btnStart = document.querySelector('#start');
let btnStop = document.querySelector('#stop');
let ispis = document.querySelector('#ispis');
let brojac = 0;
let clock;
let clockIsSet = false;
btnStart.addEventListener('click',()=>{
    if(!clockIsSet){
        clockIsSet = true;
        clock = setInterval(()=>{
            brojac++;
            ispis.innerHTML=brojac;
        },1000);
    }
});
btnStop.addEventListener('click', ()=>{
    clearInterval(clock);
    clockIsSet = false;
});
//setTimeout-clearTimeout, za samo jedno izvrsenje

//REGULARNI IZRAZI:
let signUp = document.querySelector('#izrazi');
let username = document.querySelector('#username');
let password = document.querySelector('#pass');
let submit = document.querySelector('#submit');

let patternUsername = /^[a-zA-Z]{6,15}$/;
let patternPassword = /^[^\s]{6,10}$/;
let colorBorder = (pattern, field) => {
    if(pattern) {
        field.setAttribute("class", "dobra");
    } else {
        field.setAttribute('class', 'losa');
    }
};

username.addEventListener('keyup', (e)=>{
    let pom = patternUsername.test(username.value);
    colorBorder(pom, username);
});
password.addEventListener('keyup', (e)=>{
    let pom = patternPassword.test(password.value);
    colorBorder(pom, password);
});
signUp.addEventListener('submit', (e)=>{
    e.preventDefault();//da ne bi reloadovalo stranicu
    
});