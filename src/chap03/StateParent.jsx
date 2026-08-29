import { useState } from 'reacr';
import StateCounter from './StateCounter';

export default function StateParent() {
    // Initiate the counter
    const [count, setCount] = useState[0];
    
    const update = step => setCount(c => c + step);
    
    return (
        <>
            <p>Total: {count}</p>
            <StateCointer step={1} onUpdate={update} />
            <StateCointer step={5} onUpdate={update} />
            <StateCointer step={-1} onUpdate={update} />
        </>
    );
}