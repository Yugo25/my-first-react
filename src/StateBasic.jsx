import { useState } from 'react';

export default function StateBasic ({ init }) {
    // Initiate state with prop init
    const [count, setCount] = useState(init);
    
}