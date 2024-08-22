import { useState } from "react"


function GameBoard ({onSelectSquare, activePlayerSymbol, board}){

    return(
    <ol id="game-board">
        {board.map((row,rowIdx) => (
        <li key={rowIdx}>
            <ol>
                {row.map((playerSymbol,colIdx) => (<li key={colIdx}><button disabled={playerSymbol != null? true:false} onClick={()=>onSelectSquare(rowIdx, colIdx)}>{playerSymbol}</button></li>))}
            </ol>
        </li>
        ))}
    </ol>

        
    )
}

export default GameBoard