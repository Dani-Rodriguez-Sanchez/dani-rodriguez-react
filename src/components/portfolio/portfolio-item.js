import React from 'react';

export default function(props) {
    //functional component: solo para renderizar algun contenido
    return (
        <div>
            <h3>{props.title}</h3>
             <h4>{props.url}</h4>
        </div>
    )
}
