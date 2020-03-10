//export let createDiv = (cls, parent, whereChild)=>{ //moze i ovako da se eksportuje
    let createDiv = (cls, parent, whereChild)=>{ //moze i ovako da se eksportuje

    let div = document.createElement('div');
    div.classList.add(cls); //parametar i funkcije za klasu
    let text = document.createElement('div');
    text.classList.add('text');
    let h2 = document.createElement('h2');
    text.appendChild(h2);
    div.appendChild(text);
    //whereChild je prosledjen kao parametar
    parent.insertBefore(div, whereChild);
    div.style.display = "none";
    return [div, h2]; //vracam niz 
};

export default createDiv;