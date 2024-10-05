let randomNumber = parseInt( Math.random()*100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numguess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess)
        validGuess(guess);
    } )
}

function validGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    }
    else if(guess<1){
        alert('please enter a number more than one');
    }
    else if(guess > 100){
        alert('please enter a number more than 100');
    }
    else{
        prevGuess.push(guess)
        if(numguess === 11){
            displayGuess(guess);
            displayMessage(`GameOver. Random number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('you guess a right number')
        endGame()
    }else if(guess<randomNumber){
        displayMessage('Number is too low')
    }else if(guess>randomNumber){
        displayMessage('number it too high')
    }

}
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess},`;
    numguess ++;
    remaining.innerHTML = `${11-numguess}`
}
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<h2 id = "newGame">Start New Game</h2>';
    startOver.appendChild(p)
    playGame = false;
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100 + 1);
        prevGuess = [];
        numguess = 1;
        guessSlot.innerHTML= ''
        remaining.innerHTML = `${11 - numguess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    
    })
}







