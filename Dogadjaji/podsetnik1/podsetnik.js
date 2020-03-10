let ulZadaci = document.querySelector('ul');
let liZadaci = document.querySelectorAll('li');

liZadaci.forEach(li =>{ //kad se jednom klikne precrta, kad se drugi put klikne brise liniju
    li.addEventListener('dblclick', ()=>{ //dblclick - double click
        if(li.style.textDecoration == 'line-through'){
            li.style.textDecoration = 'none';
            li.style.opacity = '1';
        } else {
        li.style.textDecoration = 'line-through';
        li.style.opacity = '0.7'    
        }
    });
});
