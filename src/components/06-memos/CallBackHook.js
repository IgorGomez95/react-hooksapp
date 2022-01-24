import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';

export const CallBackHook = () => {
    // useCallBack se usa cuando se quiere mandar una función a un
    // componente hijo
    // tambien se usa cuando se tiene un useEffect y utiliza una
    // dependencia que es la función
    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    const increment = useCallback((step) => {
      setCounter( c => c + step );
    }, [setCounter]);
    

    return (
        <div>
            <h1>useCallBack Hook</h1>
            <h3>Counter: { counter }</h3>
            <hr/>

            <ShowIncrement increment={ increment }/>
        </div>
    )
};
