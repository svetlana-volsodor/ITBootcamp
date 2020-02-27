let broj = 1;
if(broj <= 0) {
    console.log(broj - 1);
}
else {
    console.log(broj + 1);
}

let x = 1;
let y = 8;
let z = -3;
let max = x;
if(max < y) {
    max = y;
}
if(max < z) {
    max = z;
}
console.log(max);
let min = x;
if(min > y) {
    min = y;
}
if(min > z) {
    min = z;
}
console.log(min);
let middle = x + y + z - max - min
console.log(middle);

let datum = new Date();
let danas = datum.getDay();
switch (danas) {
    case 1:
        console.log(6 - 1);
        break;
    case 2:
        console.log(6 - 2);
        break;
    case 3:
        console.log(6 - 3) ;
        break;
    case 4:
        console.log(6 - 4);
        break;
    case 5:
        console.log(6 - 5);
        break;
    default:
        console.log("vikend je");

}

let mesec = datum.getMonth();
switch (mesec) {
    case 0: 
        console.log("jannuar");
        break;
    case 1:
        console.log("februar");
        break;
    case 2:
        console.log("mart") ;
        break;
    case 3:
        console.log("april") ;
        break;
     case 4:
         console.log("maj");
         break;
     case 5:
         console.log("jun");
         break;
    case 6:
        console.log("jul");
        break;
    case 7:
        console.log("avgust");
        break;
     case 8:
         console.log("septembar");
         break;
     case 9:
         console.log("oktobar");
         break;
    case 10:
        console.log("novembar");
        break;
    case 11:
        console.log("decembar") ;
        break;   
}

let ovaGodina = datum.getFullYear();
switch (mesec) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
        console.log("mesec ima 31 dan");
        break;
    case 3:
    case 5:
    case 8:
    case 10:
        console.log("mesec ima 30 dana")  
        break;
    case 1:
        if (ovaGodina % 400 == 0) {
            console.log("29 dana");}
            else if((ovaGodina % 4 == 0)&&(ovaGodina % 100 !=0)) {
                console.log("29 dana");
            } else {
                console.log("28 dana")
            }
            break;
            }


// menjanje boja teksta paragrafa u HTML dokumentu
let span = document.getElementById('color');
let boja = "red";
switch (boja) {
    case "green":
        console.log("zelena");
        document.getElementById('color').style.color = "green";
      break;
    case "red" :
        console.log("crvena") ;
        document.getElementById('color').style.color = "red";
        break;
    case "blue" :
        console.log("plava");
        document.getElementById('color').style.color = "blue";
        break;
     default:
         console.log("zuta");
         document.getElementById('color').style.color = "yellow";      
}

