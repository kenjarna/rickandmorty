import React from "react";
import { useSelector } from "react-redux";
import Popup from "reactjs-popup";
import "../styles/popup.css";
import { Loading } from "./loading";

const CharacterPopup = ({ closeFunction, open }) => {
  const locationData = useSelector(
    (state) => state.characterList.selectedCharacterLocationData
  );
  const selectedCharacter = useSelector(
    (state) => state.characterList.selectedCharacter
  );
  const episodeData = selectedCharacter.episode;

  return (
    <div>
      {Object.keys(locationData).length !== 0 ? (
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
              <div className="character-name">{selectedCharacter.name}</div>
              <div className="episodes">
                Episode Count: {episodeData.length}
              </div>
              <div className="location">
                This character is from {selectedCharacter.origin.name}. Last
                known location was at {locationData.name}, which is a{" "}
                {locationData.type.toLowerCase()} and has{" "}
                {locationData.residents.length} other residents.
              </div>
            </div>
          )}
        </Popup>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CharacterPopup;
