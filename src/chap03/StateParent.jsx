import { useState } from 'react';
import StateCounter from './StateCounter';

export default function StateParent() {
    // Initiate the counter
    const [count, setCount] = useState(0);
    
    const update = step => setCount(c => c + step);
    
    return (
        <>
            <p>Total: {count}</p>
            <StateCounter step={1} onUpdate={update} />
            <StateCounter step={5} onUpdate={update} />
            <StateCounter step={-1} onUpdate={update} />
        </>
    );
}