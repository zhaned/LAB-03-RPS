

export function didUserWin(player, computer){
    const rock = 1
    const paper = 2
    const scissors = 3
    //compare one answer vs the random answer
    if(player === computer){
        const result1 = "I'ts a tie, try again";
        return result1;
    } else if(player === rock && computer === paper){
        const result2 = "computer gets a point";
        return result2;
    } else if(player === paper && computer === scissors){
        const result3 = "computer gets a point";
        return result3;
    }else if(player === scissors && computer === rock){
        const result4 = "computer gets a point";
        return result4;
    }else if(player === rock && computer === scissors){
        const result5 = "player gets a point";
        return result5;
    } else if(player === paper && computer === rock){
        const result6 = "player gets a point";
        return result6;
    } else if(player === scissors && computer === paper){
        const result7 = "player gets a point";
        return result7;
    }
}


export function generateRandomNumber(){
    //generate random number as computers choice 
    const computersChoice = Math.ceil(Math.random()*3);
    return computersChoice;
}
