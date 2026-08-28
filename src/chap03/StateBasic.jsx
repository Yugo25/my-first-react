import { useState } from 'react';

export default function StateBasic ({ init }) {
    // Initiate state with prop init
    const [count, setCount] = useState(init);
    console.log(`count is ${count}.`);

    // Increment the counnter by clicking
    const handleClick = () => setCount(count + 1);
    return (
        <div>
            <button onClick={handleClick}>Count</button>
            <p>{count}, Clicked</p>
        </div>
    );
}