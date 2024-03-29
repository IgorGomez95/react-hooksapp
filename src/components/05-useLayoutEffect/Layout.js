import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounterV2 } from '../../hooks/useCounterV2';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {
    
    const { counter, increment } = useCounterV2(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);
    
  
    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr/>

            <blockquote className="blockquote text-end">
                <p  
                    ref={pTag} 
                    className='mb-2'
                > { quote } </p>
            </blockquote>
            <pre>
                {
                    JSON.stringify(boxSize, null,3)
                }
            </pre>
            <button 
                className='btn btn-primary'
                onClick={ increment }    
            >
                Siguiente quote
            </button>

        </div>
    );
};
