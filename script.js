var buttons = document.querySelectorAll(".btn");
var options = ["paper", "rock", "scissor"];
var result = document.getElementById("result");
var result1 = document.getElementById("result1");
var playerCount = 0;
var computerCount = 0;


buttons.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    var playerChoice = options[index];
    var computerChoice = ComputerGameplay(); 
    result.innerHTML = `Player: ${playerChoice} , Computer: ${computerChoice}`;
    compareChoices(playerChoice, computerChoice);
  });
});

function ComputerGameplay() {
  var randomindex = Math.floor(Math.random() * 3);
  return options[randomindex];
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    result1.innerHTML="It's a draw!";
    result1.style.backgroundColor = "black"

  } else if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissor" && computerChoice === "paper")
  ) {
    playerCount++;
    var playerh3 = document.getElementById("playerh3");
    result1.innerHTML="Player wins"
    result1.style.backgroundColor = "green"

    playerh3.textContent = playerCount;
  } else {
    computerCount++;
    var comph3 = document.getElementById("comph3");
    result1.innerHTML="Computer wins"
    comph3.textContent = computerCount;
    result1.style.backgroundColor = "Red"
  }
}
