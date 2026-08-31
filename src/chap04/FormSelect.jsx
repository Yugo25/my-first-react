import { useState } from 'react';

export default function FormSelect() {
    const [form, setForm] = useState({
        animal: 'dog'
    });

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const show = () => {
        console.log(`Favorite animal: ${form.animal}`);
    };

    return (
        <form>
            <label htmlFor="animal">Favorite animal: </label>
            <select id="animal" name="animal"
            value={form.animal}
            onChange={handleForm}>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="rabbit">Rabbit</option>            
            </select>
            <button type="button" onClick={show}>
                Submit
            </button>
        </form>
    )
}