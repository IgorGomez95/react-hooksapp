import React, { useState } from 'react';
import { useCounterV2 } from '../../hooks/useCounterV2';
import { Small } from './Small';

import '../02-useEffect/effects.css';

export const Memorize = () => {
    const { counter, increment } = useCounterV2(10);
    const [show, setShow] = useState(true);
    
    return (
        <div>
            <h1>Counter: <Small value={counter}/> </h1>
            <hr/>

            <button
                className='btn btn-primary'
                onClick={ increment }
            >
                +1
            </button>
            <button
                className='btn btn-outline-primary ms-3'
                onClick={ () => {
                    setShow(!show)
                } }
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>
    )
};
