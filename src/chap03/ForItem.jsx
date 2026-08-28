export default function ForItem({ book }) {
    let dd;
    if (book.download) {
        dd = <dd>{book.summary}<Download isbn={book.isbn} /></dd>;
    } else {
        dd = <dd>{book.summary}</dd>;
    }
    return (
        <>
            <dt>
                <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                    {elem.title} ({elem.price} dollars)
                </a>
            </dt>
            {dd}
        </>
    );
}