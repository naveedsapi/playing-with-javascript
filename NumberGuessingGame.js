
// Number Guessing Game in Jave Script

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random()*(maxNum-minNum + 1 )) + minNum;

console.log(answer);

let attempts = 0;
let guess;
let runnig = true;
while(runnig){
    guess = window.prompt("Guess a number between "+minNum +"-"+maxNum );
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter a Valid number");
    } else if(guess < minNum || guess > maxNum){
        window.alert("Please Enter a  Valid Number");
    }else{
        attempts++;
        if(guess < answer){
            window.alert("Too Low! TRY Again!");
        }else if(guess > answer){
            window.alert("Too High TRY Agian!");
        }else {
            window.alert("Correct! Ths Answer was "+answer+" It took you "+attempts+" Attempts");
             runnig = false;
        }
    }
   
}