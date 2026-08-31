export default function EventArgs() {
    const current = (e, type) => (
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
            <button id="dt" onClick={e => current(e, 'datetime')}></button>
            <button id="date" onClock={e => current(e, 'date')}></button>
            <button id="time" onClick={e => current(e, 'time')}></button>
        </div>
    );
}