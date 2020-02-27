//1)ispisati brojeve od 1 do 20

let i;
/*
for(i = 1; i <= 20; i++){
    console.log(i);
}*/

//2)ispisati brojeve od 20 do 1
/*
for(i=20; i>=1; i--)
{
    console.log(i);
}*/

//3)ispisati parne brojeve od 1 do 20
/*prvi nacin:
for(i = 1; i<=20; i++){
    if(i%2==0) {
        console.log(i);
    }
}*/
//drugi nacin:
/*
for(i = 2; i<= 20; i+=2){
    console.log(i);
}*/

//4)ispisati dvostruku vrednost brojeva od 5 do 15
/*
for(i=5; i<=15; i++ ) {
    console.log(2*i);//consol.log(i+i);
    }*/

//sabirati brojeve od 1 pa na dalje redom, tako da ne predjete unetu sumu
/*
let s = 15;
i = 1;
let br = 0; // ne znamo koliko brojeva treba sabrati
let pomocnaSuma = 0;
while(pomocnaSuma < s) {
    pomocnaSuma += i;
    i++;
    br++;
}
console.log(br);

//pomnoziti brojeve od 1 pa nadalje redom, tako da ne predje uneti proizvod

let p = 25;
i = 1;
br = 0;
let pomocniP = 1;
while(pomocniP < p) {
    pomocniP *= i;
    i++;
    br++;
}
console.log(br - 1);*/

//5)Odrediti sumu brojeva od 1 do 100
let s = 0;
for(i = 1; i<=100; i++)
{
    s+=i;

}
console.log(s);


//6)Odrediti sumu brojeva od 1 do n
s = 0;
let n = 50;
for(i = 1; i<=n; i++) {
    s += i;
}
console.log(s);


//7)Odrediti sumu brojeva od n do m
s = 0;
n = 50;
let m = 100;
for(i = n; i <= m; i++) {
    s += i;
}
console.log(s);

//12)Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.

let p = 1;
for(i = 20; i <= 100; i++) {
    if(i % 11 == 0){
        p*=i; //p=p*i;
    }
}
console.log(p);

//12.1 Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. i ispisati ih


p = 1;
for(i = 20; i <= 100; i++) {
    if(i % 11 == 0){
        p*=i; //p=p*i;
        console.log(i);
    }
}
console.log(p);

//13)Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150. i koliko je nedeljivih
let brDelj = 0;
let brNedelj = 0;
for( i = 5; i<=150; i++)
{
    if(i % 13 == 0){
        brDelj++;
    }else {
        brNedelj++;
    }
}
console.log(`u intervalu od 5 do 150 ima ${brDelj} brojeva deljivih sa 13 i ${brNedelj} koji to nisu`);
//ili brNedelj = 150 - 5 -brDelj + 1

//14)Ispisati aritmetičku sredinu brojeva od n do m.
n = 5;
m = 10;
s = 0;
br = 0;
for(i=n; i<=m; i++) {
    s+=i;
    br++
}
let arSr = s/br; //aritmeticka sredina
console.log(arSr);

/*drugi nacin 
for(i=n; i<=m; i++) {
    s+=i;}
    let br = m - n + 1;
    let arSr = s / br
    console.log(arSr);*/

//15)prebrojati koliko brojeva od n do m je pozitivno a koliko ih je negativno
n = -7;
m = 13;
let brP = 0;
let brN = 0;
for(i=n; i<=m;i++) {
    if(i < 0) {
        brN++;
    }
    else {
        brP++;
    }
}  
console.log(`pozitivnih je ${brP} a negativnih je ${brN}`);

//16)prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili 5
br=0;
for(i=5; i<=50;i++) {
    if ((i%3==0)||(i%5==0)) {
        br++
    }
}
console.log(br);

//17)prebrojati i izracunati sumu brojeva od n do m kojima je poslednja cifra 4
n = 10;
m = 45;
s = 0;
br = 0;
for(i = n; i <= m; i++) {
    let cifra = i % 10;//moze da se definise i na pocetku pre for petlje
    if(cifra == 4) {
        br++;
        s = s + i;
    }
}
console.log(`broj brojeva kojima je poslednja cifra 4 je ${br} a suma ${s}`);

//21)odrediti proizvod brojeva od n do m  koji su deljivi brojem a
n = 11;
m = 30;
p = 1;
a = 10;
for(i=n; i<=m; i++) {
    if(i % a == 0) {
        p = p*i;
    }
}
console.log(p);

//10)tri slicice ispisati svaku uz pomoc brojaca
let div = document.getElementById("slika");
for(i=1;i<=10;i++) {

    div.innerHTML += "<img src=pics/" + i + ".png>" + "<br>"; //ovaki lepi slicice jednu preko druge
}


//drugi nacin: 
div = document.getElementById("slika");
for(i=1;i<=16;i++) {
    if(i%3==1) {
        div.innerHTML += "<img src='pics/1.png'>";
    }
    else if (i%3==2) {
        div.innerHTML += "<img src='pics/2.png'>"
    }
    else {div.innerHTML += "<img src='pics/3'>"}
}
//treci nacin:

for(i=1;i<=10;i++) {       
    let j = i%3+1;
    div.innerHTML += "<img src=pics/" + j + ".png>";}