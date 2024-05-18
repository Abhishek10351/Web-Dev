import "./Box.css";
import { useState } from "react";
function getRandomColor(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
export default function Box({ colors }) {
    const colorValue = getRandomColor(colors);
    const [color, setColor] = useState(colorValue);
    let style = { backgroundColor: color };
    const changeColor = () => {
        setColor(getRandomColor(colors));
    };

    return <div className="box" style={style} onClick={changeColor}></div>;
}
