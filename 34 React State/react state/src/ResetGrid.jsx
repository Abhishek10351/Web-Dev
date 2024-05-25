import "./ResetGrid.css";
import Reset from "./Reset";
import { useState } from "react";
export default function ResetGrid({ n = 5 }) {
    const [boxes, setBoxes] = useState(Array(n).fill(true));
    const reset = () => {
        setBoxes(Array(n).fill(false));
    };
    const toggle = (i) => {
        setBoxes((oldBoxes) => {
            return oldBoxes.map((box, index) => {
                return index === i ? !box : box;
            });
        });
    };
    return (
        <>
            <div className="reset-grid">
                {boxes.map((b, i) => (
                    <Reset
                        isActive={b}
                        key={i}
                        toggle={() => {
                            toggle(i);
                        }}
                    />
                ))}
            </div>
            <button onClick={reset}>Reset</button>
        </>
    );
}
