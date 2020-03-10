let knjiga1 = {
    naziv: 'Besnilo',
    autor: 'Borislav Pekic',
    link: 'https://vasilissa-online-knjige.blogspot.com/2018/09/borislav-pekic-besnilo.html',
    slika: '<img src="imagesK/1.jpg" width="350px">',
    procitana: true

}

let knjiga2 = {
    naziv: 'Bludni sin',
    autor: 'Carls Bukovski',
    link: 'https://vasilissa-online-knjige.blogspot.com/2018/10/charles-bukowski-bludni-sin.html',
    slika: '<img src="imagesK/2.jpg" width="350px">',
    procitana: true
}

let knjiga3 = {
    naziv: 'Zagonetni slucaj Stajlz',
    autor: 'Agata Kristi',
    link: 'https://vasilissa-online-knjige.blogspot.com/2018/08/agata-kristi-zagonetni-slucaj-stajlz.html',
    slika: '<img src="imagesK/3.jpg" width="350px">',
    procitana: false
}
 let knjiga4 = {
     naziv: 'Blistavo i strasno',
     autor: 'Bekim Fehmiu',
     link: 'https://vasilissa-online-knjige.blogspot.com/2018/09/bekim-fehmiu-blistavo-i-strasno.html',
     slika:'<img src="imagesK/4.jpg" width="350px">',
     procitana: false
 }
  
 let knjiga5 = {
     naziv: 'Samarkand',
     autor: 'Amin Maluf',
     link: 'https://vasilissa-online-knjige.blogspot.com/2018/08/amin-maluf-samarkand.html',
     slika: '<img src="imagesK/5.jpg" width="350px">',
     procitana: false
 }

 let knjiga6 = {
     naziv: 'Na Drini cuprija',
     autor:'Ivo Andric',
     link: 'https://biblioteka.elektronskaknjiga.com/na_drini_cuprija.php',
     slika: '<img src="imagesK/6.jpg" width="350px">',
     procitana: true 
}

 let knjige = [knjiga1, knjiga2, knjiga3, knjiga4, knjiga5, knjiga6];

 let divNaslov = document.createElement('div');
 document.body.prepend(divNaslov);
 let h1 = document.createElement('h1');
 divNaslov.appendChild(h1);
 h1.innerText = "Tabela knjiga"; 
 h1.style.textAlign = 'center'; 
 h1.style.color = '#222020';
 divNaslov.style.backgroundImage = 'url("imagesK/pattern.jpg")';
 document.body.style.fontFamily = 'cursive';
 document.body.style.backgroundImage = 'url("imagesK/Books.jpg")';
 
 divNaslov.style.margin ='0'
 let div = document.createElement("div");
 document.body.appendChild(div);
 let tabela = document.createElement('table');
   
    for(let i =0; i<knjige.length; i++){
        row = document.createElement('tr');
        cell1 = document.createElement('td');
        cell2 = document.createElement('td');
        a = document.createElement('a');
                    
        
        cell1.innerHTML = `<a href="${knjige[i].link}" target="_blank">${knjige[i].slika}</a>`       
        cell2.innerHTML = `${knjige[i].naziv}, ${knjige[i].autor}`;
            if(knjige[i].procitana == true){
                cell2.style.color = 'blue';
            }  else {
                cell2.style.color = 'grey';
            };

        cell1.style.width = '50%';
        cell2.style.width = '50%';
        cell2.style.textAlign = 'center' ;
        cell2.style.fontSize ='25px' ;
        cell2.style.fontWidth = 'bold';      
        tabela.style.border = 'purple 2px solid';
        tabela.style.margin = '0 auto'; 
        tabela.style.width = '700px' ; 
        tabela.style.backgroundColor = 'white';
        tabela.style.backgroundImage = 'url("imagesK/pattern.jpg")';

        
        
       
 div.appendChild(tabela);
 row.appendChild(cell1);
 row.appendChild(cell2);
 tabela.appendChild(row);
 

}


    