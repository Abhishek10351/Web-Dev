import { useState } from "react";
import "./Toggler.css";
export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const [count, setCount] = useState(0);
    const update = () => {
        setIsHappy(!isHappy);
        setCount(count+1);
    };
    //- the hook function update results in re render of whole component
    return (
        <div>
            <p className="toggler" onClick={update}>
                {isHappy ? "😄" : "😭"}
            </p>
            <p>{count}</p>
        </div>
    );
}
