import { useState } from "react";

export default function ScoreKeeper() {
    const [scores, setScores] = useState({ p1: 0, p2: 0 });
    // -we have to use return a new object with the updated value, because React will not re-render if we just update the value of the object, we have to update the object reference
    const setP1Score = () => {
        const newScores = { ...scores, p1: scores.p1 + 1 };
        setScores(newScores);
    };
    const setP2Score = () => {
        setScores((oldScores) => {
            return { ...oldScores, p2: oldScores.p2 + 1 };
        });
    };

    return (
        <>
            <p>Player 1: {scores.p1}</p>
            <p>Player 2: {scores.p2}</p>
            <button onClick={setP1Score}>+1 Player</button>
            <button onClick={setP2Score}>+2 Player 2</button>
        </>
    );
}
