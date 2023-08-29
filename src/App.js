import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Success from './components/Success';

function App() {

  const [email, setEmail] = useState('')

  function handleClick() {
    setSubscribed(true);
  }

  function handleDismissed() {
    setSubscribed(false);
  }

  const [subscribed, setSubscribed] = useState(false);
  return (
    !subscribed ?
      <HomePage handleClick={handleClick} email={email} setEmail={setEmail} /> : <Success handleDismissed={handleDismissed} email={email} />
  )
}


export default App;
