import Proptypes from "prop-types";
export default function Slots({ val1, val2, val3 }) {
    const isWin = val1 === val2 && val2 === val3;

    return (
        <>
            <h1>
                {val1}
                {val2}
                {val3}
            </h1>
            <h2 style={{ color: isWin ? "green" : "red" }}>
                {isWin ? "You Win!" : "You Lose"}
            </h2>

            <h3>{isWin && "Congrats!!!"}</h3>
        </>
    );
}

Slots.Proptypes = {
    val1: Proptypes.string
}