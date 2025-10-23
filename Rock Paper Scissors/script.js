let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice"); //all 3 choices for game will be selected (refer html)
const msg = document.querySelector("#msg");
const userscore2 = document.querySelector("#your-score");
const compscore2 = document.querySelector("#comp-score");

const generate_compchoice = () => {
    const options = ["rock","paper","scissors"];
    const randomindex = Math.floor(Math.random() * 3);
    return options[randomindex];
}

const drawgame = () => {
    msg.innerText = "game was draw!"
    msg.style.backgroundColor = "lavender";
}

const show_winner = (userwin, userchoice, compchoice) => {
    if(userwin) { 
        userscore++;
        userscore2.innerText=userscore;
        msg.innerText = `you win! ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor = "green";
    }
    else { 
        compscore++;
        compscore2.innerText=compscore;
        msg.innerText = `you lose! ${compchoice} beats ${userchoice}`
        msg.style.backgroundColor = "red";
    } 
}

const playgame = (userchoice) => {
    const compchoice = generate_compchoice();

    if (userchoice == compchoice){
        drawgame();
    } 
    else{
        let userwin=true;
        if(userchoice==="rock"){
            if(compchoice==="scissors"){
                userwin=true;
            }
            else { userwin=false; }
        }

        if(userchoice==="paper"){
            if(compchoice==="scissors"){
                userwin=false;
            }
            else { userwin=true; }
        }

        if(userchoice==="scissors"){
            if(compchoice==="paper"){
                userwin=true;
            }
            else { userwin=false; }
        }
        show_winner(userwin, userchoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice)
    })
})