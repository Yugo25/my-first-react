import ForItem from './ForItem.jsx';

export default function ForNest({ stc }) {
    return (
        <dl>
            {src.map(elem =>
                <ForItem book={elem} key={elem.isbn} />
            )}
        </dl>
    );
}