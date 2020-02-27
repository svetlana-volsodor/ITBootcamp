let temp = 43;
if((temp > 40) || (temp < -15)) {
    console.log("ekstremna temperatura");
}



let datum = new Date();
let ovaGodina = datum.getFullYear();
if(ovaGodina % 400 == 0) {
    console.log("prestupna godina");
}
else if((ovaGodina % 4 == 0) && (ovaGodina % 100 != 0)) {
    console.log("prestupna godina");
}
else {
    console.log("nije prestupna godina");
}


let dan = datum.getDay();
let vreme = datum.getHours();
if((dan == 0) && (dan == 6)) {
    if((vreme < 18 ) && (vreme >= 12)) {
        console.log("otvoreno");
    }
    else {
        console.log("zatvoreno")
    }
}
else if ((vreme < 20) && (vreme >= 9)) {
    console.log("otvoreno");
}
else {
    console.log("zatvoreno");
}


let x = 2;
let y = 7;
let karakter = "o";
switch(karakter){
    case "m":
        console.log(x * y);
        break;
    case "d" :
        if(y == 0) {
            console.log("Nije dozvoljeno deliti nulom")
        } 
        else 
        console.log(x / y) ;
        break;
    case "s":
        console.log(x + y);
        break;
    case "o":
        console.log(x - y);
        break;
    default:
        console.log("Nepoznata operacija")           
}
