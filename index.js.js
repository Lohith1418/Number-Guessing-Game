
const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const GuessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (prevGuess.length === 100) {
      displayMessage(`Game Over.`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it correct! number of guesses taken ${prevGuess.length}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Guess is too low');
  } else if (guess > randomNumber) {
    displayMessage('Guess is too high');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  GuessSlot.innerHTML += `${guess} `;
  remaining.innerHTML = `${ prevGuess.length}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  startOver.innerHTML += `<button id="newGame" class="button">Start New Game</button>`;
  newGame();
}

function newGame() {
  const newButton = document.querySelector('#newGame');
  newButton.addEventListener('click', function () {
    location.reload();
  });
}
