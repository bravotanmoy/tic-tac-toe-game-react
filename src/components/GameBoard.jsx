import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; // ??? May be previously the value was not updateting there because of previously there on resource retreveing. After dstracturing array/object. Updating actual value
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard;
        } );

        onSelectSquare();
    }


    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map( (playerSymbol, colIndex) => (
                    <li key={colIndex}> 
                        <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button> 
                    </li>
                ))}
            </ol>

        </li>)}
    </ol>


}