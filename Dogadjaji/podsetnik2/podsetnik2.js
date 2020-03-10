let ulZadaci = document.querySelector('ul');
let liZadaci = document.querySelectorAll('li');

liZadaci.forEach(li =>{ 
    li.addEventListener('dblclick', (e)=>{ //dblclick - double click
        //console.log(e.target);
        if(e.target.style.textDecoration == 'line-through'){
            e.target.style.textDecoration = 'none';
        } else {
        e.target.style.textDecoration = 'line-through';}
    });
});
