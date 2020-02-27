let prosek = [0.4, 3.9, 5.6, 11, 18.1, 20.1, 22.1, 21.4, 18.5, 11.4, 4.5, 2.4];

let dan ={
    datum: "2020/02/24",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [-2, 3, 7, 12, 12, 6, 2, -1],
    //1) 
    //vraca prosecnu temp za dan
    prosek: function() {
        let temp = this.temperature;
        let suma = 0;
        temp.forEach(t => {
            suma += t;
        });
        let p = suma / temp.length;
        return p;
    },
    //broji koliko je bilo natprosecnih
    brojNatprosek: function() {
        let p = this.prosek();
        let temp = this.temperature;
        let broj = 0;
        temp.forEach( t => {
            if(t > p) {
                broj ++;
            }
        });
        return broj;
    },
     //2)vraca broj maksim
    brojMaksimalnih: function() {
        let temp = this.temperature;
        let maks = temp[0];
        for(let i = 1; i < temp.length; i++) {
            if(temp[i] > maks) {
                maks = temp[i];
            }
        }
        
        let broj = 0;
        temp.forEach(t => {
            if(t == maks){
                broj ++
            }
        });
        return broj;
    }, //nakon metode obavezan zarez!!!
    //3)
    brojIzmedju: function(t1, t2) {
        if(t1 > t2) {
            let t = t1;
            t1 = t2;
            t2 = t;
        }
        let broj = 0;
        let temp = this.temperature;
        temp.forEach( t => {
            if(t1 <= t && t <= t2){
                broj ++;
            }
        });
        return broj;
    },
    //4)iznad proseka ili ne
    iznadProsek: function() {
        let p = this.prosek(); //pozivamo metod koji smo vec koristili
        let temp = this.temperature;
        let brojIznad = 0;
        let brojIspod = 0;
        temp.forEach( t => {
            if(t >= p) {
                brojIznad ++;
            } else {
                brojIspod ++;
            }
        });
        if(brojIznad > brojIspod) {
            return true;
        } else {
            return false;
        }
    },
    //5) 
    ledeniDan: function() {
        let temp = this.temperature;
        for(let i=0;i < temp.length; i++) {
            if(temp[i] >= 0) {
                return false;
            } 
        }
        return true;
    },

    //6)
   /* tropskiDan:function() {
        let temp =this.temperature;
        for(let i=0; i < temp.length; i++) {
            if(temp[i] >= 24) {
                return true;
            }
        }
        return false;
    },*/
    //drugi nacin:
    tropskiDan: function() {
        let temp = this.temperature;
        let tropski = true;
        temp.forEach( t => {
            if(t < 24) {
                tropski = false;
            }
        });
        return tropski;
    },

    //7) 
    mnepovoljanMeteoropate:function() {
        let temp = this.temperature;
        for(let i =0; i < temp.length - 1; i++) { //idemo do pretposlednjeg zato temp.length-1;
            if(Math.abs(temp[i+1] - temp[i]) > 8) { //Math.abs apsolutna vrednost izraza
                return true; // NIKAKO NE STAVLJATI ELSE OVDE jer nece proci kroz celi niz
            } 
        }
        return false;
    },

    //8)
    neuobicajen:function() {
        let ok = false;
        let temp = this.temperature;
        temp.forEach( t => {
            if(this.kisa == true && t < -5) {
                ok = true;
            }
            if(this.oblacn && t> 25) { //kod logickih promenlivih ne moramo pisati ==; tj. this.oblacan==true je isto kao this.oblacan
                ok = true;
            }
        });
        if(this.kisa && this.oblacno && this.sunce) {
            ok = true;
        }
        return ok;
    },

    //9)
    iznadProsekaZaMesec:function(){
        let mesecString = this.datum.substr(5, 2); //od koje pozicije ide, i koaj duzina => bice 02
        //console.log(mesecString);
        let mesecCeoBroj = parseInt(mesecString) //ugradjena metoda koja string prebacuje u broj
        //console.log(mesecCeoBroj)
        let p = prosek[mesecCeoBroj - 1];//indeks je i - 1, jer je februar 1
        let p1 = this.prosek(); //pozivamo metodu za prosek , prosecna temp za objekat dan
        if(p1 > p) {
            return true;
        } else {
            return false;
        } 
    }
        
};
     
console.log(dan.temperature);
console.log(dan.prosek());
console.log(dan.brojNatprosek());
console.log(dan.brojMaksimalnih());
console.log(dan.brojIzmedju(-3, 5));
console.log(dan.brojIzmedju(14, 5));
console.log(dan.iznadProsek());
console.log(dan.ledeniDan());
console.log(dan.tropskiDan());
console.log(dan.mnepovoljanMeteoropate());
console.log(dan.neuobicajen());
console.log(dan.iznadProsekaZaMesec());

let dan1 = {
    datum: "2020/02/20",
    kisa: false,
    oblacno: true,
    sunce:true,
    temperature: [-2, 1, 3, 7, 11, 11, 5]
};

let dan2 = {
    datum:"2020/03/20",
    kisa: true,
    oblacno: false,
    sunce: true,
    temperature: [ -1, 4, 7, 11, 13, 12, 1, 7,]
};

let dan3 = {
    datum: "2020/03/22",
    kisa: true,
    oblacno: false,
    sunce: false,
    temperature: [0, 5, 8, 10, 11, 15, 9, 6, 3, 2]
};

let merenjeDani = [dan1, dan2, dan3];

//10)
let prviNajviseMerenja = dani => {
    let max = dani[0].temperature.length; //niz dani, 
    let index = 0;
    dani.forEach((dan, i) => { //dani[i] = dan tj. vrednost niza; i je index, tj. njegova poziccija
        if(dan.temperature.length > max) { //strogo > jer trazimo PRVI sa tom vrednoscu
            max = dan.temperature.length;
            index = i;
            }
    });
    console.log(dani[index].datum);
}
prviNajviseMerenja(merenjeDani);

let poslednjiNajviseMerenja = dani => {
    let max = dani[0].temperature.length; //niz dani, 
    let index = 0;
    dani.forEach((dan, i) => { //dani[i] = dan tj. vrednost niza; i je index, tj. njegova poziccija
        if(dan.temperature.length >= max) { //strogo > jer trazimo PRVI sa tom vrednoscu
            max = dan.temperature.length;
            index = i;
            }
    });
    console.log(dani[index].datum);
}
poslednjiNajviseMerenja(merenjeDani);

//11)
let sko = dani => {
    let brK=0;
    let brS=0;
    let brO=0;
    dani.forEach(element => {
        if(element.kisa == true) {
            brK++;
            }
        if(element.sunce == true)   {
            brS ++;
        }  
        if(element.oblacno == true){
            brO++;
        }
    });
    console.log(`Kisa ${brK}, sunce ${brS}, oblacno ${brO}`);
}
sko(merenjeDani);

//12)
let topaoIznadProseka = (dani, mesec, godina) => {
   
    dani.forEach( d => {
        let mesecSt = d.datum.substr(5, 2);
        let godinaSt = d.datum.substr(0, 4);
        let mesecCeo = parseInt(mesecSt);
        let godinaCeo = parseInt(godinaSt);
        //console.log(mesecCeo, godinaCeo)
        if(godinaCeo == 2020 && mesecCeo == 2){
            let temp = d.temperature;
            let suma =0;
            temp.forEach(t=> {
                suma+=t;
            });
            let p = prosek[mesecCeo-1];
            let p1 = suma/temp.length;
            if(p1 > p) {
                return true;
            } 
        }
    });
    return false;
}
console.log(topaoIznadProseka(merenjeDani, 2, 2020));



//Napisati metode koje:
//1) Prebrojava koliko merenja je bilo sa natprosečnom temperaturom.
//*2)Prebrojava koliko merenja je bilo sa maksimalnom temperaturom.
// 3)Prima dva parametra koji predstavljaju dve temperature, a koja broji koliko merenja je bilo između ove dve temperature.
// 4)Proverava da li je u većini dana temperatura bila iznad proseka ili ne.
// 5)Proverava da li je dan bio leden. Za dan se smatra da je leden ukoliko nijedna 
//  temperatura izmerena tog dana nije iznosila iznad 0 stepeni.
// 6)Proverava da li je dan bio tropski. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana
// nije iznosila ispod 24 stepena.
//7)Proverava da li je dan bio nepovoljan za meteropate. Dan je nepovoljan ako je razlika između neka dva uzastopna
// merenja veća od 8 stepeni.
//8)Proverava da li je dan bio neuobičajen. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni,
// ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano.
// 9) Uvesti globalnu promenljivu prosek koja predstavlja niz od 12 brojeva, u kojoj su smeštene prosečne temperature
 //za svaki mesec u godini. U objektu dan napisati metodu koja ispituje da li je prosečna temperatura iznad proseka
 // za taj mesec ili ne.
 /*Formirati niz objekata tipa dan.
10)Napisati arrow funkciju koja ispisuje datum u kome je naviše puta izmerena temperatura. 
Ukoliko ima više takvih datuma, ispisati:
prvi takav,
poslednji takav.

11)Napisati arrow funkciju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i 
koliko je bilo oblačnih dana.
12)Napisti arrow funkcija kojoj se prosleđuje niz dana, mesec i godina, a proverava da li je dati mesec u datoj godini
 topao iznad proseka ili ne.*/
