import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Success from './components/Success';

function App() {

  function handleClick() {
    setSubscribed(true);
  }

  function handleDismissed() {
    setSubscribed(false);
  }

  const [subscribed, setSubscribed] = useState(false);
  return (
    !subscribed ?
      <HomePage handleClick={handleClick} /> : <Success handleDismissed={handleDismissed} />
  )
}


export default App;
