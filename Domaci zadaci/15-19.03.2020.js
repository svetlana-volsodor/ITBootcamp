// Procitati filmove koje je rezirao Dzordz Lukas:

db.collection('movies')
.where('Director.Last_name', '==', "Lucas")
.where('Director.First_name', '==', 'George')
.get()
.then(snapshot => {
        snapshot.docs.forEach(doc=> {
            let polja = doc.data();
            let id = doc.id; 
            console.log(id, "=>", polja)
    });
})
.catch(error =>{
    console.error(`Greska pri preuzimanju filmova:`, error);
});

// Procitati filmove cija je ocena izmedju 5 i 10

db.collection('movies')
.where('Rating', '>=', 5)
.where('Rating', '<=', 10)
.get()
.then(snapshot => {
        snapshot.docs.forEach(doc=> {
            let polja = doc.data();
            let id = doc.id; 
            console.log(id, "=>", polja)
    });
})
.catch(error =>{
    console.error(`Greska pri preuzimanju filmova:`, error);
});

// Procitati filmove ciji je zanr: komedija, tragedija ili drama:

db.collection('movies')
.where('Genres', 'array-contains-any', ['Comedy', 'Drama', 'Tragedy'])
.get()
.then(snapshot=>{
    snapshot.docs.forEach(doc=>{
        let polja = doc.data();
            let id = doc.id; 
            console.log(id, "=>", polja)
    });
})
.catch(error=>{
    console.error(`Greska pri preuzimanju filmova:`, error);
});

// Procitati filmove koji su izasli u 21. veku:

db.collection('movies')
.where('Release_year', '>=', 2000)
.get()
.then(snapshot=>{
    snapshot.docs.forEach(doc=>{
        let polja = doc.data();
            let id = doc.id; 
            console.log(id, "=>", polja);
    });
})
.catch(error=>{
    console.error(`Greska pri preuzimanju filmova:`, error);
});

// Prikazati sve informacije o najbolje rangiranom filmu:

db.collection('movies')
.orderBy('Rating', 'desc')
.limit(1)
.get()
.then(snapshot=>{
    snapshot.docs.forEach(doc=>{
        let polja = doc.data();
            let id = doc.id; 
            console.log(id, "=>", polja);
    });
})
.catch(error=>{
    console.error(`Greska pri preuzimanju filmova:`, error);
});

// Prikazati sve informacije o najgore rangiranoj drami:

db.collection('movies')
.where('Genres', 'array-contains', 'Drama')
.orderBy('Rating')
.limit(1)
.get()
.then(snapshot=>{
    snapshot.docs.forEach(doc=>{
        let polja = doc.data();
            let id = doc.id; 
            console.log(id, "=>", polja);
    });
})
.catch(error=>{
    console.error(`Greska pri preuzimanju filmova:`, error);
});