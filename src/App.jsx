import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './components/Player.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div id='game-container'>
        <ol id='players'>

          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
          
        </ol>
        Game Board

      </div>
      Log
    </main>
  )
}

export default App
