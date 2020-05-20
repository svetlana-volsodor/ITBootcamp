/*let form = document.querySelector('form');
let poruka = document.querySelector('#poruka');
form.addEventListener('submit', event=>{
    event.preventDefault();
    let title = form.title.value;
    let startDate= form.start_date.value;
    let dueDate = form.due_date.value;
    let description = form.description.value;
    let priority;
    if(form.priority.checked){
        priority = true;
    } else {
        priority = false;
    }
//console.log(title, startDate, dueDate, description, priority);
    db.collection('tasks').doc().set({
        title: title,
        start_date : startDate,
        due_date: dueDate,
        description: description,
        priority: priority
    })
    .then(()=>{
        poruka.innerHTML = `Task sa naslovom ${title} je dodat u bazu!`;
    })
    .catch(error=>{
        poruka.innerHTML = `Greska prilikom odavanja taska sa naslovom ${title}: ${error}!`;
    });
    //form.title.value = ""; ciscenje forme nakon submita
    form.reset();
});*/


let form = document.querySelector('form');
let poruka = document.querySelector('#poruka');
let lista = document.querySelector('ul')

/*db.collection('tasks')
.orderBy("start_date", "desc")
.get()
.then(snapshot=>{
    snapshot.docs.forEach(doc=>{
        let obj = doc.data();
        let li = document.createElement('li');
        li.innerText = `${obj.title}(${obj.start_date}) [${obj.description}]`;
        if(obj.priority == true) {
            li.style.color = "red";
        }
        lista.appendChild(li);
    });
})
.catch(error=>{
    poruka.innerHTML = `Nemoguce dohvatiti zadatke: ${error}`;
});*/

db.collection('tasks')
.onSnapshot(snapshot=>{
    snapshot.docChanges().forEach(change =>{ //ovo je kao addListener
        //console.log(change);
        let type = change.type; //tip promene dokumenta "added" ili 'removed'
        let doc = change.doc; //dokument na koji se promena odnosi (snapshot)
        if(type == "added") {
            let obj = doc.data();
            let li = document.createElement('li');
            li.innerText = `${obj.title}(${obj.start_date}) [${obj.description}]`;
            if(obj.priority == true) {
                li.style.color = "red";
        }
        li.setAttribute('data-id', doc.id);
        lista.appendChild(li);
        let button = document.createElement('button');
        button.innerText = "delete";
        li.appendChild(button);

        }
        else if(type == "removed"){
            let id = doc.id;
            let lis = document.querySelectorAll('li');
            lis.forEach(li =>{
                if(li.getAttribute('data-id') == doc.id){
                    li.remove();
                }
            });
        }
    });
});



form.addEventListener('submit', event=>{
    event.preventDefault();
    let title = form.title.value;
    let datum1 = new Date(form.start_date.value);
    let datum2 = new Date(form.due_date.value);
    
    let startDate= firebase.firestore.Timestamp.fromDate(datum1);
    let dueDate = firebase.firestore.Timestamp.fromDate(datum2);
    let description = form.description.value;
    let priority;
    if(form.priority.checked){
        priority = true;
    } else {
        priority = false;
    }
//console.log(title, startDate, dueDate, description, priority);
    db.collection('tasks').doc().set({
        title: title,
        start_date : startDate,
        due_date: dueDate,
        description: description,
        priority: priority
    })
    .then(()=>{
        poruka.innerHTML += `Task sa naslovom ${title} je dodat u bazu!`;
    })
    .catch(error=>{
        poruka.innerHTML += `Greska prilikom odavanja taska sa naslovom ${title}: ${error}!`;
    });
    //form.title.value = ""; ciscenje forme nakon submita
    form.reset();
});

lista.addEventListener('click', e=>{
    if(e.target.tagName === "BUTTON"){
        let id = e.target.parentElement.getAttribute('data-id');
        //console.log(id);
        db.collection('tasks')
        .doc(id)
        .delete()
        .then(()=>{
            console.log('zadatak izbrisan')
            poruka.innerHTML+= 'Zadatak je izbrisan';
        })
        .catch(error=>{
            console.log(`nemoguce je obrisati dokument : ${error}`)
            poruka.innerHTML += `Nemoguce je obrisati dokument: ${error}`;
        });
    }
});