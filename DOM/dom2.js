//roditelj element
let par = document.querySelector('p');
console.log(par.parentElement);//vraca div
console.log(par.parentElement.parentElement);//vraca body
console.log(par.parentElement.children);//kolekcija sve dece roditelja od zadatog paragrafa

//braca/sestre elementi:
console.log(par.nextElementSibling);//prvi napisan u HTMLu
console.log(par.previousElementSibling);//null, jer nema starijeg od njega
console.log(par.parentElement.nextElementSibling.children);
console.log(par.parentElement.parentElement.previousElementSibling);

//par.childen - kolekcija HTML tagova (deca paragrafa)
//par.children[0] - jedan konkretan tag - prvo dete u ovom slucaju
//za kolekciju mozemo koristiti for petlju

let div = par.parentElement;
let decaDiva = div.children;
for(let i =0; i<decaDiva.length; i++) {
    console.log(decaDiva[i]);
}
//skraceno isto to:
for(let i = 0; i < par.parentElement.children.length; i ++) {
    console.log(par.parentElement.children[i]);
}
//ne radi forEach jer nije niz vec kolekcija
/*par.parentElement.children.forEach(d=>{
    console.log(d)
});*/
//za forEach od kolekcije pravimo niz:
let nizDecaDiva = Array.from(par.parentElement.children);
console.log(nizDecaDiva);
nizDecaDiva.forEach(elem =>{
    console.log(elem);
});

let link = document.querySelector('a');
console.log(link.getAttribute('href'));
//ako hocu da menjam: dva parametra, prvi oznacava koji atribut se menja a drugi cime se menja:
link.setAttribute('href', 'http://www.wikipedia.org');// menjanje
link.setAttribute('id', 'link1');//dodavanje
link.innerText = "Wikipedia";
//ako vrednost atributa vec postoji oa se menja, ako ne postoji ona se postavlja
console.log(link);

//VEZBANJA:

//Svim linkovima na stranici postaviti da se otvaraju u novom tabu.
let linkovi = document.querySelectorAll('a');
linkovi.forEach(link=>{
    link.setAttribute('target', '_blank');
});
console.log(linkovi);

//Svim slikama dodati alternativni tekst.
let images = document.querySelectorAll('img');
images.forEach(slika=>{
    slika.setAttribute('alt', 'LisabonTramvaj')
});


//Svim paragrafima postaviti atribut style tako da budu obojeni ljubičastom bojom.
let paragrafi = document.querySelectorAll('p');
paragrafi.forEach(par => {
    par.setAttribute('style', 'color: purple');
});

//Sve parne paragrafe na stranici obojiti zelenom bojom, a sve neparne paragrafe obojiti crvenom bojom.
/*for(let i = 0; i<paragrafi.length; i++){
    if(i%2==0){
        paragrafi[i].setAttribute('style','background-color:green' )
    } else {paragrafi[i].setAttribute('style', 'background-color: red')}
}*/
paragrafi.forEach((par, i) =>{
    if(i%2==0){
        //par.setAttribute('style', 'background-color: green', 'color: blue'...);
        par.style.color = "blue";
        par.style.padding = "15px";
        par.style.backgroundColor = "yellow";
        par.style.textAlign = "center";
        console.log(par.style);
    } else {
        par.setAttribute('style', 'background-color: violet');
    }
});

/*Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.
Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu
pozadinsku boju i belu boju teksta.
Slične stilove primeniti i za paragrafe na stranici.*/
linkovi.forEach((elem, i) =>{
    elem.style.padding = "5px";
    elem.style.fontSize = "18px";
    elem.style.textDecoration = "none";
    
    if(i%2==0){
        elem.style.backgroundColor = "green";
        elem.style.color = "purple";
    } else {
        elem.style.backgroundColor = "blue";
        elem.style.color = "white";
    }
});

par.classList.add('error');//dodavanje klase elementu-klasa je naznacena u  HTML kodu
console.log(par.classList);
par.classList.remove('error');//brisanje klase
par.classList.toggle('error');//switch za klase

//Tekst u paragrafima naizmenično pisati veličinom
//15px, veličinom 20px i veličinom od 25px.
paragrafi.forEach((elem,index)=>{
    if(index%3==0){
        elem.style.fontSize = "15px";
    }
    else if(index%3==1) {
        elem.style.fontSize = "20px";
    } else {
        elem.style.fontSize = "25px";
    }
});

/*Svim paragrafima čiji tekst sadrži reč error,
postaviti klasu na error, svim paragrafima čiji tekst
sadrži reč success, postaviti klasu na success. Ostale
kalse paragrafa ne modifikovati.

if(p.textContent.includes(’success’))*/
paragrafi.forEach(elem =>{
    if(elem.textContent.includes("Success")){
        elem.classList.add("success");
    }
    else if(elem.textContent.includes("Error")){
        elem.classList.add("error");
    }
});

//Svim paragrafima koji imaju klasu error skloniti tu
//klasu, a svim paragrafima koji nemaju klasu error
//dodati tu klasu


//dodati novi div tag dokumentu:
let div1 = document.createElement("div");
div1.innerText ="Pridodati div";
document.body.appendChild(div1);

//Formirati ul listu sa stavkama čiji je sadržaj proizvoljan
//tekst, i dodati je div elementu.
let lista1 = document.createElement("ul");
let li1= document.createElement("li");
li1.innerText = "Prvi item";
let li2 = document.createElement("li");
li2.innerText = "Drugi item";
let li3=document.createElement("li");
li3.innerText = "Treci item";
let divLista = document.getElementById("lista");
divLista.appendChild(lista1);
lista1.appendChild(li1);
lista1.appendChild(li2);
lista1.appendChild(li3);

//Iz ul liste izbaciti prvu stavku:
//prvi nacin:
//lista1.removeChild(lista1.firstChild); //first/last child

//drugi nacin:
lista1.removeChild(lista1.childNodes[0]); //krecemo se kao po nizu

//lista1.removeChild(lista1.lastChild);

//U ul listi zameniti drugu stavku liste.
let liPom = document.createElement("li")
liPom.innerText = "***";
lista1.replaceChild(liPom, lista1.childNodes[1]);// sada je drugi li item li3, jer smo prvi obrisali

//Dodati još jednu stavku ul listi, pri čemu je sadržaj stavke slika.


