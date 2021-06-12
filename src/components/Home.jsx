import React from 'react'

const Home = ({ name, lastName, age }) => {

    return (
        <div>
            <p>
               {`Hola Soy ${name} ${lastName}`}
            </p>
            <p>
                {
                    age > 18 ? 'Eres Mayor de edad' : 'Aun eres menor'
                }
            </p>
        </div>
    )
}

export default Home;
