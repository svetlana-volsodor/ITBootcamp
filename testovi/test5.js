//objekti:
let sportista1 = {
    imePrezima: "Mika Mikic",
    visina: 1.95,
    timovi: ["Chicago Bulls", "Sacramento", "Atlanta Hawks"]
};

let sportista2 = {
    imePrezima: "Pera Peric",
    visina: 2.02,
    timovi: ["LA Lakers", "Denver Nuggets", "Chicago Bulls"]
};
 let sportista3 = {
     imePrezime: "Zika Zikic",
     visina: 2.07,
     timovi: ["Panatanaikos", "Cibona"]
 };
 let sportista4 = {
     omePrezime: "Branko Brankovic",
     visina: 1.99,
     timovi: ["CSK Moakva", "Cibona", "LA Lakers", "Sacramento"]
 };
 //niz:
 let sportisti = [sportista1, sportista2, sportista3, sportista4];

 //prosecna visina:
 let prosecnaVisina = sportisti => {
     let s = 0;
     sportisti.forEach(element => {
         s+= element.visina;
     });
    
     return s/sportisti.length 
     
 }
 console.log(prosecnaVisina(sportisti));

 //igrali za tim:
 let igraliZaTim = (sportisti, tim) => {
     let br = 0;
     sportisti.forEach(s=>{
        if(s.timovi.includes("Chicago Bulls")) {
            br++;
        }
     });
     return br;
     
    }
 console.log(igraliZaTim(sportisti, "Chicago Bulls"))

 //najmanje transfera:
 let najmanjeTransfera = sportisti => {
     let min = sportisti[0].timovi.length;
     let index = 0;
     sportisti.forEach((s, i )=>{
        if(s.timovi.length < min) {
            min = s.timovi.length;
            index = i;

        }
     });
     return sportisti[index].imePrezime
 }
 console.log(najmanjeTransfera(sportisti));

 //visi tim:
 let visiTim = sportisti => {
     let tim1 = 0;
     let tim2=0;
    let s1= 0;
    let s2=0;
    let index = 1;
    sportisti.forEach(s => {
        if(index % 2 == 0) {
            s1 += s.visina;
            tim1 ++;
        } else {
            s2 += s.visina;
            tim2 ++;
        }
        

    });
   
    
  
   // console.log(s1, s2)
    let p1= s1 /tim1;
        let p2=s2/tim2;
    if(p1 > p2) {
        return "Visa je prva grupa"
    } else {
        return "Visa je druga grupa"
    }
}

 
console.log(visiTim(sportisti));

//trener vidi:
let trenerVidi = sportisti => {
     
    let br = 0;
    let najvisi = sportisti[0].visina;
    
   sportisti.forEach(s=>{
        
        if(najvisi < s.visina ) {
            najvisi = s.visina;
            br++;
            }
    });
    console.log(br)
    return br;
}
console.log(trenerVidi(sportisti))

console.log(sportisti[0].visina)




