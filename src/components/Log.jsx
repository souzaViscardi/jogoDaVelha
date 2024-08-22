function Log ({turns}){
    return (
        <ol id="log">
            {turns.map((turn, idx) => <li key={idx}>{turn.player} Selected {turn.square.row}, {turn.square.row}</li>)}
        </ol>
    )
}
export default Log