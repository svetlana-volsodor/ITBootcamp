//1.
for(i=1;i<=20;i++) {
    console.log(i);
}

//2.
for(i=20; i>0; i--) {
    console.log(i);
}

//3.
for(i=1;i<=20;i++) {
    if(i%2==0) {
        console.log(i);
    }
}

//4.
for(i=5; i<=15;i++) {
    console.log(i*2);
}

//5.
let s = 0;
for(i=1; i<=100;i++) {
    s+=i
}
console.log(s);

//6.
s = 0;
n = 7;
for(i=1; i <=n; i++) {
    s += i;
}
console.log(s);

//7.
s=0;
n=5;
m=12;
for(i=5; i<=12; i++) {
    s+=i;
}
console.log(s);

//8.
let p = 1;
n = 3;
m = 9;
for(i=3; i<=9;i++) {
    p*=i;
}
console.log(p);

//9.
s = 0;
n =2;
m =10;
for(i=2; i <=10; i++) {
    s=i*i + s;
}
console.log(s);

//11.
s = 0;
for(i=1; i<=30;i++) {
    if(i%9==0) {
        s=s+i;
    }

}
console.log(s);

//12.
p =1;
for(let i=20; i<=100; i++) {
    if(i%11==0) {
        p*=i
    }

}
console.log(p);

//13.
br=0;
for(i=5; i<=150;i++) {
    if(i%13==0){
        br++
    }
}
console.log(br);

//14.

s=0;
br=0;
n=15;
m=43;
for(i=n; i<=m; i++) {
    s=s+i;
    br=br+1;

}
arsr=s/br;
console.log(arsr);

//15.
n=-15; 
m= 7;
brN =0;
brP=0;
for(i=n; i<=m;i++) {
    if(i<0) {
        brN++
    }
    else {
        brP++
    }
}
console.log(`Pozitivnih brojeva ukljucujuci nulu je ${brP} a negativnih je ${brN}`);

//16.
br=0;
for(i=5; i<=50; i++) {
    if((i%3==0) || (i%5==0)) {
        br++
    }
}
console.log(br);

//17.
n=3;
m=25;
s=0;
br=0;
for(i=n; i<=m;i++) {
    if((i%10==4)&&(i%2==0)){
        s+=i;
        br++
    }
}
console.log(`Parnih rojeva od 3 do 21 sa poslednjim cifrom 4 je ${br} a vrednost njihove sume je ${s}`);
 
//18.
let rez="";
n=5;
m=32;
a=3;
for(i=n; i<=m;i++) {
    if(i%a==0) {
        rez=rez + i + " ";
        
    
    }
}
console.log(rez)

//19.
n=5;
m=32;
a=3;
rez=""
for(i=n; i<=m;i++) {
    if(i%a!=0) {
        rez=rez+i+" ";
        
    }
}
console.log(rez);

//20.
s=0;
n=5;
m=32;
a=3;
for(i=n; i<=m;i++) {
    if(i%a!=0) {
        s+=i
    }
}
console.log(s)

//21.
p=1;
n=5;
m=32;
a=3;
for(i=n; i<=m; i++) {
    if(i%a==0) {
        p*=i;
    }
}
console.log(p);


//w3...1)
rez = "";
for(let i=1; i<=10; i++) {
    rez = rez + i+" ";
}
console.log(rez)

//w3..2)
s=0
for(i=1;i<=10;i++){
    s=s+i
}
console.log(s);

//w3..3)
s=0;
n=7;
for(i=1; i<=n; i++) {
    s=s+i
}
console.log(s);

//w3..4)
n=1;
m=10;
s=0;
br=0;
for(i=n; i<=m;i++){
    s+=i;
    br++;
    arsr=s/br;
}
console.log(s, arsr);

//w3..5)
n=1;
m=20;
s=0;
for(i=n;i<=m;i++){
    if(i%2!=0) {
        s+=i;
    }
}
console.log(s)


