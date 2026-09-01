import { useState } from 'react';

export default function FormList() {
    const [form, setForm] = useState({
        animal: ['dog', 'hamster']
    });
    
    const handleFormList = e => {
        const data = [];
        
        const ops = e.target.options;
        for (const opt of ops) {
                if (opt.selected) {
                    data.push(opt.value);
            }
        }
        
        setForm({
            ...form,
            [e.target.name]: data
        });
    };
    
    const show = () => {
        console.log(`Favorite animal: ${form.animal}`);
    };
    
    return ( 
        <form>
            <label htmlFor="animal">Favorite animal：</label><br/>
            <select id="animal" name="animal"
                value={form.animal} size="4" multiple={true} onChange={handleFormList}>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster ">Hamster</option>
                <option value="rabbit">Rabbit</option>
            </select>
            <button type="button" onClick={show}>Submit</button>
        </form>
    );
}