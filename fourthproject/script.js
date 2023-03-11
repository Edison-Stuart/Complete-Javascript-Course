'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // When there is no guess

    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNum) {
    // When player wins
    if (!highScore) {
      // if there is no highscore
      highScore = score;
    } else if (highScore < score) {
      // if score is greater than highscore
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;

    document.querySelector('.message').textContent = 'Correct Number!';

    document.querySelector('.number').textContent = secretNum;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  } else if (guess != secretNum) {
    // When guess is wrong
    if (score > 1) {
      document.querySelector('.message').textContent = `Too ${
        guess > secretNum ? 'High!' : 'Low!'
      }`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // When no more guesses left

      document.querySelector('.message').textContent = 'You Lost :(';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

// old STINKY code
/*
  else if (guess > secretNum) {
    // When player guesses too high

    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // When no more guesses left

      document.querySelector('.message').textContent = 'You Lost :(';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNum) {
    // When player guesses too low

    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // When no more guesses left

      document.querySelector('.message').textContent = 'You Lost :(';
      document.querySelector('.score').textContent = 0;
    }
  }
*/
