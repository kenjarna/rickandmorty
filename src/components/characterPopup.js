import React from "react";
import Popup from "reactjs-popup";

import "../styles/popup.css";

const CharacterPopup = ({
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
        id="character-popup"
      >
        {(close) => (
          <div>
            <a className="modal-close" onClick={close}>
              &times;
            </a>
            <div className="character-name">{characterData.name}</div>
            <div className="episodes">Episode Count: {episodeData.length}</div>
            <div className="location">
              This character is from {characterData.origin.name}. Last known
              location was at {locationData.name}, which is a{" "}
              {locationData.type.toLowerCase()} and has{" "}
              {locationData.residents.length} other residents.
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default CharacterPopup;
