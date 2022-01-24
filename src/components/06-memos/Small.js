import React from 'react';

export const Small = React.memo(({value}) => {
    // memo se utiliza para memorizar el componente y no volverlo a
    // renderizar hasta que sus properties cambien
    console.log('Me volví a mostrar!!!');
    return (
        <small>
            { value }
        </small>
    )
})
