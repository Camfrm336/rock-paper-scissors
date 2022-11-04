const userChoiceDisplay = document.getElementById("user-choice")
const computerChoiceDisplay = document.getElementById("computer-choice")
const winsDisplay = document.getElementById("wins")
const tiesDisplay = document.getElementById("ties")
const lossesDisplay = document.getElementById("losses")
const resultDisplay = document.getElementById("result")



const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result
let winCount = 0
let tieCount = 0
let lossCount = 0




possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
   userChoice = e.target.id
   resultDisplay.innerHTML = ""
   userChoiceDisplay.innerHTML = userChoice.toUpperCase();
   generateComputerChoice()
   getResult()
   if (getResult() === "win") {
    winCount++
    winsDisplay.innerHTML = winCount
   }
   else if (getResult() === "loss") {
    lossCount++
    lossesDisplay.innerHTML = lossCount
   }
   else {
    tieCount++
    tiesDisplay.innerHTML = tieCount
   }
   if (winCount === 5) {
    resultDisplay.innerHTML = "You beat the computer " + winCount + "-" + lossCount + " congratulations!" 
    resetGame()
   }
   else if (lossCount === 5) {
    resultDisplay.innerHTML = "You loss to the computer "  + winCount + "-" + lossCount +  " try again"
    resetGame()
   }
   
}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)

    if (randomNumber === 0) {
        computerChoice = "rock"
    }
    else if (randomNumber === 1) {
        computerChoice = "paper"
    }
    else if (randomNumber === 2) {
        computerChoice = "scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice.toUpperCase()
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "draw"
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result = "win"
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "loss"
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "loss"
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "win"
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "loss"
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        result = "win"
    }
    return result

}
function resetGame() {
    winCount = 0;
    lossCount = 0;
    tieCount = 0;
    winsDisplay.innerHTML = winCount
    lossesDisplay.innerHTML = lossCount
    tiesDisplay.innerHTML = tieCount
}

