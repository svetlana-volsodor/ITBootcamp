//1.
let i=1;
while(i<=20) {
    
    console.log(i);
    i++;
}
 //2. ISPISIVANJE U ISTOM REDU
 i=1;
 let rez="";
 while(i<=20) {
     rez=rez+i+" ";
    
     i++
 }
 console.log(rez);

 //3.
 i=20;
 while(i>=1) {
     console.log(i);
     i--
 }

 //4.
 i=20;
 while(i>=2) {
     if(i%2==0){
         console.log(i)
         i= i-2;
         }
 }

 //5. ???
 i=1;
 
 let elem=document.getElementById('boja')
 
 while(i<=6) {
     if(i%3==1) {
         elem.innerHTML+=`<p style='color:blue'>prvi</p>` ;
         
     }
     else if(i%3==2) {
         elem.innerHTML+=`<p style='color:red'>drugi</p>`;
     } else {
        elem.innerHTML=`<p style='color:green'>treci</p>`
     }
     
     i++
 }

//6.
s=0;
i=1;
while(i<=100) {
    s+=i
    i++
}
console.log(s);

//7.

//js-basic
//1.
 
let datum = new Date();
let vremeSati = datum.getHours();
let vremeMinuti = datum.getMinutes();
let minutaOdPonoci = vremeSati * 60 + vremeMinuti;
console.log(minutaOdPonoci)

//2.
let cena = 1275;
let novcanica = 1500;
let kusur = novcanica - cena;
console.log(kusur)

//3.



