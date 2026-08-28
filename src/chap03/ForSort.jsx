import { Fragment } from 'react'

export default function ForSort({ src }) {
    const sorted = [...src].sort((m, n) => m.price - n.price);
    return (
        <dl>
            {sorted.map(elem => (
            
            ))}
        </dl>
    );
}