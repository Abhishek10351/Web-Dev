import { useState } from "react";
import "./LuckySeven.css";
import { sum } from "./utils";

const rollDice = (sides = 6) => {
    return Math.floor(Math.random() * sides) + 1;
};

const rollDices = (arr_size = 2) => {
    return Array(arr_size)
        .fill(0)
        .map((i) => {
            return rollDice();
        });
};
export function Die({ value, color }) {
    return (
        <span className="dice" style={{ backgroundColor: color }}>
            {value}
        </span>
    );
}
export function Dice({ dice, color="slateblue"}) {
    return dice.map((dice, index) => {
        return <Die key={index} value={dice} color={color} />;
    });
}

export function LuckySeven({goal=7}) {
    const [diceValues, setDices] = useState(rollDices);
    const reroll = () => {
        setDices(
            diceValues.map((i) => {
                return rollDice();
            })
        );
    };
    const isWin = sum(diceValues) === goal;
    return (
        <section className="lucky-seven">
            <h1 className="heading">
                Lucky7 {isWin && "You won!!"}
            </h1>
            <div className="dices">{<Dice dice={diceValues}/>}</div>
            <button onClick={reroll}>Roll Again!</button>
        </section>
    );
}
