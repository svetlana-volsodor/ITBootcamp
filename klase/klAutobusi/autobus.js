export class Autobus {
     constructor(rb, bs){
         this.brSedista = bs;
         this.regBr = rb;
     }
     set regBr(rb){
         this._regBr = rb;
     }
     set brSedista(bs){
         this._brSedista = bs;
     }
     get regBr(){
         return this._regBr;
     }
     get brSedista(){
         return this._brSedista;
     }
     stampaj(){
         console.log(`Autobus ${this.regBr} ima ${this.brSedista} sedista.`);
     }
}