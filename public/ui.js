//UI - user interface
export class ChatUI{
    
    constructor(l){
        this.list = l;
    }
    set list(l){
        this._list = l;
    }
    get list(){
        return this._list;
    }
    formatDate(date){ 
     
        
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        let h = date.getHours();
        let min = date.getMinutes();
        let strDate;
        //Dodavanje 0 ispred jednocifrenih vrednosti:
      
        if(this.date == d){
        
            d = String(d).padStart(2,"0");
            m = String(m).padStart(2,"0");
            h =String(h).padStart(2, "0");
            min = String(min).padStart(2, "0");
            let strDate = h + ":" + min;
            
            return strDate;
        } else {
            d = String(d).padStart(2,"0");
            m = String(m).padStart(2,"0");
            h =String(h).padStart(2, "0");
            min = String(min).padStart(2, "0");
        let strDate = d + "." + m +"." + y +".-" + h + ":" + min;
        return strDate;}
        
       

        
        
    }

        //metod koji pravi osnovu za prikaz list item-a
        //data koji prosledjjemo je objekat/ dokument iz baze
    templateLI(data){
         //pretvotiri u datum
        let date = data.created_at.toDate();

        let strDate = this.formatDate(date);
        

        let htmlLI = `<li `;
        

        if(data.username == localStorage.usernameLS){
            htmlLI += `class="me">`;
        } else {
            htmlLI +=`class="not-me">`;
        }
        htmlLI +=
        `
            <span class="username">${data.username} :</span>
            <span class="message">${data.message}</span>
            <div class="date">${strDate}</div>
            <span class="icon"><img src="images/kanta.png" height="15px"></span>
        </li>`;
        this.list.innerHTML += htmlLI;
        this.list.scrollTop = this.list.scrollHeight;

        
    
    }
    
    clear(){
        this.list.innerHTML = ``;
    }
}
