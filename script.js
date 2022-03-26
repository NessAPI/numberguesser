let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, computerGuess, target) => {
    const userDifference = Math.abs(userGuess - target)
    const computerDifference = Math.abs(computerGuess - target)

    if (userDifference > computerDifference) {
        return false // Computer wins
    }
    
    if (userDifference < computerDifference) {
        return true // Human wins
    }
}

const updateScore = winner => {
    if (winner === 'computer') {
        computerScore = computerScore + 1
    } else if (winner === 'human') {
        humanScore = humanScore + 1
    }
}

const advanceRound = () => {
    currentRoundNumber + 1
}