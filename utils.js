

export function didUserWin(player, computer){
    const rock = 1
    const paper = 2
    const scissors = 3
    //compare one answer vs the random answer
    if(player === computer){
        const result1 = "I'ts a tie, try again";
        return result1;
    } else if(player === rock && computer === paper){
        const resultText2 = "computer gets a point";
        return resultText2;
    } else if(player === paper && computer === scissors){
        const resultText3 = "computer gets a point";
        return resultText3;
    }else if(player === scissors && computer === rock){
        const resultText4 = "computer gets a point";
        return resultText4;
    }else if(player === rock && computer === scissors){
        const resultText5 = "player gets a point";
        return resultText5;
    } else if(player === paper && computer === rock){
        const resultText6 = "player gets a point";
        return resultText6;
    } else if(player === scissors && computer === paper){
        const resultText7 = "player gets a point";
        return resultText7;
    }
}


export function generateRandomNumber(){
    //generate random number as computers choice 
    const computersChoice = Math.ceil(Math.random()*3);
    return computersChoice;
}
