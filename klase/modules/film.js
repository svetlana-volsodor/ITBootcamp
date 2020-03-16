export default class Film {
    constructor (n, r, g, o){
        this.fNaslov = n;
        this.fReziser = r;
        this.fGodina = g; //---!!!! SETTER POZIVATI I U KONSTRUKTORU 
        this.fOcena = o;
    }
   stampaj() {
       let title = this.naslov;
       console.log(`Naziv filma je ${title}, reziser je ${this.reziser} a godina izdanja ${this.godinaIzdanja}`)
   }
   set fNaslov(n){
       this.naslov = n;
   }
   get fNaslov(){
       return this.naslov;
   }
   set fReziser(r){
       this.reziser = r;
   }
   get fReziser(){
       return this.reziser;
   }
   set fGodina(g){
       if(g > 1800) {
           this.godinaIzdanja = g;
       } else {
           this.godinaIzdanja = 1800;
       }
   }
   get fGodina(){
       return this.godinaIzdanja;
   }
   set fOcena(o){
       this.ocena = o;
   }
   get fOcena(){
       return this.ocena;
   }
   prosecnaOcena(){
       let s= 0;
       let br = this.ocena.length;
       let niz = this.ocena;
       niz.forEach(e=>{
        s+=e;
       });
       let arSr = s/br;
       return arSr;
   }
}