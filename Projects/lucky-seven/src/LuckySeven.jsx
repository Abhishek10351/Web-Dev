import { useState } from "react";
import "./LuckySeven.css";

const rollDice = (sides = 6) => {
    return Math.floor(Math.random() * sides) + 1;
};
const sum = (arr) => {
    return arr.reduce((old, newVal) => {
        return old + newVal;
    });
};

const rollDices = (arr_size = 2) => {
    return Array(arr_size)
        .fill(0)
        .map((i) => {
            return rollDice();
        });
};
export function Dice({ value }) {
    return <span className="dice">{value}</span>;
}

export function LuckySeven() {
    const [diceValues, setDices] = useState(rollDices);
    const dice = diceValues.map((dice, index) => {
        return <Dice key={index} value={dice} />;
    });
    const reroll = () => {
        setDices(
            diceValues.map((i) => {
                return rollDice();
            })
        );
    };
    return (
        <section className="lucky-seven">
            <h1 className="heading">Lucky7</h1>
            <div className="">
                {dice}{" "}
                {sum(diceValues) == 7 ? "You won!!" : "You lost. Try again"}
            </div>
            <button onClick={reroll}>Roll Again!</button>
        </section>
    );
}
