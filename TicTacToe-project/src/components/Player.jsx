import {useState} from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [nameEditing, setNameEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    
    
    function handleNameDisplay() {
        setNameEditing((editing) => !editing); 
        //Instead of setIsEditing(!isEditing), we should pass in a function into the state updating function
        if (nameEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleName(e) { //object e as Event
        setPlayerName(e.target.value); //change value to inputted value 
    }
    
    let nameDisplay = <span className="player-name">{playerName}</span>;    
    if (nameEditing) {
        nameDisplay = <input type="text" value={playerName} onChange={handleName} required></input>;
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
              {nameDisplay}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => handleNameDisplay()}>{nameEditing ? "Save" : "Edit"}</button>
        </li>
    );
}