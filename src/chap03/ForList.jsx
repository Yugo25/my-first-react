import { Fragment } from 'react';

// Get the material info by prop
export default function ForList({ src }) {
    return (
    // Transfer the material info into dt/dd list
    <dl>
        {
        src.map(elem => (
            <Fragment key={elem.isbn}>
                <dt>
                    <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                        {elem.title} ({elem.price} dollars)
                    </a>
                </dt>
                <dd>{elem.summary}</dd>
            </Fragment>
        ))}
    </dl>
    );
}