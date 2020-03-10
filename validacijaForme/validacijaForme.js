let forma = document.querySelector('#loginForma');//event listener se povezuje na formu a ne na submit dugme jer postoji vise nacina da se klikne te nije prakticno
let inputUsername = document.querySelector('#username');
let btnSubmit = document.querySelector('#submit');
let divGreska = document.querySelector('#greska');
let patternUsername = /^[a-zA-Z0-9]{5,15}$/;

//u formi ne moramo definisati svaku promenljivu vec da je dohvatimo preko forme
forma.username.addEventListener('keyup', (e)=>{
//inputUsername.addEventListener('keyup', (e)=>{
    if(patternUsername.test(inputUsername.value)){
      inputUsername.setAttribute("class", "success");  
    }  else {   //testiramo vrednost inputusernamea
        inputUsername.setAttribute("class", "error");
    }
});

forma.addEventListener('submit',(e)=>{
    e.preventDefault(); //metod koji koristimo kako se stranica ne bi po difoltu osvezila, sto radi kad je u pitanju forma 
    
    //let patternUsername = /zdravo/; //patern mora da sadrzi rec zdravo

    patternUsername = /^[a-zA-Z0-9]{5,15}$/;

    let username = inputUsername.value;

    //ispitujemo da li username sadrzi rec zdravo
    if(patternUsername.test(username)){
        //console.log(":)");
        divGreska.textContent = `Bravo!Podaci ispravno uneti. Vas usrname je: ${username}.`;
        divGreska.style.color= 'green';
    } else {
       // console.log(":(");
       divGreska.textContent = 'Username sme sadrzati samo slova i/ili brojeve i biti duzine od 5 do 15 karaktera';
       divGreska.style.color = "red";
    }
    console.log(username);
});

