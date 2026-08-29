import './SelectStyle.css';

export default function SelectStyle({ mode }) {
    return (
        // Change class depending on the mode
        <div className={`box ${mode === 'light' ? 'light' : 'dark'}`}>
            Hello world
        </div>
    );
}