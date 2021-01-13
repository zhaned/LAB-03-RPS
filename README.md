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
