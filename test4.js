//Zadatak 1.

let n=1;
let m=36;
let s=0;
let br=0;
for(let i=n; i<=m; i++) {
    if((i % 7==0) &&(i % 2 !=0)) {
        s+=i;
        br++;
    }
}
let p = s * br;
console.log(s);
console.log(br);
console.log(p);



//Zadatak 2.

function indeksTelesneMase(tezina, visina) {
    let bmi = tezina / (visina*visina);
    return bmi;
    
}
  

trazeniBmi = indeksTelesneMase(56, 1.65);
if(trazeniBmi<=18.5) {
    console.log("Pothranjenost")
} else if((trazeniBmi > 18.5) && (trazeniBmi < 24.9)) {
    console.log("Normalna tezina") 
} else if((trazeniBmi>=24.9) && (trazeniBmi <= 30)) {
    console.log("Povisena tezina")
} else if(trazeniBmi>30) {
    console.log("Gojaznost")
}


//Zadatak 3.

let zbir=0;
br=0;
function razlika(n, m){
    for(let i=n; i<=m;i++) {
       if((i % 2 == 0) && (i % 3 == 0)) {
           zbir += i;
       }
       if(i % 10 == 3){
           br++;
       }
      
    }
    return (zbir - br);
}
console.log(razlika(7, 37));

