import React from 'react'

const ListNumber = ({sumNumber}) => {
    const myNumbers = [1,2,3,4,5];


    return (
        <div>
            {
                myNumbers.length > 3 ? <h2>Hay muchos numeros</h2> :
                    <p>Faltan numeros</p>
            }
            <button onClick={() => sumNumber()}>Sumar Numero</button>
        </div>
    )
}

export default ListNumber
