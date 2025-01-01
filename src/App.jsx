import { useState } from 'react'
import './App.css'
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import { WINNING_COMBINATIONS} from './winning-combinations.js';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X' ) {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  // const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {

    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X' );
    setGameTurns(prevTurns => {
      const activePlayer = deriveActivePlayer(gameTurns);

      const updatedTurns = [
        { 
          square: { row: rowIndex, col: colIndex }, 
          player: activePlayer 
        }, 
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>

          <Player initialName="Player 1" symbol="X" isActive={activePlayer ==='X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer ==='O'} />
          
        </ol>
        <GameBoard  onSelectSquare={handleSelectSquare}  turns={gameTurns} />

      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}
/**
 * Take a look Lifting State Up
 */
export default App
