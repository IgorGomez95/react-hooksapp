import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {
    // los hooks no se pueden utilizar de manera condicional
    // useEffect es un hook que permite ejecutar un efecto
    // secundario cuando sucede algo en el componente
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log('hey!');
    },[]);

    useEffect( () => {
        // console.log('formState cambió');
    },[formState]);

    useEffect( () => {
        // console.log('email cambió');
    },[email]);

    const handleInputChange = ( {target} ) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }
    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className='form-group'>
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

            <div className='form-group'>
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

            { (name === '123') && <Message /> }
        </>
    )
}
