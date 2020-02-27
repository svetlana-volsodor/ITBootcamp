//KREIRANJE OBJEKTA BLOG


let blog = {     //ime promenljive isto kao i svako drugo
    title: 'Moj prvi blog',
    content:'Neki tekst...',
    author:'Svetlana Dimitijevic'
};  
console.log(blog);
console.log(typeof blog) //"typeof" za odredjivanje tipa promenljive
console.log(typeof 5);
console.log(typeof true);
console.log(typeof 'nesto');

//PRISTUPANJE OSOBINI:

console.log(blog.title);
console.log(blog['title']);

//MENJANJE VREDNOSTI PROMENLJIVE:
blog.content = "Opet neki tekst"
console.log(blog);
//ILI:
blog['content'] = "Stvarno novi tekst";
console.log(blog.content);

let blog1 = {
    title: "Blog 1!",
    content: "Tekst 1 - naravno.",
    likes: 0,
    dislikes: 5 
};


let blog2 = {
    title: "Blog 2!",
    content: "Tekst 2 - ponovo",
    likes: 20,
    dislikes: 20
};


let blog3 = {
    title: "Blog 3?",
    content: "Tekst 3 - Gle cuda!",
    likes: 5,
    dislikes: 50
};

let user = {
    username: "JohnTaylor",
    age: 70,
    blogs: ["title1", "title2", "title3"],
    login:function(){
        console.log("Ulogovani ste.");
    },
    logBlogs:function(){ //kljucna rec "THIS" za pristupanje propertijima unutar objekta
        this.blogs.forEach(b => {
            console.log(b);
        });
    }
};
console.log(user.username);


let arrBlogs = user.blogs;//preuzimam naslove blogova kao niz
for(let i = 0; i < arrBlogs.length; i++) {
    console.log(`Naslov bloga je ${arrBlogs[i]}`);
}

//ISPIS NIZA BLOGOVA FOREACH METODOM:
arrBlogs.forEach( blog => {
    console.log(blog); //"blog" je kao "arrBlogs[i]"" u prethodnom nacinu;
    //console.log(`Naslov je ${blog}`)
});

//POZIV METODA:
user.login();

//POZIV PROPERTIJA UNUTAR METODA:
user.logBlogs();
console.log(this);

//NIZ OBJEKATA:
let blogs = [blog1, blog2, blog3];
//ITERACIJA OBJEKTIMA FOREACH MEDODOM - ispis celih objekata:
blogs.forEach(blog => {
    console.log(blog);   //foreach se krece po nizu kao for petljom pa ne treba let i=0; i<n;i++, jer se to podrazumeva, 
});                      //dohvatice svaki od elemenata niza

//iteracije roreach objekata - ispis naslova:
console.log(blog1.title);
blogs.forEach( blog => {
    console.log(blog.title);
});

//prikazivanje i iteracija "for" petljom:
for(let i = 0; i < blogs.length; i++) {
    console.log(blogs[i].title);
    //console.log(blogs[i]["title"]); - drugi nacin za ispis
}

//Napraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona vraca ukupan broj lajkova
 let ukupno = 0;
 blogs.forEach(elem => {
      ukupno += elem.likes;
 });
console.log(ukupno);
//isto to kroz arrow funkc:

let ukupnoLajkova = blogs => {
    let ukupno = 0;
    blogs.forEach(elem => {
        ukupno += elem.likes;
    });
  return ukupno;
}
console.log(ukupnoLajkova(blogs));

//arrow fnkc kojoj se prosledjuje niz objekata a ona vraca prosecan broj lajkova
let prosecnoLajkova = niz => {
    let ukupno = ukupnoLajkova(niz); //pozivamo prethodno napravljenu funkc
    let br = niz.length;
    let avg = ukupno / br;
    return avg;
}
console.log(prosecnoLajkova(blogs));

let prosecnoDislajkova = niz => {
    let ukupno = 0;
    niz.forEach( x => {
        ukupno += x.dislikes;
    });
    let broj = niz.length;
    let avg = ukupno/broj;
    return avg;
}
console.log(prosecnoDislajkova(blogs));

//arrow funkc kojj se prosledj niz objekata a ona ispisuje sve one naslove blogova
// koji imaju vise pozitivnih nego negativnih ocena
let visePozitivnih = niz => {
    niz.forEach( elem => {  //hvatac elemenata
        let poz = elem.likes;
        let neg = elem.dislikes;
        if(poz > neg) {
            console.log(elem.title);
        }
    });

};
visePozitivnih(blogs);

//arrow funkc kojoj se prosl niz objekata a ona ispisuje sve naslov koji se zavrsavaju uzvicnikom
let uzvicnik = blogs => {
    blogs.forEach(blog => {
        let naslov = blog.title;
        if(naslov.endsWith('!')) {
            console.log(naslov);
        }

    }); 
};
uzvicnik(blogs);

//OBJEKAT U OBJEKTU:
let user1 = {
    username: "PeraKojotSuperGenije",
    age: 45,
    blogs: [blog1, blog2, blog3],
    logBlogs: function(){
        this.blogs.forEach( b => {
            console.log(b);
        });
    },
    logTitlesBlogs: function(){
        this.blogs.forEach( b => {
            console.log(b.title);
        });
    }
};

console.log(user1);
user1.logBlogs();
user1.logTitlesBlogs();

//Napraviti niz korisnika gde svaki od korisnika sadrži niz
//blogova. Svaki blog u ovom nizu je objekat.
let user2 = {
    username: "DuskoDugousko",
    age: 16,
    blogs: [blog1, blog2]
}
console.log(user2)

let user3 = {
    username: "SimaStrahota",
    age: 26,
    blogs: [blog1, blog3]
}
console.log(user3);

//NIZ KORISNIKA:
let users = [user1, user2, user3];

//Ispisati imena onih autora koji imaju ispod 18 godina:
users.forEach(elem =>{
    let god = elem.age;
    if(god < 18) {
        console.log(elem.username);
    }
});
    let maloletni = korisnici =>{
        korisnici.forEach(elem => {
        let god = elem.age;
        if(god < 18) {
            console.log(elem.username)
        }
    });
}
maloletni(users);


//Ispisati naslove onih blogova koji imaju više od 50 lajkova:
let popularniBlogovi = korisnici => {
    korisnici.forEach(k => {
        let nizBlogova = k.blogs;
        nizBlogova.forEach( b=> {
            let lajkovi = b.likes;
            if(lajkovi > 50) {
                console.log(b.title);
            }
        });
    });
};
popularniBlogovi(users);

//Ispisati sve blogove autora čiji je username ’PeraKojot'..:
let blogoviAutora = korisnici => {
    korisnici.forEach( k => {
        //ako je username nekog korisnika "pera.." tek tada ispisati niz tih blogova
        if(k.username == "DuskoDugousko") {
            let nizBlogova = k.blogs;
            nizBlogova.forEach( b =>{
                console.log(b.title);
            });
        }

    });
};
blogoviAutora(users);

//*blogovi autora i ime
let blogoviAutora1 = (korisnici, ime) => {
    korisnici.forEach( k => {
        //ako je username nekog korisnika "pera.." tek tada ispisati niz tih blogova
        if(k.username == ime) {
            let nizBlogova = k.blogs;
            nizBlogova.forEach( b =>{
                console.log(b.title);
            });
        }

    });
};
blogoviAutora1(users, "SimaStrahota");
blogoviAutora1(users, "DuskoDugousko");

//Ispisati imena onih autora koji imaju ukupno više od 100
//lajkova za blogove koje su napisali
let popularniAutori = autori => {
    // let sumLikes = 0; ako "sumu" stavimo van foreach petlje dobicemo ukupno lajkove za sve autore
    autori.forEach( a => {
        let nizBlogova = a.blogs;
        let sumLikes = 0;//pojedinacni korisnici; suma lajkova po korisniku; sa svakim novim korisnikom suma se resetuje na 0
        nizBlogova.forEach( b =>{
            sumLikes += b.likes;
        });
        if(sumLikes > 100) {
            console.log(a.username)
        }
    });
};
popularniAutori(users);

//2.nacin, sa vec uradjenom funkcijom za ukupan broj lajkova:
let popularniAutori2 = autori => {
    
    autori.forEach( a => {
        let nizBlogova = a.blogs;
        let sumLikes = ukupnoLajkova(nizBlogova)
        if(sumLikes > 100) {
            console.log(a.username)
        }
    });
};
popularniAutori2(users);

//Ispisati naslove blogova koji imaju natprosecni broj pozitivnih i ispodprosecan broj negativnih ocena
let superBlog = niz => {
    let sumLikes = 0;//suma svih lajkova svih blogova
    let sumDis = 0;
    let br = 0;//broj svih blogova
    niz.forEach( a =>{
        let nizBlogova = a.blogs;
        nizBlogova.forEach( b => {
            br++;
            sumLikes += b.likes;
            sumDis += b.dislikes;
        });
        
    });

    let avgLikes = sumLikes/br;
    let avgDis = sumDis/br;

    niz.forEach( a => {
        let nizBlogova = a.blogs;
        nizBlogova.forEach( b => {
            if(avgLikes < b.likes && avgDis > b.dislikes) {
                console.log(b.title);
            }
        });
    });
    
}
superBlog(users);






