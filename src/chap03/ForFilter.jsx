import { Fragment } from 'react'

export default functiom ForFilter ({ src }) {
    const lowPrice = books.filter(book => book.price < 35.00);
    return (
        <dl>
            {lowPrice.map(elem => (
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