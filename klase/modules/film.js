export default class Film {
    constructor (n, r, godIzd){
        this.fNaslov = n;
        this.fReziser = r;
        this.fGodina = godIzd; //---!!!! SETTER POZIVATI I U KONSTRUKTORU 
    }
   stampaj() {
       let title = this.naslov;
       console.log(`Naziv filma je ${title}, reziser je ${this.reziser} a godina izdanja ${this.godinaIzdanja}`)
   }
   set fNaslov(n){
       this.naslov = n;
   }
   set fReziser(r){
       this.reziser = r;
   }
   set fGodina(g){
       if(g > 1800) {
           this.godinaIzdanja = g;
       } else {
           this.godinaIzdanja = 1800;
       }
   }



}