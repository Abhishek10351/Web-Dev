
const player1Score = document.getElementById("player1-score");
const player2Score = document.getElementById("player2-score");
const resetButton = document.getElementById("reset-button");
const player1Button = document.getElementById("player1-button");
const player2Button = document.getElementById("player2-button");
const scoreSelector = document.getElementById("score-selector");

let gameOver = false;
let maxScore = 3;

const player1 = {
    score: 0, scoreObject: player1Score, button: player1Button
};
const player2 = {
    score: 0, scoreObject: player2Score, button: player2Button
};
// -reset the score
const reset = () => {
    for (let p of [player1, player2]) {
        p.score = 0;
        p.scoreObject.innerText = p.score;
        p.scoreObject.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
    }
    gameOver = false;
}

const updateScore = (player, opponent) => {
    if (!gameOver) {
        ++player.score;
        player.scoreObject.innerText = player.score;
        if (player.score == maxScore) {
            gameOver = true;
            player.scoreObject.classList.add("has-text-success");
            opponent.scoreObject.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}
// - change the max score
scoreSelector.addEventListener("change", () => {
    maxScore = parseInt(scoreSelector.value);
    reset();
});
// -update the score

player1Button.addEventListener("click", () => {
    updateScore(player1, player2)
});

player2Button.addEventListener("click", () => {
    updateScore(player2, player1)
});

// -reset the score
resetButton.addEventListener("click", reset);