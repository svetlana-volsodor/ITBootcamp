import{Vozilo} from "./klase/vozilo.js";
import{Automobil} from "./klase/automobil.js";
import { Kamion } from "./klase/kamion.js";



let v1 = new Vozilo("Drumsko", "crvena");
v1.ispisiVozilo();
v1.vozi();

let a1 = new Automobil("drumsko", "plava", "NI111AA");
a1.ispisiVozilo();
a1.vozi();
console.log(a1.boja);
a1.ispisiAutomobil();

let k1 = new Kamion("teretno", "zuta", 4);
k1.ispisKamion();



