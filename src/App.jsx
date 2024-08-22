import Player from './components/Player/Player'
import { useState } from "react"
import GameBoard from './components/GameBoard'
import Log from './components/Log'
import { WINNING_COMBINATIONS } from './assets/winning-combinations'
import GameOver from './components/GameOver'
const initialGameBoard =[
  [null, null, null],
  [null, null, null],
  [null, null, null],
]
function deriveActivePlayer(gameTurns){
  let currentPlayer = 'X'
  if(gameTurns.length > 0 && gameTurns[0].player == "X"){
    currentPlayer = "O"
  }
  return currentPlayer
}

let winner = null
function App() {
  let gameBoard = [...initialGameBoard.map(el => [...el])]
  const [Player1, setPlayer1] = useState("Player 1")
  const [Player2, setPlayer2] = useState("Player 2")
  const [gameTurns, setGameTurns] = useState([])
  let hasDraw = gameTurns.length == 9 && !winner
  const activePlayer = deriveActivePlayer(gameTurns)
  for(const turn of gameTurns){
    const {square, player} =  turn
    const {row, col} =  square
    gameBoard[row][col] = player
}
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column ]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column ]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column ]
  
    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){
      winner = firstSquareSymbol
    }
  }
  function handleActivePlayer(rowIdx, colIdx) {
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [{square: {row: rowIdx, col: colIdx}, player: currentPlayer}, ...prevTurns]
      return updatedTurns
    })
  }
  function handleRematch(){
    setGameTurns([])
    winner = false
    hasDraw = false
  }
  if(Player1 == Player2){
    alert("Player names cannot be equals")
    setPlayer1("Please change")
  }
  return (
    <main>
      <div id="game-container">
       <ol id="players" className='highlight-player'>
        <Player name={Player1} setName={setPlayer1} symbol='X' isActive={activePlayer=="X"}/>
        <Player name={Player2} setName={setPlayer2} symbol='O' isActive={activePlayer=="O"}/>
       </ol>
       {(winner || hasDraw) && <GameOver onClick={handleRematch} winner={hasDraw? false : winner=="X"?Player1:Player2} />}
       <GameBoard board={gameBoard} onSelectSquare={handleActivePlayer} activePlayerSymbol={activePlayer}/>
      </div>
      <Log turns={gameTurns}></Log>

    </main>
  )
}

export default App
