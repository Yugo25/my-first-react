export default function eventBasic ({type}) {
    // Click event handler
    const current = () => {
        const d = new Date();
        
    // Print the date depending in the type
    switch(type) {
        case 'date':
            console.log(d.toLocalDateString());
            return (
                <p>d.toLocalDateString()</p>
            );
            break;
        case 'time':
            console.log(d.toLocalTimeString());
            return (
                <p>d.toLocalTimeString()</p>
            );
            break;
        default:
            console.log(d.toLocalString());
            return (
                <p>d.toLocalString()</p>
            );
            break;
    };
    
    return (
        <div>
            {/* when the button is clicked, call current */}
            <button onClick={current}>Get time</button>
        </div>
    );
}