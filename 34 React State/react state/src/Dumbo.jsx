import { useState } from "react";

function generateGameBoard() {
    console.log("Generating game board");
    return "something";
}
export default function Dumbo() {
    const [board, setBoard] = useState(generateGameBoard);
    // - we can pass a function to useState to generate the initial state, it will only be called once

    return (
        <>
            <p>{board}</p>
            <button onClick={() => setBoard("hello")}>
                Click me to change the board
            </button>
        </>
    );
}
