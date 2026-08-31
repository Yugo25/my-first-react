import { useRef } from 'react';

export default function StateFormUC() {
    const name = useRef(null);
    const age = useRef(null);
    
    const show = () => {
        console.log(`Hello, ${name.current.value} (${age.current.value} years old)!`);
    };
     return (
        <form>
            <div>
                <label htmlFor="name">Name: </label>
                <input id="name" name="name" type="text"
                ref={name} />
            </div>
            <div>
                <label htmlFor="age">Age: </label>
                <input id="age" name="age" type="number"
                onChange={handleForm} value={form.age} />
            </div>
            <div>
                <button type="button" onClick={show}>
                    Submit
                </button>
            </div>
            <p>Hello, {form.name} ({form.age} years old)!</p>
        </form>
    );
}