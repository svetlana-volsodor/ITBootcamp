/* 11)Napraviti funkciju sumiraj koja određuje (dakle ide RETURN a ne CONSOLE.LOG) sumu brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.*/
function suma(n, m) {
    if(n>m) {
        return 0;
    }
    let s = 0;
    for(let i = n; i <= m; i++) {
        s+=i;
    }
    
    return s;
    //console.log("bla"); ==>kad se javi nakon return - ne ispisuje se; ovde return prekida izvrsenje funkcije 
}
let p = suma(6, 12);
console.log(p);
p = suma(1, 9);
console.log(p);
console.log(suma(5, 12));//moze i ovako da se ispisuje

/*12) Napraviti funkciju množi koja određuje proizvod brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.*/
function mnozi(n, m) {
    let p =1;
    for(let i = n; i<=m; i++) {
        p*=i;//p=p*i
        //RETURN P - ovde vrati prvu vrednost a ne zavrsi funkciju do kraja tj vrati p = 1 * 2(prva vrednosr p i i)
    }
    return p;
}
let pro = mnozi(3, 6);
console.log(pro);//moze i console.log(mnozi(3, 6));

/*13) Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
Brojeve n i m proslediti kao parametre funkciji.*/
function sredina(n, m) {
    let s = 0;
    let br = 0;
    for(let i = n; i<=m; i++) {
        s+=i;
        br++;//br=br+1; br+=1;
    }
    return s / br; //u RETURN MOZE BILO KOJI MATEMATICKI IZRAZ

}
let x = sredina(5, 88);
console.log(x);

/*14) Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja
cifra 3 u intervalu od n do m.
Brojeve n i m proslediti kao parametre funkciji.*/
function arsrTri(n, m) {
   
        let s = 0;
        let br = 0;
        for( let i = n; i <= m; i++) {
            if(i % 10 == 3){
            s+=i;
            br++
        }
    }
    if(br>0) {
    return s/br} 
        
    return 0;
}
x = arsrTri(6, 10);
console.log(x);

/*10) Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi
sa tri u intervalu od n do m.
Prebrojati koliko ima ovakvih brojeva od n do m.*/
function deljivSaTri(n, m) {
    let br = 0;
    for(let i = n; i<=m; i++) {
        if(i % 3 == 0) {
            //console.log(i);
            br++;
        }
    }
    return br;
}
x = deljivSaTri(5, 14);//console.log(deljivSaTri(5, 14))
console.log(x);
console.log("Broj brojeva deljivih sa tri je" + deljivSaTri(5, 14));
console.log(`broj brojeva deljivih sa tri je ${x}`);
console.log(`broj brojeva deljivih sa tri je ${deljivSaTri(5,14)}`);
let a=5;
let b=14;
console.log(`broj brojeva deljivih sa tri je ${deljivSaTri(a, b)}`);

/*5) Napraviti funkciju koja prikazuje sliku za prosledjenu adresu slike.*/
function slika(putanja) {
    //return "<img src='" + putanja + "'alt = 'blabla'>";
    return `<img src='${putanja}' alt='blabla'>`;
}
let elem = document.getElementById('blabla');
console.log(elem.innerHTML);
elem.innerHTML=slika('images/rodosmacka.jpg');
console.log(elem.innerHTML);
elem.innerHTML += slika('images/lisabontramvaj.jpg'); //dodajem jos jednu fotku na postojecu
console.log(elem.innerHTML);

/*6) Napraviti funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa
u tu boju.*/
//prva varijanta:

function paragraf(boja) {
    return `<p style='color:${boja}'>Tekst koji ce biti obojen...</p>`;//ubacuje paragraf u postojeci div
}
elem.innerHTML+= paragraf('red');
elem.innerHTML+= paragraf('blue');

//druga varijanta
function paragrafDva(boja, tekst) {
    return `<p style='color:${boja}'>${tekst}</p>`
}
elem.innerHTML+= paragrafDva('green', 'Ovaj tekst je obojen zelenom bojom.');
elem.innerHTML+=paragrafDva('yellow', 'A evo i zutog teksta, juhuuu!');

/*7) Napraviti funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima
prosleđenu veličinu fonta.*/

function paragrafTri(velicina, tekst) {
    return `<p style='font-size:${velicina}px'>${tekst}</p>`//nikako razmak izmedju vrednosti promenljive velicina i px
}
elem.innerHTML+=paragrafTri(24, 'Tekst za proveru ispisa velicine fonta kroz funkciju');
elem.innerHTML+=paragrafTri(46, 'Ovaj font je bas veliki');

/*8) Napraviti funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice
treba da bude jednaka vrednosti iteratora.*/
function pisiPetParagrafa() {
    let res = ""; //prazan string je pocetna vednost - BEZ RAZMAKA!
    for(let i=1; i<=5;i++) {
        let j = i*10;
        res = res + `<p style='font-size:${j}px'>Neki tekst</p>`;
    }
    return res;
}
elem.innerHTML+=pisiPetParagrafa();