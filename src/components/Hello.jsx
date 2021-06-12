import React from 'react';
import Welcome from './Welcome';

const phrase = 'Hola amigos'

const Hello = ({handleHello}) => {
    return (
        <div>
            <h1 style={{backgroundColor:'red'}}>
                {phrase}
            </h1>
            <button onClick={handleHello}>Saludar</button>
            <Welcome />
        </div>
    )
}

export default Hello;


