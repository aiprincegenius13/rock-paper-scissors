const choices = ["rock", "paper", "scissors"];
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const resultMessageElement = document.getElementById("result-message");

let playerScore = 0;
let computerScore = 0;

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);

        updateScores(result);
        displayResult(playerChoice, computerChoice, result);
    });
});

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) return "tie";
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "win";
    }
    return "lose";
}

function updateScores(result) {
    if (result === "win") {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (result === "lose") {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

function displayResult(player, computer, result) {
    if (result === "tie") {
        resultMessageElement.textContent = `It's a tie! You both chose ${player}.`;
    } else if (result === "win") {
        resultMessageElement.textContent = `You win! ${player} beats ${computer}.`;
    } else {
        resultMessageElement.textContent = `You lose! ${computer} beats ${player}.`;
    }
}
