let ulZadaci = document.querySelector('ul');
let liZadaci = document.querySelectorAll('li');
let btnDodaj = document.querySelector('button');
let inputUnos = document.querySelector('#unesi');

/*liZadaci.forEach(li =>{ 
    li.addEventListener('dblclick', (e)=>{ //dblclick - double click
        //elem.remove(); isto radi u ovom slucaju ali je donji nacin bolji
        e.target.remove();
        console.log('kliknuto na list item');
        e.stopPropagation();// ne poziva roditeljski element
    });
});*/

ulZadaci.addEventListener('click', (e)=>{
    //console.log('kliknuto na UL');
   // console.log(e.target.tagName);

   if(e.target.tagName == 'LI'){
       e.target.remove();
   }
});



let dodavanjeItema = () => {
    let noviZadatak = document.querySelector('input').value;
    let rbDodajPocetak = document.querySelector('#dodajNaPocetak');
    
    //console.log(rbDodajPocetak.checked);
    if(noviZadatak == ""){
        alert('Morate uneti zadatak!');
    } else {
    let noviItem = document.createElement('li');   //tek ovde kreiram novi item, ukoliko su ispunjeni zadaci
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
    //za enter je "kluc" broj 13
    if(e.keyCode == 13){
        dodavanjeItema();
    }
});

