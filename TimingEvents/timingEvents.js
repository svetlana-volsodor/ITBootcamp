let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let timer;
let btn3 = document.querySelector("#btn3");
let divRezultat = document.querySelector("#result");
let brojac = 0; //treba nam za interval
let clock;
let clockIsSet = false; //logicka promenljiva koja sprecava visestruko aktiviranje intervala
let btn4 = document.querySelector("#btn4");
let divSat = document.querySelector("#sat");

btn1.addEventListener('click', ()=>{
    timer = window.setTimeout(()=>{
        console.log('Zdravo!');//window objekat, moze i bez njega da se pise
    }, 2000); //1000*2
       /* setTimeout(()=>{
            console.log('Zdravo ranije');
        }, 500);*/
});

btn2.addEventListener('click', ()=>{
    timer = clearTimeout(timer);
});

btn3.addEventListener('click', ()=>{
    if(!clockIsSet){ //moze i clockIsSet!=true, ili clockIsSet==false
        clockIsSet = true;
        clock = setInterval(()=>{
            brojac++;
            divRezultat.innerHTML = brojac;
        }, 1000);
    }
});

btn4.addEventListener('click', ()=>{
    clearInterval(clock);
    clockIsSet = false;
});

//digitalni sat:
setInterval(function(){
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    if(sati < 10){
        sati = "0"+ sati;
    }
    if(minuti < 10){
        minuti = "0"+minuti;
    }
    if(sekunde < 10){
        sekunde = "0" + sekunde;
    }
    divSat.innerHTML =`${sati}:${minuti}:${sekunde}`;
}, 1000);