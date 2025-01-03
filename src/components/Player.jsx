 import { useState } from "react";
 
 export default function Player({ initialName, symbol, isActive}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleChange(event) {
       
        setPlayerName( event.target.value );

    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = 'Edit';

    if(isEditing) {
        editablePlayerName = (
            <input type="text" value={playerName} onChange={handleChange}/>
        );
        // btnCaption = 'Save';
    }

    function handleEditClick(){
        setIsEditing( (editing) => !editing); 

    }

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                { editablePlayerName }
                <span className='player-name'>{name}</span>
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit' }</button>
        </li>
    );

 }