import { useState } from 'react';

export default function FormTextarea() {
    const [form, setForm] = useState({
        comment: 'form elements'
    });

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const show = () => {
        console.log(`Comment: ${form.comment}`);
    };

    return (
        <form>
            <label htmlFor="comment">Comment: </label>
            <textarea id="comment" name="comment"
            cols="30" rows="7"
            value={form.comment}
            onChange={handleForm}></textarea><br />
            <button type="button" onClick={show}>Submit</button>
        </form>
    );
}