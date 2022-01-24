import React, { useRef } from 'react';

import '../02-useEffect/effects.css'
export const FocusScreen = () => {
    // useRef cambia el elemento al que se le hace referencia
    //  sin necesidad de disparar una renderización

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
            ref={ inputRef }
                className='form-control mb-3'
                placeholder='Ingrese su nombre...'
            >
            </input>

            <button type="button" 
                className="btn btn-outline-primary"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
};
