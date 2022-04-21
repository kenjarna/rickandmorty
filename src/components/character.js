import React from "react";

export const Character = (props) => {
  return (
    <div className="character">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
    </div>
  );
};
