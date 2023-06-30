'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Functions

const switchPlayer = function () {
  document.getElementById(`current--${activePlaer}`).textContent = 0;
  activePlaer = activePlaer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Starting conditions
score0El.textContent = 0;

score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores, currentScore, activePlaer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlaer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player-winner');
  player1El.classList.remove('player-winner');
  player0El.classList.add('player-active');
  player1El.classList.remove('player-active');
};

init();
// Rolling the dice

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1 Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2 Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3 if Dice is not 1
    if (dice !== 1) {
      // Add score to current Score
      currentScore += dice;
      document.getElementById(`current--${activePlaer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to active players core

    scores[activePlaer] += currentScore;

    document.getElementById(`score--${activePlaer}`).textContent =
      scores[activePlaer];

    // check if plyer score is less than 100
    if (scores[activePlaer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlaer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlaer}`)
        .classList.remove('player--active');
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
