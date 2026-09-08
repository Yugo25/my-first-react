import { useForm } from 'react-hook-form';
import './FormBasic.css';

export default function FormBasic() {
    const defaultValues = {
        name: 'Smith',
        email: 'admin@example.com',
        gender: 'male',
        memo: '',
    };

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues,
    });

    const onsubmit = data => console.log(data);
    const onerror = err => console.log(err);

    return (
        <form onSubmit={handleSubmit(onsubmit, onerror)} noValidate>
            <div>
                <label htmlFor="name">Name: </label><br />
                <input type="text" id="name"
                {...register('name', {
                    required: 'Name is required',
                    maxLength: {
                        value: 20,
                        message: 'Name must be less than 20 characters'
                    }
                })} />
                <div className="error">{errors.name?.message}</div>
            </div>
            <div>
                <label>Gender: </label><br />
                <label>
                    <input type="radio" id="male" value="male"
                    {...register('gender', {
                        required: 'Gender is required',
                    })} />
                    Male
                </label>
                <label>
                    <input type="radio" id="female" value="female"
                    {...register('gender', {
                        required: 'Gender is required',
                    })} />
                    Female
                </label>
                <div className="error">{errors.gender?.message}</div>
            </div>
            <div>
                <label htmlFor="email">Email: </label><br />
                <input type="email" id="email"
                {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                    }
                })} />
                <div className="error">{errors.email?.message}</div>
            </div>
            <div>
                <label htmlFor="memo">Memo: </label><br />
                <textarea id="memo"
                {...register('memo', {
                    required: 'Memo is required',
                    minLength: {
                        value: 10,
                        message: 'Memo must be at least 10 characters',
                    }
                })} />
                <div className="error">{errors.memo?.message}</div>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
);
}