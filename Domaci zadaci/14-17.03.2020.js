let kolekcijaFilmovi = db.collection('movies');

//Dodavanje filmova:

let f1 = {
    Name: "Vertigo",
    Director: {
        First_name: "Alfred",
        Last_name: "Hitchcock"
    },
    Release_year: 1958,
    Genres: ["Mystery", "Romance", "Thriller"],
    Rating: 8.32
}

db.collection('movies').doc('movie-04').set(f1)
.then(()=>{
    console.log(`Movie was successfully added to the movie collection. `);
})
.catch(error=>{
    console.error(`Movie cannot be added to the collection:`, error);
});

let f2 = {
    Name: "Big Fish",
    Director: {
        First_name: "Tim",
        Last_name: "Burton"
    },
    Release_year: 2002,
    Genres: ["Adventure", "Drama"],
    Rating: 8.02
}

db.collection('movies').doc('movie-05').set(f2)
.then(()=>{
    console.log(`Movie was successfully added to the movie collection.`);
})
.catch(error=>{
    console.error(`MOvie cannot be added to the collection:`, error);
});

let f3 = {
    Name: "Arsenic and Old Lace",
    Director: {
        First_name: "Frank",
        Last_name: "Kapra"
    },
    Release_year: 1944,
    Genres: ["Comedy", "Thriller", "Crime", "Romance"],
    Rating: 8.03
}

db.collection('movies').doc('movie-06').set(f3)
.then(()=>{
    console.log(`Movie was successfully added to the movie collection.`);
})
.catch(error=>{
    console.error(`Movie cannot be added to the collection: `, error);
});

//Update filma:

db.collection('movies').doc('movie-05').update({
    Release_year: 2003
})
.then(()=>{
    console.log(`Movie was successfully updated`);
})
.catch(error=>{
    console.error(`Movie cannot be updated:`, error);
});

//Dodavanje zanra (elementa niza):

db.collection('movies').doc('movie-05').update({
    Genres: firebase.firestore.FieldValue.arrayUnion('Fantasy')
})
.then(()=>{
    console.log(`Movie was successfully updated`);
})
.catch(error=>{
    console.error(`Movie cannot be updated:`, error);
});

//Brisanje zanra(elementa niza):

db.collection('movies').doc('movie-06').update({
    Genres: firebase.firestore.FieldValue.arrayRemove('Romance')
})
.then(()=>{
    console.log(`Movie was successfully updated`);
})
.catch(error=>{
    console.error(`Movie cannot be updated:`, error);
});

//Menjanje imena i/ili pezimena rezisera (polja objekta u polju dokumenta):

db.collection('movies').doc('movie-06').update({
    "Director.Last_name": "Capra"
})
.then(()=>{
    console.log('Movie was successfully updated');
})
.catch(error=>{
    console.error('Movie cannot be updated:', error);
});

let f4 =  {
    Name: "Star Wars",
    Director: {
        First_name: "George",
        Last_name: "Lucas"
    },
    Release_year: 1977,
    Genres: ["Fantasy", "Adventure", "Action"],
    Rating: 8.63
}

let f5 = {
    Name: "Scary Movie 5",
    Director: {
        First_name: "David",
        Last_name: "Zucker"
    },
    Release_year: 2013,
    Genres: ["Comedy", "Horor"],
    Rating: 3.51
}

db.collection('movies').doc('movie-07').set(f4)
.then(()=>{
    console.log(`Movie was successfully added to the movie collection.`);
})
.catch(error=>{
    console.error(`Movie cannot be added to the collection: `, error);
});

db.collection('movies').doc('movie-08').set(f5)
.then(()=>{
    console.log(`Movie was successfully added to the movie collection.`);
})
.catch(error=>{
    console.error(`Movie cannot be added to the collection: `, error);
});
