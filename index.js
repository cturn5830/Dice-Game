//score & Values
let player1score = 0;
let player2score = 0;
let player1Turn = true;
let randomNumber = 0;
let winner = false;
let p1totalwins = 0;
let p2totalwins = 0;
//Get total wins
const p1wins = document.getElementById("p1wins");
const p2wins = document.getElementById("p2wins");

const player1S = document.getElementById("player1S");
const player2S = document.getElementById("player2S");
//display whos turn
const turntitle = document.getElementById("message");
//each player scores
const player1SB = document.getElementById("player1Scoreboard");
const player2SB = document.getElementById("player2Scoreboard");
//value rolled by player
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
//buttons
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

rollBtn.addEventListener("click", function () {
  randomizer();
});
resetBtn.addEventListener("click", function () {
  player1score = 0;
  player2score = 0;
  player1Turn = true;
  winner = false;
  rollBtn.style.display = "block";
  resetBtn.style.display = "none";
  player1Dice.innerText = "-";
  player2Dice.innerText = "-";
  turntitle.innerText = "Player 1 Turn";
  updateInfo();
});

function turncheck() {
  if (player1Turn === true) {
    p1Turn();
  } else {
    p2Turn();
  }
}
function winCheck() {
  if (player1score >= 20) {
    turntitle.innerText = "Player 1 has won!";
    winner = true;
    p1totalwins += 1;
  } else if (player2score >= 20) {
    turntitle.innerText = "Player 2 has won!";
    winner = true;
    p2totalwins += 1;
  } else {
    null;

    p1wins.innerText = p1totalwins;
    p2wins.innerText = p2totalwins;
  }

  if (winner === true) {
    rollBtn.style.display = "none";
    resetBtn.style.display = "block";
  } else {
    null;
  }
}

function updateInfo() {
  player1SB.innerText = player1score;
  player2SB.innerText = player2score;

  winCheck();
}
function p1Turn() {
  player1score += randomNumber;
  turntitle.innerText = "Player 2 Turn";
  player1Turn = false;
  player1Dice.innerHTML = randomNumber;
  player1Dice.classList.remove("active");
  player2Dice.classList.add("active");
  updateInfo();
}
function p2Turn() {
  player2score += randomNumber;
  turntitle.innerText = "Player 1 Turn";
  player1Turn = true;
  player2Dice.innerHTML = randomNumber;
  player2Dice.classList.remove("active");
  player1Dice.classList.add("active");
  updateInfo();
}
function randomizer() {
  randomNumber = Math.floor(Math.random() * 7);
  if (randomNumber === 0) {
    randomNumber += 1;
    console.log(randomNumber);
  } else {
    console.log(randomNumber);
  }
  turncheck();
}
