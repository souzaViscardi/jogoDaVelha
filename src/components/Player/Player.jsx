import { useState } from "react"

function Player({name, setName, symbol, isActive}) {
const [isEditing, setIsEditing] = useState(false)
let playerName = <span className="player-name">{name}</span>
let buttonSave = <button onClick={handleEdit}>Edit</button>

function handleEdit (){
    console.log(isEditing)
    setIsEditing(!isEditing)
}
function handleSaveName (e){
    setName(e.target.value)
    
}

if(isEditing){
    playerName = <input onChange={handleSaveName} type="text" className="player-name"/>
    buttonSave = <button onClick={handleEdit}>Save</button>
} else {
    buttonSave = <button onClick={handleEdit}>Edit</button>
}

    return (
          <li className={isActive ? "active": ""}>
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            {buttonSave}
          </li>

    )
  }
  
  export default Player
  