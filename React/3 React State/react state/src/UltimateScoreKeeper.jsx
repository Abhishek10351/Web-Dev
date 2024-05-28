import { useState } from "react";

export default function UltimateScoreKeeper({ numPlayers = 2, target = 5 }) {
    const [scores, setScores] = useState(new Array(numPlayers).fill(0));
    const [gameOver, setGameOver] = useState(false);
    const resetScores = () => {
        setScores(
            scores.map((oldScores) => {
                return 0;
            })
        );
        setGameOver(false);
    };
    const incrementScore = (index) => {
        setScores(
            scores.map((oldScores, idx) => {
                if (idx === index && oldScores + 1 == target) {
                    setGameOver(true);
                }
                return idx === index && !gameOver ? oldScores + 1 : oldScores;
            })
        );
    };
    const scoreComps = scores.map((score, index) => {
        return (
            <li key={index}>
                <span>
                    Player{index + 1} : {score}
                </span>
                <button
                    onClick={() => {
                        incrementScore(index);
                    }}
                >
                    +1
                </button>
                {score === target && "Winner"}
            </li>
        );
    });
    return (
        <>
            <h1>Ultimate Scorekeeper</h1>
            <ul>{scoreComps}</ul>
            <div>{gameOver && "gameOver"}</div>
            <button onClick={resetScores}>Reset Game</button>
        </>
    );
}
