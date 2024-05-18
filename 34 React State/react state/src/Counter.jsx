
import React, { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const addTwo = () => {
        setCount(count + 1);
        setCount(count + 1);
        // -this will not work as expected, because setCount gets the current value of count
        // -rather we can use the function form of setCount
        // setCount(prevCount => prevCount + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={addTwo}>Add Two</button>

        </div>
    );
}