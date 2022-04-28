import React from "react";
import Popup from "reactjs-popup";

export const CharacterPopup = ({
  closeFunction,
  open,
  characterData,
  locationData,
  episodeData,
}) => {
  return (
    <div>
      <Popup
        open={open}
        onClose={() => closeFunction()}
        modal
        className="character-popup"
      >
        {(close) => (
          <div>
            <div className="character-name">{characterData.name}</div>
            <div className="episodes">Episode Count: {episodeData.length}</div>
            <div className="location">
              This character is from {characterData.origin.name}.
              {/* TODO: implement a wait strategy to load this data properly */}
              {/* Last known
              location was at {locationData.name}, which is a
              {locationData.data.type || ""} and has
              {locationData.data.residents.length || ""} other residents. */}
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};
