let task = db.collection('tasks').doc('task-03');
//console.log(task) //objekat dokumenta je ovako necitljjv

/*task.get()
.then(doc =>{
    if(doc.exists){
        let temp = doc.data();//tek unutar callback funkcije nakon sto prosledim dokument (doc) moze da se kaze  doc.date()
        console.log(doc.id, temp);
    }
    else {
        console.log('No such document!');
    }
})
.catch(error=>{
    console.error('Cannon get document:', error);
});*/
/* 
let document = db.collection('').doc('')
KOd dokumenta imamo sledece metode:
//CRUD - create, read, update, delete
document.set(...) => postavlja polja (create)
document.update(..)=> menja postojeca polja (update)
document.delete(..)=> brise dokument (delete)
document.get(..)=> hvata vrednosti polja dokumenta (read)

NAKON BILO KOJE OD METODA POZIVAJU SE METODE
.then() i
.catch()
*/

//HVATAMO SVE DOKUMENTE IZ NEKE KOLEKCIJE

let tasks = db.collection('tasks');

/*tasks.get()
.then(snapshot=>{  //kolekcija = snapshot
    snapshot.docs.forEach(doc =>{
        console.log(doc.id,"=>", doc.data());
    });    
})
.catch(error=>{
    console.error('Cannot get documents from collection:', error);
});*/

//prikaz svih dokumenata iz kol, sortirane po odredjenom polju
//jedan orderBy radi, 
//za vise treba kreirati kompozitni index za ta polja preko linka koji dobijem u konzoli
//ogranicenje broja dokumenata koji prikazuje limit()

tasks
.orderBy('title', 'desc')  //orderBy - drugi parametar(asc/desc);  rastuci odnosno opadajuci redosled, asc je po defaultu
.orderBy('start_date')
.limit(2)
.get()
.then(snapshot=>{  //kolekcija = snapshot
    snapshot.docs.forEach(doc =>{
        console.log(doc.id,"=>", doc.data());
    });    
})
.catch(error=>{
    console.error('Cannot get documents from collection:', error);
});

//FILTRIRANJE:
//where(field, comparison, value)

/*tasks
.where('priority', '==', true)

.limit(2)
.get()
.then(snapshot=>{  //kolekcija = snapshot
    snapshot.docs.forEach(doc =>{
        console.log(doc.id,"=>", doc.data());
    });    
})
.catch(error=>{
    console.error('Cannot get documents from collection:', error);
});*/

