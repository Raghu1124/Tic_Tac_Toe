let userScore=0;
let compScore=0;

let userScorePara= document.querySelector("#user-score");
let compScorePara= document.querySelector("#computer-score");
const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const genCompChoice=() =>{
    const options= ["rock", "paper", "scissor"];
    const randomIdx= Math.floor(Math.random()*3);
    return options[randomIdx];
}

const draw=()=>{
    msg.innerText= "Game was draw ! Play again";
    msg.style.backgroundColor= "#081b31";
}

const showWinner= (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText= `You Win as your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText= `You Loose as ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
};

const playGame= (userChoice) =>{
    const compChoice= genCompChoice();

    if(userChoice===compChoice){
        draw();
    }
    else{
        let userWin= true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissor" ? false : true;
        }
        else{
            userWin= compChoice==="rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});