let guess = 0;
let toGuess = 0;
let gameOn = false; //to track if game start or not

let score = 20;
let highScore = 0;

//to gernerate random number between 0-20
function randomNum() {
  return Math.floor(Math.random() * 20 + 1);
}

toGuess = randomNum();
console.log(toGuess);

//to check the gussed answer to real answer
function checkAnswer(num) {
  if (num > toGuess) {
    document.getElementById("heading").innerHTML = "Too High";
    score--;
  } else if (num < toGuess) {
    document.getElementById("heading").innerHTML = "Too Low";
    score--;
  } else {
    document.getElementById("heading").innerHTML = "Correct Guess";
    if (score > highScore) {
      highScore = score;
    }
    gameOn = false;
    document.getElementById("highScore").innerHTML = "HighScore = " + highScore;
    document.body.classList.add("winning");
  }
}

//take input and do checking
document.getElementById("submit").addEventListener("click", () => {
  if (score > 0) {
    gameOn = true;
    guess = document.getElementById("guess").value;
    document.getElementById("inputGuess").innerHTML = guess;
    checkAnswer(guess);
    document.getElementById("score").innerHTML = "Score = " + score;
  } else {
    document.getElementById("heading").innerHTML = "Failed";
    document.body.classList.add("failed");
    gameOn = false;
  }
});

//to restart the game
document.getElementById("again").addEventListener("click", () => {
  if (!gameOn) {
    toGuess = randomNum();
    console.log(toGuess);
    score = 20;
    document.getElementById("heading").innerHTML = "Guess the number";
    document.getElementById("score").innerHTML = "Score = " + score;
    document.body.classList.remove("winning");
    document.body.classList.remove("failed");
    document.getElementById("inputGuess").innerHTML = "?";
    document.getElementById("guess").value = 0;
  }
});
