class Film {
    constructor(n, a, gi, o){
        this.naslov = n;
        this.autor = a;
        this.godIzd = gi;
        this.ocene = o;
    }
    set naslov(n){
        this._naslov = n;
    }
    get naslov(){
        return this._naslov;
    }
    set autor(a){
        this._autor = a;
    }
    get autor(){
        return this._autor;
    }
    set godIzd(gi){
        if(gi>1800){
        this._godIzd = gi;}
        else {
            this._godIzd = 1800;
        }
    }
    get godIzd(){
        return this._godIzd;
    }
    set ocene(o){
        this._ocene = o;
    }
    get ocene(){
        return this._ocene;
    }
    stampaj(){
        console.log(`Film: ${this.naslov}, reziser: ${this.autor} (${this.godIzd})`);
    }
    prosek(){
        let s = 0;
        this.ocene.forEach(e=>{
            s += e;
        });
        let prO = s/this.ocene.length;
        return prO;
    }
}

let f1 = new Film("Otac", "Srdan Golubovic", 2020, [8.8, 9, 10, 7.9, 9.1, 9.6]);
f1.stampaj();
console.log(f1.prosek());
let f2 = new Film("Ajvar", "Ana Marija Rossi", 1758, [7.5, 8.9, 9.2, 9.5, 7.6, 6.9]);
f2.stampaj();
console.log(f2.prosek());
let f3 = new Film("Taxi Blues", "Miroslav Stamatov", 2019, [7.7, 6.9, 8.1, 8.6, 9.05, 7.1, 6.5]);
f3.stampaj();
console.log(f3.prosek());
let f4 = new Film("Savovi", "Miroslav Terzic", 2019, [10, 9.2, 8.4, 7.9, 8.4, 7.2]);
f4.stampaj();
console.log(f4.prosek());

let nizFilmovi = [f1, f2, f3, f4];

let prosecnaOcena = niz =>{
    let s =0;
    let br = 0;
    niz.forEach((e)=>{
        let ocene = e.ocene;
        ocene.forEach(o=>{
            s+= o;
            br++;
        }); 
    });
    let prOcene = s/ br;
    return prOcene;
}
console.log(`Posecna ocena svih filmova je ${prosecnaOcena(nizFilmovi)}`);

let najboljeOcenjeni = niz =>{
    let naj = niz[0];
    let najOc = niz[0].prosek();
    niz.forEach(f=>{
        if(f.prosek()>najOc){
            najOc = f.prosek();
            naj = f;
        }
    });
    return naj;
}
console.log(najboljeOcenjeni(nizFilmovi));

let najmanjaOcenaNajboljeg = niz =>{
    let najb = najboljeOcenjeni(niz);
    let nizOcena = najb.ocene;
    let min = nizOcena[0];
    nizOcena.forEach(o=>{
        if(min>o){
            min=o;
        }
    });
    return min;
}
console.log(`najbolji film je ${najboljeOcenjeni(nizFilmovi).naslov}`);
console.log(`najlosija ocena najbljeg je ${najmanjaOcenaNajboljeg(nizFilmovi)}`) ;

let najmanjaOcena = niz => {
    let min = niz[0].ocene[0];
    niz.forEach(f=>{
        let oceneNiz = f.ocene;
        oceneNiz.forEach(o=>{
            if(min>o){
                min = o;
            }
        });
    });
    return min;
}
console.log(najmanjaOcena(nizFilmovi));
    
let najcescaOcena = niz =>{
    let ocene1 = niz[0].ocene;
    let sveOcene = 0;
    niz.foEach(f=>{
        sveOcene += ocene1.concate(f.ocene)
    });
    console.log(sveOcene);
    return sveOcene;
}

let iznadOcene = (niz, ocena) =>{
    let boljeOc = [];
    niz.forEach(f=>{
        if(f.prosecnaOcena > ocena){
            boljeOc.push(f);
        }
    });
    return boljeOc;
}  
 let io = iznadOcene(nizFilmovi, 6);
 io.forEach(elem=>{
    elem.stampaj();
 });
   

class Pacijent{
    constructor(i, v, t){
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }
    set ime(i){
        this._ime = i;
    }
    get ime(){
        return this._ime;
    }
    set visina(v){
        if(v<0){
        this._visina = 0;}
        else if (v>250){
            this._visina =250;
        } else {
            this._visina = v;
        }
    }
    get visina(){
        return this._visina;
    }
    set tezina(t){
        if(t<0){
            this._tezina = 0;
        } else if(t>550){
            this._tezina=550;
        } else{
        this._tezina = t;}
    }
    get tezina(){
        return this._tezina;
    }
    stampaj(){
        console.log(`Pacijent: ${this.ime}, visina: ${this.visina}, tezina: ${this.tezina}`);
    }
    bmi(){
        let bmi = this.tezina / (this.visina*this.visina);
        return bmi;
    }
    kritican(){
        if(this.bmi()>40 || this.bmi()<15){
            return true;
        } else {
            return false;
        }
    }
}

let p1 = new Pacijent("Pera Peric", 2.89, 62);
p1.stampaj();
console.log(p1.bmi());
console.log(p1.kritican());
let p2 = new Pacijent("Lule Lukic", 1.78, 120);
p2.stampaj();
console.log(p2.bmi());
console.log(p2.kritican());
let p3 = new Pacijent("Mara Maric", 1.59, 88);
p3.stampaj();
console.log(p3.bmi());
console.log(p3.kritican());
let p4 = new Pacijent("Anci Arsic", 1.77, 46);
p4.stampaj();
console.log(p4.bmi());
console.log(p4.kritican());

let nizPacijenti = [p1, p2, p3, p4];

let minT = nizPacijenti[0].tezina;
let minP = nizPacijenti[0].ime;
nizPacijenti.forEach(p=>{
    if(p.tezina < minT){
        minT = p.tezina;
        minP = p.ime;
    }
});
console.log(`Pacijent sa najmanjom tezinom je ${minP}`);

let maxBmi = nizPacijenti[0].bmi();
let maxBmiP = nizPacijenti[0].ime;
nizPacijenti.forEach(p=>{
    if(p.bmi()>maxBmi){
        maxBmi = p.bmi();
        maxBmiP = p.ime;
    }
});
console.log(`Pacijent sa najvecim BMI indeksom je ${maxBmiP}`);

nizPacijenti.forEach(p=>{
    if(p.ime.includes('a')){
        console.log(p.ime);
    }
});

let srednjaVisina = (niz)=>{
    let ukupnaV = 0;
    niz.forEach(p=>{
        ukupnaV += p.visina;
    });
    let srV = ukupnaV / niz.length;
    return srV;
}
console.log(srednjaVisina(nizPacijenti));



class Knjiga{
    constructor(n, a, gi, bs, c){
        this.naslov = n;
        this.autor = a;
        this.godIzd = gi;
        this.brStr = bs;
        this.cena = c;
    }
    set naslov(n){
        this._naslov = n;
    }
    get naslov(){
        return this._naslov;
    }
    set autor(a){
        this._autor = a;
    }
    get autor(){
        return this._autor;
    }
    set godIzd(gi){
        this._godIzd = gi;
    }
    get godIzd(){
        return this._godIzd;
    }
    set brStr(bs){
        this._brStr = bs;
    }
    get brStr(){
        return this._brStr;
    }
    set cena(c){
        this._cena = c;
    }
    get cena(){
        return this._cena;
    }
    stampaj(){
        console.log(`Knjiga: ${this.naslov}, ${this.autor} (${this.godIzd}), broj strana: ${this.brStr}, cena: ${this.cena}`);
    }
    obimna(){
        if(this.brStr>600){
            return true;
        } else {
            return false;
        }
    }
    skupa(){
        if(this.cena>800){
            return true;
        } else {
            return false;
        }
    }
    dugackoIme(){
        if(this.autor.length>18){
            return true;
        } else {
            return false;
        }
    }
}

let k1 = new Knjiga('Na Drini cuprija', 'Ivo Andric', 1986, 520, 550);
k1.stampaj();
console.log(k1.obimna());
console.log(k1.skupa());
console.log(k1.dugackoIme());
let k2 = new Knjiga('Ana Karenjina', 'Lav Nikolajevic Tolstoj', 1990, 936, 1120);
k2.stampaj();
console.log(k2.obimna());
console.log(k2.skupa());
console.log(k2.dugackoIme());
let k3 = new Knjiga('Stepski Vuk', 'Herman Hese', 2006, 250, 460);
k3.stampaj();
console.log(k3.obimna());
console.log(k3.skupa());
console.log(k3.dugackoIme());
let k4 = new Knjiga('Besnilo', 'Borislav Pekic', 2015, 660, 730);
k4.stampaj();
console.log(k4.obimna());
console.log(k4.skupa());
console.log(k4.dugackoIme());

let nizKnjige = [k1, k2, k3, k4];
nizKnjige.forEach(k=>{
    if(k.dugackoIme()){
        console.log(k.autor);
    }
});

nizKnjige.forEach(k=>{
    if(k.skupa() && k.obimna()){
        k.stampaj();
    }
});
let ukupnaCena = (niz) => {
    let ukupno = 0;
    niz.forEach(k=>{
        ukupno += k.cena;
    });
    return ukupno
}
console.log(ukupnaCena(nizKnjige));

let prosecnaCena = (niz)=>{
    let arsr = ukupnaCena(niz) / niz.length;
    return arsr;
}
console.log(prosecnaCena(nizKnjige));

let prosecnaStranica = (niz) =>{
    let ukStr = 0;
    niz.forEach(k=>{
        ukStr += k.brStr;
    });
    let avg = ukStr / ukupnaCena(niz);
    return avg;
}
console.log(prosecnaStranica(nizKnjige));

class Autobus{
    constructor(reg, bs){
        this.regBr = reg;
        this.brSed = bs;
    }
    set regBr(reg){
        this._regBr = reg;
    }
    get regBr(){
        return this._regBr;
    }
    set beSed(bs){
        this._brSed = bs;
    }
    get beSed(){
        return this._brSed;
    }
    ispisi(){
        console.log(`Autobus registracije ${this.regBr} ima ${this.brSed} sedista.`);
    }
}

let a1 = new Autobus('NI264UU', 54);
a1.ispisi();
let a2 = new Autobus('PO748PP', 66);
a2.ispisi();
let a3 = new Autobus('BG980LL', 48);
a3.ispisi();
let a4 = new Autobus('NI874AA', 74);
a4.ispisi();

let nizAutobusi = [a1, a2, a3, a4]

let ukupnoSedista = niz => {
    let ukupno = 0;
    niz.forEach(a=>{
        ukupno += a.brSed;
    });
    return ukupno;
}
console.log(ukupnoSedista(nizAutobusi));

let maxSedista = niz =>{
    let maxSed = niz[0].brSed;
    let maxSA = niz[0];
    niz.forEach(a=>{
        if(a.brSed>maxSed){
            maxSed = a.brSed;
            maxSA = a;
        }
    });
    return maxSA;
}
maxSedista(nizAutobusi).ispisi();

let ljudi = (niz, brLj) =>{
    let ukupnoS = 0;
    niz.forEach(a=>{
        ukupnoS += a.brSed;    
    });
    if(ukupnoS >= brLj){
        return true;
    } else {
        return false;
    }
} 
console.log(ljudi(nizAutobusi, 400));