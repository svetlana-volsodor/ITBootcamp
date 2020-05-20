//prikaz svih dokumenata iz kolekcije sortiranih po imenu

db.collection('customers')
.orderBy('name')
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc=> {
        let polja = doc.data();
        let id = doc.id; 
        console.log(id, "=>", polja);
    });
})
.catch(error => {
    console.error('Error getting documents:', error);
});

//iz kolekcije customers procitati sve korisnike sa adresom u Nisu


db.collection('customers')
.where('addresses', 'array-contains', 'Nis') //nakon ovog ne moze 'orederBy', mora da se kreira index
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc=> {
        let polja = doc.data();
        let id = doc.id; 
        console.log(id, "=>", polja);
    });
})
.catch(error => {
    console.error('Error getting documents:', error);
});

//Imaju platu vecu ili jednaku 500:


db.collection('customers')
.where('salary', '>=', 500)
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc=> {
        let polja = doc.data();
        let id = doc.id; 
        console.log(id, "=>", polja);
    });
})
.catch(error => {
    console.error('Error getting documents:', error);
});

//plata izmedju 300 i 800


db.collection('customers')
.where('salary', '>=', 300)
.where('salary', '<=', 800)
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc=> {
        let polja = doc.data();
        let id = doc.id; 
        console.log(id, "=>", polja);
    });
})
.catch(error => {
    console.error('Error getting documents:', error);
});

//plata manja od 900, godine vise od 35


db.collection('customers')
.where('salary', '<', 900)
.where('age', '==', 35) //jedan operator moze samo u jednom polju
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc=> {
        let polja = doc.data();
        let id = doc.id; 
        console.log(id, "=>", polja);
    });
})
.catch(error => {
    console.error('Error getting documents:', error);
});

//adrese u Nisu ili Beogradu:
db.collection('customers')
.where('addresses', 'array-contains-any', ['Nis', 'Beograd'])
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc=> {
        let polja = doc.data();
        let id = doc.id; 
        console.log(id, "=>", polja);
    });
})
.catch(error => {
    console.error('Error getting documents:', error);
});

//iz kolekcije tasks procitati sve zadatke koji su prioritetni:
db.collection('tasks')
.where('priority', '==', true)
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc=> {
        let polja = doc.data();
        let id = doc.id; 
        console.log(id, "=>", polja);
    });
})
.catch(error => {
    console.error('Error getting documents:', error);
});

//procitati sve zadatke koji treba da se izvrse u tekucoj godini
let datum1 = "2020-01-01";
let datum2 = "2020-12-31"

//POREDJENJE KADA JE DATUM STRING
/*db.collection('tasks')
.where('start_date', '>=', datum1)
.where('start_date', '<=', datum2)
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc=> {
        let polja = doc.data();
        let id = doc.id; 
        console.log(id, "=>", polja);
    });
})
.catch(error => {
    console.error('Error getting documents:', error);
});*/


//POREDJENJE KADA JE DATUM TIMESTAMP
let d1 = new Date(datum1);
let d2 = new Date(datum2);
db.collection('tasks')
.where('start_date', '>=', firebase.firestore.Timestamp.fromDate(d1))
.where('start_date', '<=', firebase.firestore.Timestamp.fromDate(d2))
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc=> {
        let polja = doc.data();
        let id = doc.id; 
        console.log(id, "=>", polja);
    });
})
.catch(error => {
    console.error('Error getting documents:', error);

});

//svi izvrseni zadaci:

//KAO STRING:

db.collection('tasks')
.where('due_date','<=','2020-03-19')
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc=> {
        let polja = doc.data();
        let id = doc.id; 
        console.log(id, "=>", polja);
    });
})
.catch(error => {
    console.error('Error getting documents:', error);
});

//KADA JE POLJE TIMESTAMP
let now = new Date();
db.collection('tasks')
.where('due_date','<=',firebase.firestore.Timestamp.fromDate(now))
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc=> {
        let polja = doc.data();
        let id = doc.id; 
        console.log(id, "=>", polja);
    });
})
.catch(error => {
    console.error('Error getting documents:', error);
});

//iz kolekcije tasks procitati zadatke koji tek treba da pocnu
//STRING:
db.collection('tasks')
.where('start_date','>=','2020-03-19')
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc=> {
        let polja = doc.data();
        let id = doc.id; 
        console.log(id, "=>", polja);
    });
})
.catch(error => {
    console.error('Error getting documents:', error);
});

//TIMESTAMP:
db.collection('tasks')
.where('start_date','>=',firebase.firestore.Timestamp.fromDate(now))
.get()
.then(snapshot => {
    console.log('Dokumenti koji zadovoljavaju kriterijume su:')
    snapshot.docs.forEach(doc=> {
        let polja = doc.data();
        let id = doc.id; 
        console.log(id, "=>", polja);
    });
})
.catch(error => {
    console.error('Error getting documents:', error);
});

//u customers, sve klijente koji imaju 22, 25 ili 28 godina:

db.collection('customers')
.where('age', 'in', [22, 25, 35]) //in operator se koristi za jednu od poudjenih vrednosti
.get()
.then(snapshot => {
    snapshot.docs.forEach(doc=> {
        let polja = doc.data();
        let id = doc.id; 
        console.log(id, "=>", polja);
    });
})
.catch(error => {
    console.error('Error getting documents:', error);
});


