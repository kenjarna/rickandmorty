import React from "react";
import { useDispatch } from "react-redux";
import {
  setSelectedCharacter,
  toggleIsCharacterPopupOpen,
} from "../redux/actions/characterActions";

export const Character = (props) => {
  const dispatch = useDispatch();

  return (
    <div
      className="character"
      onClick={() => dispatch(setSelectedCharacter(props.characterDetails))}
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
