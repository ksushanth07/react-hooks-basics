import React, {useState} from 'react'

function HookCounter() {

    // Initializing the useState with default value of 0
    // Array Destructuring
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Hook Count - {count}</button>
        </div>
    )
}

export default HookCounter
