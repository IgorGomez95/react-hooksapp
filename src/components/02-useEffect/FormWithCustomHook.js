import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {
    // los hooks no se pueden utilizar de manera condicional
    // useEffect es un hook que permite ejecutar un efecto
    // secundario cuando sucede algo en el componente
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={ handleSubmit } className='row g-3'>
            <h1>FormWithCustomHook</h1>
            <hr/>

            <div className='input-group'>
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre..."
                    autoComplete="off"
                    value={name}
                    onChange={ handleInputChange }
                >
                </input>
            </div>

            <div className='input-group'>
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={ handleInputChange }
                >
                </input>
            </div>

            <div className='input-group'>
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="******"
                    value={password}
                    onChange={ handleInputChange }
                >
                </input>
            </div>

            <button type='submit' className='btn btn-success'>
                Guardar
            </button>
        </form>
    );
}
