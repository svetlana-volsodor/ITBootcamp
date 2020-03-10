
let tacniOdgovori = ["B", "A", "B", "B"];

let calculateScore = (odgovori, peti) => {
    let score = 0;
    odgovori.forEach((odgovor, index)=>{
        if(odgovor == tacniOdgovori[index]){
            score += 20;
        }
    });
    if(peti.length > 6){
        score+=20;
    }
    return score
};

export {tacniOdgovori, calculateScore};
