import { useState } from 'react'

export default function EventOnce () {
    const [clicked, setClicked] = useState(false);
    const [result, setResult] = useState('-')
    
    const handleClick = () => {
        if (!clicked) {
            setResult(Math.floor(Math.random() * 100 + 1));
            setClicked(true);
        }
    };
    
    return (
        <>
            <button onClick={handleClick}>Show the result</button>
            <p>Today's luck is {result}pts.</p>
        </>
    );
}