let niz = [7, 12, -3, -6, 5, 1, 4, -4, 11, 2, 8, -2, -1, -5, -8, 9, 13, 10]

//Zadatak 1:
let minIndex = niz => {
    let min = niz[0];
    let index = 0;
    for(let i = 1; i < niz.length; i++ ) {
        if(min > niz[i]) {
            min = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(minIndex(niz));


//Zadatak 2:
let zbirElParInd = niz => {
    let s = 0;
    for(let i = 0; i < niz.length; i++) {
        if(i % 2 == 0) {
            s += niz[i];
        }
    }
    return s;
}
console.log(zbirElParInd(niz));


//Zadatak 3:
let znak = niz => {
    for(let i = 0; i < niz.length; i++) {
        if((niz[i] % 2 != 0) && (i % 2 == 0)) {
            niz[i] *= -1
        }
    }
}
znak(niz);
console.log(niz);