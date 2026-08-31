export default function EventArgs2() {
    const current = e => (
        const type = e.target.dataset.type;
        const d = new Date();
        switch(type) {
            case 'date':
                console.log(`${e.target.id}: ${d.toLocaleDateString()}`);
                break;
            case 'time':
                console.log(`${e.target.id}: ${d.toLocaleTumeString()}`);
                break;
            default:
                console.log(`${e.target.id}: ${d.toLocaleString()}');
                break;
        }
    );
    return (
        <div>
            <button id="dt" data-type="datetime" onClick={current}></button>
            <button id="date" data-type="date" onClick={current}></button>
            <button id="time" data-type="time" onClick={current}></button>
        </div>
    );
}