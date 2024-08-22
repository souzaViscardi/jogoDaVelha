function GameOver({winner, ...props}){
    console.log({...props})

    return (
        <div id="game-over">
            {winner&& <p>{winner} won!!</p>}
            {!winner&& <p>DRAW!!</p>}
            <p><button onClick={props.onClick}>Rematch!</button></p>
        </div>
    )
    }

export default GameOver