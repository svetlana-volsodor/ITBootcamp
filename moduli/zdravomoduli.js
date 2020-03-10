function zdravo(ime) {
    console.log(`Hello, ${ime}!`);
}

let ime = "Svetlana"; //globalna promenljiva za ovaj modul
export{zdravo, ime}; //eksportujemo funkciju zdravo i promenljivu ime