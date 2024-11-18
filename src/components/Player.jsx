import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = isEditing ? (
    <input type="text" required value={playerName} onChange={handleChange} />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  let buttonText = isEditing ? "Save" : "Edit";

  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player-info">
          {editablePlayerName}

          <span className="player-symbol">{symbol}</span>
        </span>

        <button onClick={handleEditClick}>{buttonText}</button>
      </li>
    </>
  );
}
