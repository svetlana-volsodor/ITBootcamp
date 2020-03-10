//Oblast vazenja promenljivih

let s = 0;
for(let i=1; i<= 3; i++) {
    s+=i;
}

for(i=4; i<=6; i++) {
    s+=i;
}
console.log(i);
console.log(s);
if(4===4) {
    var k=4;
    var j=4;}


function f1() {
     //let je promenljiva unutar bloka a var unutar funkcije; druga funkcija je ne prepoznaje
    if(8===8) {
          k = -5;
    }
    console.log(j, k);
}
function f2() {
    console.log(j, k);
}
f1();
f2();