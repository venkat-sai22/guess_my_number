'use scrict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
//here trunc is used to round off the number and random chooses the value between (0 and 1) any decimal value to around that we use trunc.
let highscore = 0;
//document.querySelector('.number').textContent = number;
console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
//on click CHECK
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  }
  // when player wins the game
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🥳🥳 Correct Number !';
    displayMessage('🥳🥳 Correct Number !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '50rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when the guessed number is higher
  else if (guess > secretNumber) {
    if (score > 0) {
      //document.querySelector('.message').textContent = 'Guess is too high ☝️';
      displayMessage('Guess is too high ☝️');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '💥 You lost the game';
      displayMessage('💥 You lost the game');
    }
  }

  //when the guessed number is Lower
  else if (guess < secretNumber) {
    if (score > 0) {
      //document.querySelector('.message').textContent = 'Guess is too low 👇';
      displayMessage('Guess is too low 👇');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '25rem';
  console.log(secretNumber);
});

/*
document.querySelector('.message').textContent = '🤩🤩Correct Number!';
document.querySelector('.score').textContent = 15;
document.querySelector('.number').textContent = 20;
document.querySelector('.guess').value = 20;

console.log(document.querySelector('.guess').value);
*/
