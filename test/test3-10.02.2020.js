let datum = new Date();
let dan = datum.getDay();
let sati = datum.getHours();
let minuti = datum.getMinutes();
let div = document.getElementById('flower');

if ((sati < 17) && (sati >= 9)) {
    console.log("otvoreno");
    div.innerHTML = "<img src='fotografije/otvoreno.jpg' alt='otvoreno'>";
}
else {
    console.log("zatvoreno");
    div.innerHTML = "<img src='fotografije/zatvoreno.jpg' alt='zatvoreno'>";
}

let p = document.getElementById('vreme');
switch (dan) {
    case 1 :
        document.write("Ponedeljak");
        break;
    case 2 :
        document.write("Utorak");
        break;
    case 3:
        document.write("Sreda") ;
        break;
    case 4:
        document.write("Cetvrtak") ;
        break;
    case 5:
        document.write("Petak");
        break;
    case 6:
        document.write("Subota") ;
        break;
    deafault:
        document.write("Nedelja");}

     document.write(p + dan)

    let tezina = 230;
    let postarina = tezina * 5;
    let cenaSaPopustom = postarina * 0.9;
    console.log("Cena bez popusta je"+ " " + postarina +" " "dinara, cena sa popustom je"+" " + " "cenaSaPopustom + "dinara." )



    

    
        