import React from 'react'

const Names = () => {

    const namesList = [
        'Mario',
        'Juan',
        'Pepe',
    ]

    return (
        <ul>
            {
                namesList.map((name, idx) => (
                    <li key={idx}>{name}</li>
                ))
            }
        </ul>
    )
}

export default Names
