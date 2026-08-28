export default function EventBasic ({type}) {
    // Click event handler
    const current = () => {
        const d = new Date();
        
        // Print the date depending in the type
        switch(type) {
            case 'date':
                console.log(d.toLocaleDateString());
                break;
            case 'time':
                console.log(d.toLocaleTimeString());
                break;
            default:
                console.log(d.toLocaleString());
                break;
        };
    };
    
    return (
        <div>
            {/* when the button is clicked, call current */}
            <button onClick={current}>Get time</button>
        </div>
    );
}