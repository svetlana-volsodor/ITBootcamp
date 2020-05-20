export class Chatroom{
//  konstruktor
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats')
        this.unsub;
    }
    
    // seteri 
    set username(u){
        this._username = u;
    }
    set room(r){
        this._room = r;
    }
    // geteri
    get username(){
        return this._username;
    }
    get room(){
        return this._room;
    }

    async addChat(mess) {  //pravimo asinhroni metod, primace poruku kao parametar
        //Hvatanje tekuceg datuma potrebnog za TIMESTAMP
        let date = new Date();
        
        //kreiranje objekta/dokumenta koji prosledjujemo bazi:
        let docChat = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        };
        //cuvanje dokumenta u bazi:  await se kotisti samo u asinhtonim funkc, koje se obavjaju nezavisno od ostatka koda; kad se izvrsi
        let response = await this.chats.add(docChat);  //kada u this.chats dodamo kreirani chat - to je odgovor koji ceka (awaits)
        return response;
    }

    getChets(callback){   //listener koji stalno osluskuje da li se desila promena, tj ako se desi added aktivira se funkcija/metod
        this.unsub = this.chats
                .where('room', '==', this.room)
                .orderBy('created_at')
                .onSnapshot(snapshot=>{
                    snapshot.docChanges().forEach( change =>{
                        //Ako je poruka dodata u bazuonda raditi update
                        if(change.type === 'added'){
                            //uradi update
                            callback(change.doc.data());
                        }
                    });
                });
    }

    updateUsername(uu){
        //sustinski nepravilno jer samo menja vrednost lokalne promenljive, ne menja vrednost username-a u bazi
        this.username = uu;
        localStorage.setItem('usernameLS', uu);
    }

    updateRoom(ur){
        this.room = ur;
        //console.log('Updated room');
        if(this.unsub){
            this.unsub(); //pozivamo kako bismo resetovali listener
        }
    }
}

/*nova instanca klase (novi objekat)
let chatroom = new Chatroom('general', 'PeraPeric');*/
//console.log(chatroom);

/*
chatroom.addChat('Zdravo!')
.then(()=>{
    console.log('Cet je dodat!');
})
.catch(error=>{
    console.log(error);
});
*/

/*
chatroom.updateRoom('general');

chatroom.getChets(data => {
    console.log(data);
});

chatroom.updateRoom('js');
chatroom.getChets(data => {
    console.log(data);
});
*/
/*
setTimeout(()=>{
    chatroom.updateRoom('js');
    chatroom.updateUsername('Tina');
    chatroom.getChets(data=>{
        console.log(data);
    });
    chatroom.addChat('Kako si Milice?');
}, 3000);
*/