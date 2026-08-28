import { Fragment } from 'react'

export default functiom ForFilter ({ src }) {
    const lowPrice = books.filter(book => book.price < 35.00);
    return (
        <dl>
            {lowPrice.map(elem => (
                <Fragment key={elem.isbn}>
                    <dt>
                </Fragment>
            ))}
        </div>
    )
}