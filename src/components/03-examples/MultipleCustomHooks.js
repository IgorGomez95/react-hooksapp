import React from 'react';
import { useCounterV2 } from '../../hooks/useCounterV2';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {
    
    const { counter, increment } = useCounterV2(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { author, quote } = (!loading && data.length>0) && data[0];
  
    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>

            {
                loading ?
                (
                    <div className="alert alert-info text-center" role="alert">
                        Loading...
                    </div>
                ) :
                (
                    <div>
                        <blockquote className="blockquote text-end">
                            <p className='mb-2'> { quote } </p>
                            <footer className='blockquote-footer'>{ author }</footer>
                        </blockquote>
                        <button 
                            className='btn btn-primary'
                            onClick={ increment }    
                        >
                            Siguiente quote
                        </button>
                    </div>
                )
            }

        </div>
    );
};
