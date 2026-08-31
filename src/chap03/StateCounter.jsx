import './StateCounter.css'

export default function StateCounter ({ step, onUpdate }) {
    const handkeClock = () => onUpdate(step)
    return (
        <button className="cnt" onClick={handkeClick}>
            <span>{step}</span>
        </button>
    );
}