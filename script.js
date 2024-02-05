console.log("hello");

let userScore=0;
let compScore=0;

let msgBox=document.querySelector('#msg');
let userScorePara=document.querySelector('#user-score');
let compScorePara=document.querySelector('#comp-score');

const choices=document.querySelectorAll('.choice');

const genCompChoice = () =>{
    const options=['rock', 'paper', 'scissors'];
    let randIdx=Math.floor(Math.random()*3);

    return options[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin) {
        userScore++;
        msgBox.innerText=`You Won. Yours ${userChoice} beats ${compChoice}`;
        userScorePara.innerText=userScore;
        console.log('user win');
    } else {
        msgBox.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
        compScore++;
        compScorePara.innerText=compScore;
        console.log('comp win');      
    }
}

const drawGame=()=>{
    console.log("game drawn");
    msgBox.innerText="Game Draw. Play again"
}

const playGame = (userChoice) =>{
    console.log("user choice is", userChoice);
    let compChoice=genCompChoice();
    console.log("comp choice is", compChoice);

    
    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin=true;

        if (userChoice==="rock") {
            userWin = compChoice === "paper" ? false:true;
        } 
        else if(userChoice=== "paper"){
            userWin = compChoice === "scissors" ? false:true;
        } 
        else {
            compChoice === "paper" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute('id');
        playGame(userChoice);
    })
});