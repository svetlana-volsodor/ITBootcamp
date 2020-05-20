//console.log(db); //- objekat konekcije

let kolekcija1 = db.collection('tasks');//objekat kolekcije
console.log(kolekcija1);

let task01 = kolekcija1.doc('task-01');//, pristup preko objekta kolekcije; ime dokumenta task-01
console.log(task01);

//let task02 = kolekcija1.doc('task-02')
let task02 = db.doc('tasks/task-02'); //ovako (preko baze) kad navodim ime moram celu putanju
console.log(task02);

let task001 = db.collection('tasks').doc('task-01'); //moze i ovako, postupno; preko objekta kolekcije
console.log(task001);

//DODAVANJE NOVOG DOKUMENTA U KOLEKCIJU KROZ PROGRAM:

let c1 = {     //pomocni objekat koji prosledjujem u set metodu pri kreiranju 'c1'
    name:"Filip Filipovic",
    age: 50,
    addresses: ["Nis", "Zrenjanin", "Negotin"],
    salary: 1200.00,
    
};
/*db.collection('customers').doc().set(c1)
.then(()=>{
    console.log('Customer added successfully');
})
.catch((error)=>{
    console.error('Error adding customer:', error);  //poseban kanal za ispis gresaka console.error
});*/

db.collection('customers').doc('customer-01').set(c1)
.then(()=>{
    console.log('Customer added successfully');
})
.catch((error)=>{
    console.error('Error adding customer:', error);  //poseban kanal za ispis gresaka console.error
});

let c2 = {
    gender: "male",
    height: 180
};


let s = {        //kreiramo objekat za MERGE kako bi dodao parametre a ne pregazio u postojecoj databazi
    merge: true
};
db.collection('customers').doc('customer-01').set(c2, s)
.then(()=>{
    console.log('Customer added successfully');
})
.catch((error)=>{
    console.error('Error adding customer:', error);  //poseban kanal za ispis gresaka console.error
});

let datum1 = new Date("2020-03-17 19:00:00"); //kad hocu sama da zadam datum i vreme
let datum2 = new Date("2020-03-17 21:00:00");
let t3 = {
    title: "Fudbal",
    start_date: firebase.firestore.Timestamp.fromDate(datum1),
    due_date: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Fudbal sa drustvom"
};
db.collection('tasks').doc('task-03').set(t3)
.then(()=>{
    console.log("TAsk successfully added");
})
.catch(error =>{
    console.error("cannot add task: ", error)
});

db.collection('tasks').doc('task-03').update({
    description: "Fudbalica sa drustvom ako me pusti premijerka"
}).then(()=>{
    console.log("Task updated")
})
.catch(error =>{
    console.error('Task cannot be updated', error);
});

/*  Podaci se upisuju u bazu
    Podaci mogu da se menjaju u bazi 
    Podaci mogu da se citaju iz baze */
    