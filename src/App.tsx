import React, { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Login from './components/Login/Login';
import UserProfile from './components/Profile/UserProfile';
import { Game, Profile } from './types';

function App(): JSX.Element {
  const [game, setGame] = useState<Game | undefined>(undefined);
  const [openProfile, setOpenProfile] = useState<Profile | undefined>(
    undefined
  );
  if (openProfile !== undefined) {
    return (
      <UserProfile setOpenProfile={setOpenProfile} profile={openProfile} />
    );
  } else if (game !== undefined) {
    return <Board game={game} setOpenProfile={setOpenProfile} />;
  } else {
    return <Login setGame={setGame} />;
  }
}

export default App;
