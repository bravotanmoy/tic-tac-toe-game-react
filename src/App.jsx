import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {

    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X' );
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>

          <Player initialName="Player 1" symbol="X" isActive={activePlayer ==='X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer ==='O'} />
          
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />

      </div>
      Log
    </main>
  )
}
/**
 * Take a look Lifting State Up
 */
export default App
