import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import { Game } from './types';

function App() {
  const [game, setGame] = useState<Game | undefined>(undefined);
  return (
    game ? <></> :
    <Login setGame={setGame} />
  );
}

export default App;
