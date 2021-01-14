# EDIT-THIS-README


#html set up 
- create two radio buttons, one for heads and one for tails 
    - images for rock paper scissors
    - the radio buttons need different values 
- Button to submit your choice
- EMPTY DIVS FOR WIN, LOSS, TOTAL, CURRENT Results of the comparisons

 #javascript
 - grab dom elements by ID
 - initialize a state 
    - wins: 0
    - total: 0

- add event listeners to the submit button 
    - on click
        - store the computers guess
            - function that chooses between rock paper scissors randomly
            - use math.random and assign 0,1,2 to each rock paper scissors
        - store the users choice 
            - grab the choise and get its value 
        - now we compare the users choice with the computers random choice
        - display result 


```
ARCHIVED 

export function didUserWin(player, computer){
    const rock = 1
    const paper = 2
    const scissors = 3

    let computerPoints = 0;
    let playerPoints = 0;

    //compare one answer vs the random answer
    if(player === computer){
        const result1 = "I'ts a tie, try again";
        return result1;
    } else if(player === rock && computer === paper){
        const resultText2 = "computer gets a point";
        const resultPoint2 = computerPoints++;
        return (resultPoint2, resultText2);
    } else if(player === paper && computer === scissors){
        const resultText3 = "computer gets a point";
        const resultPoint3 = computerPoints++;
        return (resultPoint3, resultText3);
    }else if(player === scissors && computer === rock){
        const resultText4 = "computer gets a point";
        const resultPoint4 = computerPoints++;
        return (resultPoint4, resultText4);
    }else if(player === rock && computer === scissors){
        const resultText5 = "player gets a point";
        const resultPoint5 = playerPoints++;
        return (resultText5, resultPoint5);
    } else if(player === paper && computer === rock){
        const resultText6 = "player gets a point";
        const resultPoint6 = playerPoints++;
        return (resultText6, resultPoint6);
    } else if(player === scissors && computer === paper){
        const resultText7 = "player gets a point";
        const resultPoint7 = playerPoints++;
        return (resultText7, resultPoint7);
    }

}
```