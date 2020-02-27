//1.a.
let n = 2;
let m = 11;
let p = 1;

for(i = n; i <= m; i++) {
    p*=i;
}
console.log(p);

//1.b.
n = 2;
m = 11;
let s = 0;
for(i = n; i <= m; i++) {
    s = s + i * i;
}
console.log(s);

//2.a
i = 1;
m = 30;
s = 0;
while(i <= 30) {
    if (i % 9 == 0)
    {
        s += i;
    }
    i++
}
console.log(s);