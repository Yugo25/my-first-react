import { useState } from 'react';

export default function StateTodo() {

    const [title, setTitle] = useState('');

    const handleChangeTitle = e => {
        setTitle(e.target.value);
    };

    return (
        <div>
            <label>Todo: 
                <input type="text" name="title"
                value={title} onChange={handleChangeTitle} />
            </label>
        </div>
    );
}