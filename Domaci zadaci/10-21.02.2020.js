
let dan1 = {
    datum: "21.02.2020.",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperatura: [2, 4, 8, 12, 7, 3, 1],
    prosecnaTemperatura:function(){
        let s=0;
        let br = this.temperatura.length
        
        for(let i = 0; i<this.temperatura.length; i++) {
            s += this.temperatura[i];

        }
        let avTemp = s/br;
        return avTemp;
    }
        
}
let prosecna = dan1.prosecnaTemperatura();
console.log(prosecna);

let dan2 = {
    datum: "20.02.2020.",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperatura: [0, 4, 6, 9, 11, 8, 5]
}

let dan3 = {
    datum: "19.02.2020.",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperatura: [3, 7, 10, 11, 13, 8, 4]
}
    
let dan4 = {
    datum: "18.02.2020.",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperatura: [0, 3, 6, 8, 10, 9, 5]
}    



let dani = [dan1, dan2, dan3, dan4];
console.log(dani);

let maksTemperatura = dani => {
    let maxx = [];
    dani.forEach(element => {
        
        let nizTemp = element.temperatura;
        
        let max = nizTemp[0];
        for(let i = 1; i<nizTemp.length; i++) {
            if(max < nizTemp[i]) {
                max = nizTemp[i];
            }
                      
        }
        maxx.push(max);
        //console.log(max) 
        });
        //console.log(maxx)
        let ultMaxx = maxx[0];
        for(let i = 1; i < maxx.length; i++) {
            if(ultMaxx < maxx[i]) {
                ultMaxx = maxx[i];
            }
        }
        
        return ultMaxx;
    };

    console.log(maksTemperatura(dani));