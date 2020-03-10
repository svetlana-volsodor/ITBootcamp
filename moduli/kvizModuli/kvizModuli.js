import createDiv from "./modules/result_div.js"
import {tacniOdgovori, calculateScore} from "./modules/answers.js";
import generateScore from "./modules/clock.js";

let formSubmit = document.querySelector('form');

let [div, h2] = createDiv('intro', document.body, document.body.children[1]);

formSubmit.addEventListener('submit', (event)=>{
    event.preventDefault(); //sprecava slanje podataka na srver vec cemo baratati njima u js
    //treba odrediti koji 'radio' je selektvan
    //opsti nacin:
   /* let radios = document.querySelectorAll('.q1');
    radios.forEach(radio=>{
        if(radio.checked){
            console.log(radio.value);
        }
    });*/

    // ZA FORME IMAMO KRACI NACIN:
    //1) u JS kodu moramo da imam objekat forme (kod mene promenljiva formSubmit)
    //2) svi elementi forme u HTML moraju imati atribut "name":
    let odg1 = formSubmit.q1.value; //vrednost cekiranog radio button-a
    let odg2 = formSubmit.q2.value;
    let odg3 = formSubmit.q3.value;
    let odg4 = formSubmit.q4.value;
    //let odg5 = formSubmit.q5.value;
    let odg5 = formSubmit.nick.value;

    console.log(odg1, odg2, odg3, odg4, odg5);
    let odgovori = [odg1, odg2, odg3, odg4];
    console.log(odgovori);

    let score = calculateScore(odgovori, odg5);
    
   
    //console.log(score);
    div.style.display = "block";
    scrollTo(0, 0); //koordinate za pocetak ekrana su 0, 0
    //h2.textContent = `Vas odgovor je: ${score}%`;
    generateScore(h2, score);
});