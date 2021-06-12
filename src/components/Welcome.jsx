import React from 'react';

const Welcome = () => {
    const isAdmin = false;

    return(
        <div style={{backgroundColor:'blue'}}>
            {
             !!isAdmin ? 'Bienvenido administrador' :
             <p>No tienes los accesos correctos</p>
            }
        </div>
    )
}

export default Welcome;