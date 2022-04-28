import React from "react";

export const Character = (props) => {
  return (
    <div
      className="character"
      onClick={() => props.onClickFunction(props.characterDetails.id)}
    >
      <img
        src={props.characterDetails.image}
        alt={props.characterDetails.name}
      />
      <h3>{props.characterDetails.name}</h3>
      <p>Status: {props.characterDetails.status}</p>
      <p>Species: {props.characterDetails.species}</p>
      <p>Gender: {props.characterDetails.gender}</p>
    </div>
  );
};
