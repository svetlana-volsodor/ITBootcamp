import { Chatroom } from "./chat.js";
import {ChatUI} from "./ui.js";

//DOM elementi
let chatList = document.querySelector('#ulMessages');
let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');
let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');
let rooms = document.querySelector('nav');
let updatedUsername = document.querySelector('#divUpdatedUsername');
let buttons = document.querySelectorAll('button');
let icon = document.querySelector('#icon');
let formColor = document.querySelector('#formColor');
let inputColor = document.querySelector('#color');
let htmlLI = document.querySelectorAll('li');

//provera username-a u lokalnoj memoriji
let checkUsername = ()=>{
    if(localStorage.usernameLS){
        return localStorage.usernameLS;
    } else {
        return "anonymous"
    }
}



//kreiranje nove instance
let chatroom = new Chatroom('js', checkUsername());
let chatui = new ChatUI(chatList);

//Provera prilikom ucitavanja stranice
//koja soba je poslednja posecena, nju ucitati
let checkRoom = () =>{
    if(localStorage.roomLS){
        return localStorage.roomLS;
    } else {
        return 'general';
    }
}

chatroom.updateRoom(checkRoom());

//poslednjoj posecenoj sobi dodati klasu koja boji dugme
buttons.forEach(b =>{
    if(b.id == checkRoom()){
        b.classList.add('btn-selected');
    }
});

//ispis poruka
chatroom.getChets((data)=>{
    console.log(data);
    chatui.templateLI(data);
});

//kada je submit na dugme Send- posalji poruku
formMessage.addEventListener('submit', (e)=>{
    e.preventDefault();
    let message = inputMessage.value;
    chatroom.addChat(message)
        .then(()=>{formMessage.reset();})
        .catch((error)=>{console.log(error)});//kad ima samo console.log moze bez {}

    chatui.clear();
    chatroom.getChets(data=>{
        chatui.templateLI(data);
    });
});   
 
//kakda je submit dugme Update izmeni korisnicko ime
formUsername.addEventListener('submit', (e)=>{
    e.preventDefault();
    let patternUsername = /^[^\s]{5,}$/;
    if(patternUsername.test(inputUsername.value)){
    let newUsername = inputUsername.value;
    chatroom.updateUsername(newUsername);
    formUsername.reset();


    //osveziti cet prilikom promene korisnickog imena, tao sto ga izbrisemo i ucitamo ponovo
    chatui.clear();

    chatroom.getChets(data=>{
        chatui.templateLI(data);
    });

    /*formColor.addEventListener('submit', e=>{
        e.preventDefault();
        let color = inputColor.value;
        document.body.style.backgroundColor = color;
    });*/
    formColor.addEventListener('submit', e=>{
        e.preventDefault();
        let color = inputColor.value;
        setTimeout(()=>{
        document.body.style.backgroundColor = color;
    },500)
        });

    //kada se updatuje username prikazati porku u trajanju od
//3 sekunde
    updatedUsername.innerHTML = `Your username was updated to <span id="spanNewUsername">${newUsername}</span>`;

        setTimeout(()=>{
            updatedUsername.innerHTML =``;
        }, 3000);
    }  else {
        alert('Invalid username!');
    }
});



//promena sobe:
rooms.addEventListener('click', (e)=>{
    if(e.target.tagName == "BUTTON"){
        //kada je kliknuto na dugme dodeliti mu klasu da je bas ono selektovano
        
        //1.ocistiti dugme od btn-selected klase
        buttons.forEach(b=>{
            if(b.classList.contains('btn-selected')){
                b.classList.remove('btn-selected');
            }
        });
        let btnId = e.target.getAttribute('id');
        let btn = document.getElementById(btnId);

        //2.selektovanom dugmetu dodati btn-selected klasu

        btn.classList.add('btn-selected');
        


        //izbrisati sve poruke sa stranice
        chatui.clear();

        //promeniti sobu
        let newRoom = e.target.getAttribute('id');
        chatroom.updateRoom(newRoom);
        localStorage.setItem('roomLS', newRoom);

        
        //ucitati poruke za promenjenu sobu
        chatroom.getChets((data)=>{
            console.log(data);
            chatui.templateLI(data);
        });

    }


});  

htmlLI.addEventListener('click', e=>{
    if(e.target.tagName == 'IMG')
    if(e.classList('me')){
        e.target.remove()

    } 
});