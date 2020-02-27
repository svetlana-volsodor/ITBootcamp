/*ispisati brojeve od 1 do 20, svaki u novom redu
console.log("zdravo");
let i = 1;
while( i <= 20) {
    console.log(i);
    i++; //i += 1; ili i = i + 1;
}
console.log("svete");*/

//2.ispisati brojeve od 1 do 20 u istom redu

/*let i = 1;
let rez = "";
while( i <= 20) {
    rez = rez + i + " "; //rez += i + " ";
    i++;
//console.log(rez) - ispisalo bi piramidalno    
}
console.log(rez);*/

//3.ispisati brojeve od 20 do 1
 let j = 20;
while(j >= 1) {
    console.log(j);
    j--;//j -= 1; j = j - 1;
}

//4.ispisati parne brojeve od 20 do 1
/*
let k = 20;
while(k >= 2) {
        console.log(k);
    
    k -= 2 //ili j = j - 2
}*/

//4.ispisati brojeve  od 1 do 20 deljive sa tri

let br = 1;
while(br <= 20)
{
    if(br % 3 == 0 && br % 9 != 0)
    {
        console.log(br);
    }
    br++}

//6. odrediti sumu brojeva od 1 do 100

/*let i = 1;
let s = 0; //neutral za sabiranje, pocetna vrednost sume; mora van while petlje jer unutar nje uvek ostaje 0!!!
while(i <= 100) 
{   
    s += i;
    i++
}
console.log(s); //consol van while petlje da se ne bi svaki put ispisao medjuzbir
/*s = 0; i = 1;
s = 1; i = 2;
s = 3; i = 3;
s = 6; i = 4;
s = 10; i = 5;...
s = ...; i = 100; */

//6.1. suma parnih brojeva od 1 do 100

/*let s = 0;
let i = 1; //moze i=2 jer znamo da su parni
while(i<=100)
{
    if(i % 2 == 0){
        s += i //s = s + i;
    }
    i++;//ako i stavimo unutar if samo kad je paran bi se povecavao
}
console.log(s)*/

// 7) Odrediti sumu brojeva od 1 do n

/*let i = 1;
let n = 10; //proizvoljna vrednost broja
let s = 0;
while( i <= n) {
    s += i;//s=s+1;
    i++; //i=i+1, i+=1;
}
console.log(s);

console.log(n*(n+1)/2); //Formula za izracunavanje sume do n broja*/

//8) suma od n do m
/*let n = 5;
let m = 10;
let s = 0;
let i = n;// i dobija vrednost n kako bi moglo recima da se ispise, ako ostane n ispisuje se samo poslednja vrednost n (sto je ovde 11)
while(i<=m){
    s += i;
    i++;
}
let c = "!!!!"
console.log(s);
console.log("suma brojeva od " + n + "do" + m + "je " + s);
console.log(`suma brojeva od ${n} do ${m} je ${s} ${c}`);*/

//9) proizvod brojeva od n do m

/*
let n = 1;
let m = 5;
let i = n;
let p = 1;//neutral za mnozenje je 1!!! a ne 0 kao kod sabiranja jer u tom slucaju ce p uvek biti 0
while(i<=m){
    p*=i;//p=p*i;
    i++
}
console.log(p);*/

//9.1)odrediti proizvod svakog drugog broja od n do m
/*
let n = 1;
let m = 5;
let i = n;
let p = 1;//neutral za mnozenje je 1!!! a ne 0 kao kod sabiranja jer u tom slucaju ce p uvek biti 0
while(i<=m){
    p*=i;//p=p*i;
    i = i + 2 //i += 2;
}
console.log(p);*/

//10. odrediti sumu kvadrata brojeva od n do m
/*
let n = 1;
let m = 5;
let i = n;
let s = 0;

while(i<=m){

    s = s + i**2 //s= s+ i*i; s += i**2
    i++
}
console.log(s);
   s = 0; i = 1;
   s = 1; i =2;
   s = 5; i = 3;
   s = 14; i = 4;
   s = 30; i = 5;
   s = 55; i = 6;*/

//11.Odrediti sa koliko brojeva je deljiv uneti broj k

let k = 15;
let i = 1;
let num = 0;//sa koliko je deljiv
while(i<= k){
    if(k % i == 0){
        num++;//num+=1
    }
    i++;
}
console.log(num);
/* 
15/1=true
15/2=false
15/3=true
15/5
15/15 - deljiv je sa cetiri broja*/



