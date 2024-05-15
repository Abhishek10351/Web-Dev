import { useState } from "react";
import "./Toggler.css";
export default function Toggler(){
    const [isHappy, setIsHappy] = useState(true)
    const update =()=> setIsHappy(!isHappy);
    return (
        <div className="toggler">
            <p onClick={update}>{isHappy ? "😄" : "😭"}</p>
        </div>
    );
}