let dugmeZdravo = document.getElementById('zdravo');
dugmeZdravo.addEventListener('click', ()=> {
     console.log("Zdravo Svetlana!!!");
     let zdravoParagraf = document.getElementById('zdravoPar');
 zdravoParagraf.innerHTML += "Zdravo!!!!!"; //+= kad hocu da dodam zdravo za svaki klik
});

//napraviti dugme da kad kliknemo u konzoli se napise vrednost br, brojac na pocetku ima vrednost 1 
//a svaki put kada se klikne vednost se povecava za jedan

let dugmeBrojac = document.getElementById('brojac');
let br = 1;// da smo stavili br unutar medoda rezultat bi uvek bio 2
dugmeBrojac.addEventListener('click', ()=>{
    br++;
    console.log(br);
    let zdravoParagraf = document.getElementById('zdravoPar');
    zdravoParagraf.innerHTML = `Vrednost brojaca je ${br}`;
});

//dugmad plus i minus, kada se klikne na plus vrednost brojaca +1, a na minus vrednost brojaca -1:
let r = 0; //promenljiva za rezultata
let spanRezultat = document.getElementById('rezultat');
spanRezultat.innerText = r;
let dugmePlus = document.getElementById('plus');

dugmePlus.addEventListener('click', ()=>{
    r++;
    spanRezultat.innerText = r;
});
let dugmeMinus = document.getElementById('minus');
dugmeMinus.addEventListener('click', ()=>{
    r--;
    if(r<0){
        r=0;}
    spanRezultat.innerText = r  
});

//Napraviti input polje i dugme.U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime
//osobe preuzeto iz input polja.

let bp = document.getElementById('buttonPozdrav');
bp.addEventListener('click', ()=>{
    let vrednost = document.getElementById('inputPozdrav').value;
    let pp = document.getElementById('paragrafPozdrav');
    pp.innerText = `Zdravo ${vrednost}!`;

});

//Napraviti sledeću formu i rezultat računanja ispisati u paragrafu ispod nje.
let dugmeKvadrat = document.querySelector("#buttonKv");
let rezRacunanja = document.querySelector("#rez");
dugmeKvadrat.addEventListener('click', ()=>{
    let br = document.querySelector("#inputKv").value;
    let kv = br * br;
    rezRacunanja.innerHTML +=  `Rezultat kvadriranja zadatog broja je ${kv}. `
});
let dugmePrepoloviti = document.querySelector("#buttonPl");
dugmePrepoloviti.addEventListener('click', ()=>{
    let br = document.querySelector('#inputPl').value;
    let pl = br/2;
    rezRacunanja.innerHTML += `Rezultat operacije prepoloviti za zadati broj je ${pl}.`
});
let dugmePrecnik = document.querySelector("#buttonkrug");
dugmePrecnik.addEventListener('click', ()=>{
    let br = document.querySelector("#krug").value;
    let pr = br * br * 3.14
    rezRacunanja.innerHTML += `Precnik kruga za zadati broj je${pr}.`
});
