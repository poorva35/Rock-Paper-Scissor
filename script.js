let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const comscorepara = document.querySelector("#com-score");


const gencompChoice = ()=>{
    let options = ["rock","paper","sessors"];
   const randIdx =  Math.floor(Math.random()*3);
   return options[randIdx];
}

const drawGame = ()=>{
    msg.innerText = "Draw, Play Again!";
    msg.style.backgroundColor = "#081b31;";
}
const showWinner = (userWin,userChoice,comChoice)=>{
    if(userWin){
    userscore++;
        userscorepara.innerText = userscore;
    msg.innerText = 'You win!'
    msg.style.backgroundColor = "green";
} else{
    compscore++;
    comscorepara.innerText = compscore;
    msg.innerText = 'You lose.'
    msg.style.backgroundColor = "red";
    //showWinner(userWin, userChoice,comChoice);
}
}


const playGame = (userChoice)=>{
    console.log("user=",userChoice);
    // computer choice
    const comChoice = gencompChoice();
    console.log("computer=",comChoice);

if(userChoice===comChoice){
// draw game
drawGame();
}else{
    let userWin = true;
    if (userChoice==="rock"){
        // scissors , paper
        userWin= comChoice === "paper" ? false: true;
    } else if(userChoice==="paper"){
        //rock , scessior
        userWin = comChoice === "scissors"? false : true;

    }else {
        // rosk , paper
        userWin = comChoice ==="rock"? false:true;
    }
    showWinner(userWin);
}


};


choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice)
    });
});