let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.options button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer-show i');
const randomClasses = ["fa-solid fa-hand-back-fist", "fa-solid fa-hand", "fa-solid fa-hand-scissors"];
const text = document.getElementById('anouncement-text');

const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click', (e)=>{
            let clickedBtn = e.target.className;
            showIcon.className = clickedBtn;
            let randomNum = Math.floor(Math.random()*randomClasses.length);
            computerShowIcon.className = randomClasses[randomNum];

            //Tie
            if(showIcon.className === computerShowIcon.className){
                pScore.innerHTML = pScore.innerHTML;
                cScore.innerHTML = cScore.innerHTML;
                text.innerHTML = "It's a Tie!";
                text.style.color = "Orange";
            }

            // Player Win
            else if(showIcon.className === randomClasses[0]&& computerShowIcon.className === randomClasses[2]){
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "You Win!";
                text.style.color="Green";
            }
            else if(showIcon.className === randomClasses[1]&& computerShowIcon.className === randomClasses[0]){
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "You Win!";
                text.style.color="Green";
            }
            else if(showIcon.className === randomClasses[2]&& computerShowIcon.className === randomClasses[1]){
                pScore.innerHTML = playerScore;
                playerScore++;
                text.innerHTML = "You Win!";
                text.style.color="Green";
            }

            //Computer Win

            else if(showIcon.className === randomClasses[0]&& computerShowIcon.className === randomClasses[1]){
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You Loose!";
                text.style.color="Red";
            }
            else if(showIcon.className === randomClasses[1]&& computerShowIcon.className === randomClasses[2]){
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You Loose!";
                text.style.color="Red";
            }
            else if(showIcon.className === randomClasses[2]&& computerShowIcon.className === randomClasses[0]){
                cScore.innerHTML = computerScore;
                computerScore++;
                text.innerHTML = "You Loose!";
                text.style.color="Red";
            }

        });
    });
}

game();
