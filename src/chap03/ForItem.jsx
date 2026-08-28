export default function ForItem({ book }) {
    return (
        <>
            <dt>
                <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                    {elem.title} ({elem.price} dollars)
                </a>
            </dt>
            <dd>{elem.summary}</dd>
        </>
    );
}