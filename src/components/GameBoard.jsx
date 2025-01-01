import { useState } from "react";



export default function GameBoard({ onSelectSquare, turns }) {

    let gameBoard = initialGameBoard;

    for(const turn of turns) {

        const {square, player } = turn;
        const {row, col } = square;

        gameBoard[row][col] = player;

    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; // ??? May be previously the value was not updateting there because of previously there on resource retreveing. After dstracturing array/object. Updating actual value
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     } );

    //     onSelectSquare();
    // }


    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map( (playerSymbol, colIndex) => (
                    <li key={colIndex}> 
                        <button onClick={() => onSelectSquare(rowIndex, colIndex) } disabled={playerSymbol !== null}>{playerSymbol}</button> 
                    </li>
                ))}
            </ol>

        </li>)}
    </ol>


}