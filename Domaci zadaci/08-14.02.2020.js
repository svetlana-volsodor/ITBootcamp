//1. zadatak:

function suma(n, m) {
    let s = 0;
    for(let i = n; i <= m; i++) {
        s += i*i*i;
    }
    return s
}
console.log(suma(2, 6));

//2. zadatak:

function godine(godRodjenja) {
    let datum = new Date();
    let ovaGodina = datum.getFullYear();
    let god = ovaGodina - godRodjenja;
    return god;
}
let brGodina = document.getElementById("godine");
brGodina.innerHTML = godine(1985);

//3. zadatak

function deljiv(n, m, k) {
    let br = 0;
    for(let i = n; i <= m; i++) {
        if(i % k == 0) {
            br++
        }
    }
    return br
}

let broj = document.getElementById("brojac");
broj.innerHTML = deljiv(3, 115, 7);

