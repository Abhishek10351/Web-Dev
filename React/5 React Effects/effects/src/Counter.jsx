import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const updateCount = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log("useEffect called");
        // document.title = `Count: ${count}`;
    }, [count, name]);
    // if you want to run the effect only once, pass an empty array as the second argument

    return (
        <>
            <h1>{count}</h1>
            <button onClick={updateCount}>Increment</button>
            <p>{name}</p>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </>
    );
}
