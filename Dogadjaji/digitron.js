let btn = document.querySelectorAll('.broj')
let btnOperacije = document.querySelectorAll('.operacija')
let x = 0;
let y = 0;
let rez = 0;
let op = "";

btn.forEach(elem =>{
    elem.addEventListener('click', ()=>{
        //console.log(elem.textContent);
        if(x==0){
            x = elem.textContent;
            console.log(x)
        } else {
            y = elem.textContent;
            console.log(y)
        }
    });
    
});

btnOperacije.forEach(elem =>{
    elem.addEventListener('click', ()=>{
        op = elem.textContent;
    });
});



/*let b1 = document.getElementById('b1');
b1.addEventListener('click', ()=>{
    if(x == 0){
        x = 1;
    } else {
        y = 1;
    }
});
let b2 = document.getElementById('b2');
b2.addEventListener('click', ()=>{
    if(x == 0){
        x = 2;
    } else {
        y = 2;
    }
});
let b3 = document.getElementById('b3');
b3.addEventListener('click', ()=>{
    if(x==0){
        x=3;
    } else {
        y = 3;
    }
});
let b4 = document.getElementById('b4');
b4.addEventListener('click', ()=>{
    if(x ==0){
        x=4;
    } else {y =4;}
});
let b5 = document.getElementById('b5');
b5.addEventListener('click', ()=>{
if(x==0){
    x=5;
} else {
    y=5;
}
});

let b6 = document.getElementById('b6');
b6.addEventListener('click', ()=>{
if(x==0){
    x=6;
} else {y = 6;}
});

let b7 = document.getElementById('b7');
b7.addEventListener('click', ()=>{
if(x==0){
    x=7;
}else {
    y=7;
}
});

let b8 = document.getElementById('b8');
b8.addEventListener('click', ()=>{
if(x==0){
    x=8;
}else {y=8}
});

let b9 = document.getElementById('b9');
b9.addEventListener('click', ()=>{
if(x==0){
    x=9;
}else {
    y=9;
}
});*/

/*let s = document.getElementById('plus');
s.addEventListener('click', ()=>{
    op = "+";
});*/
let jednako = document.getElementById('jednako');
jednako.addEventListener('click', ()=>{
    x = parseInt(x);
    y = parseInt(y);
    switch(op){
        case "+":
            rez = x + y;
            break;
        case "-" :
            rez = x - y;
            break;
        case "*"  :
            rez = x * y;
            break;
        case "/" :
            rez = x/y;
            break;        
    }
    let paragraf = document.getElementById('rezultat');
    paragraf.innerText = rez;
    x = 0;
    y = 0;
    rez = 0;
});




