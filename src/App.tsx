import React, { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import { Game } from './types'

function App (): JSX.Element {
  const [game, setGame] = useState<Game | undefined>(undefined)
  return game === undefined ? <Login setGame={setGame} /> : <></>
}

export default App
