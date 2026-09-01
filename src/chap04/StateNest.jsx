import { useState } from 'react';

export default function StateNest() {
    const [form, setForm] = useState({
        name: 'Smith',
        address: {
            province: 'Quebec',
            city: 'Montreal'
        }
    });

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleFormNest = e => {
        setForm({
            ...form,
            address: {
                ...form.address,
                [e.target.name]: e.target.value,
            }
        });
    };

    const show = () => {
        console.log(`${form.name} (${form.address.province}, ${form.address.city}) `);
    };

    return (
        <form>
            <div>
                <label htmlFor="name">Name: </label>
                <input id="name" name="name" type="text"
                onChange={handleForm} value={form.name} />
            </div>
            <div>
                <label htmlFor="province">Province: </label>
                <input id="province" name="province" type="text"
                onChange={handleFormNest} value={form.address.province} />
            </div>
            <div>
                <label htmlFor="city">City: </label>
                <input id="city" name="city" type="text"
                onChange={handleFormNest} value={form.address.city} />
            </div>
            <div>
                <button type="button" onClick={show}>Submit</button>
            </div>
        </form>
    )

}