import './App.css';
import { useState } from 'react';

function App() {

  const [buttonColor, setButtonColor] = useState('red');

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div>
      <button
        type="button"
        style={{
          backgroundColor: buttonColor,
          fontWeight: 'bold',
          color: 'white'
        }}
        onClick={() => setButtonColor(newButtonColor)}
      >Change to {newButtonColor}</button>
    </div>
  );
}

export default App;
