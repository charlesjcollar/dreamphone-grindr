import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  return (
    gameStarted ? <></> :
    <Login />
  );
}

export default App;
