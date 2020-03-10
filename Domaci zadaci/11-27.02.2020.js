let niz = ["Ponedeljak", "Utorak", "Sreda", "Cetvrtak", "Petak"];

let item = document.querySelectorAll('li');
 item.forEach((elem, index) =>{
    elem.innerText += `${niz[index]}`
 });

 let klasaKraj = document.querySelectorAll('.kraj');
 klasaKraj.forEach(kraj=>{
    kraj.setAttribute('style', 'color: red');
 });
