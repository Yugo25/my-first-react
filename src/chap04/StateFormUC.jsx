import { useRef } from 'react';

export default function StateFormUC() {
    const name = useRef(null);
    const age = useRef(null);
    
    const show = () => {
        console.log(`Hello, ${name.current.value} (${age.current.value} years old)!`);
    };
     return (
        <form>
            <div>
                
            </div>
        </form>
    );
}