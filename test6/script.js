let username = document.querySelector('#username');
let inputPrviBr= document.querySelector('#br1');
let inputDrugiBr= document.querySelector('#br2');
let formSubmit = document.querySelector('form');
let divPopUp= document.createElement('div');
document.body.appendChild(divPopUp);
divPopUp.style.display = "none";





formSubmit.addEventListener('submit', (event)=>{
    event.preventDefault();
    let op = formSubmit.operacija.value;
    console.log(op);

    let patternUsername = /^[a-zA-Z]{5,25}$/;

    
    let pom = patternUsername.test(username.value);
    if(!pom){
    alert("Neadekvatan unos");}



let x = inputPrviBr.value;
let y = inputDrugiBr.value;
let rezultat = 0;
console.log(x, y)

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
            if(y==0){
                divPopUp.style.display = "block";
                divPopUp.innerText = "Nije dozvoljeno deliti nulom";
                break;
            } else {
            rezultat = x/y;
            break;}
            
    }
    divPopUp.style.display = "block";
    divPopUp.style.backgroundColor = "lightgray";
    divPopUp.innerText = `${x} ${op} ${y} = ${rezultat};
     ${username.value}`
    
    formSubmit.reset();
    
});

divPopUp.addEventListener('click', ()=>{
    divPopUp.style.display = "none";
});
