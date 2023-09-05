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

  function inputVal(value) {
    setEmail(value);
  }

  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');


  return (
    !subscribed ?

      <HomePage handleClick={handleClick} inputVal={inputVal} /> :

      <Success handleDismissed={handleDismissed} email={email} />
  )
}


export default App;
