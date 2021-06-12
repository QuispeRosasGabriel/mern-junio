import React, { useState } from 'react';
import Hello from './components/Hello';
import Home from './components/Home';
import ListNumber from './components/ListNumber';
import Names from './components/Names';
import Welcome from './components/Welcome';


const App = () => {

  const [number, setNumber] = useState(0);
  
  const handleHello = () => console.log('Hola como estas');
  const sumNumber = () =>  setNumber(number + 1);


  return (
    <div>
      <Hello handleHello={handleHello} />
      <ListNumber sumNumber={sumNumber} />
      {number}
    </div>
  );
}

export default App;
