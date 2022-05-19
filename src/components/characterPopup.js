import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import Popup from "reactjs-popup";
import "../styles/popup.css";

const CharacterPopup = ({ closeFunction, open, characterData }) => {
  const locationData = useSelector(
    (state) => state.characterList.selectedCharacterLocationData
  );

  return (
    <div>
      {Object.keys(locationData).length !== 0 && (
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
              <div className="episodes">
                Episode Count: {characterData.episode.length}
              </div>
              <div className="location">
                This character is from {characterData.origin.name}. Last known
                location was at {locationData.name}, which is a{" "}
                {locationData.type.toLowerCase()} and has{" "}
                {locationData.residents.length} other residents.
              </div>
            </div>
          )}
        </Popup>
      )}
    </div>
  );
};

CharacterPopup.propTypes = {
  characterData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    episode: PropTypes.array.isRequired,
    origin: PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
    }),
  }),
  locationData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    residents: PropTypes.array,
  }),
};

CharacterPopup.defaultProps = {
  characterData: {
    name: "Character name is unavailable",
    origin: {
      name: "...actually we're not sure where this character is from yet",
    },
    episode: [],
  },
  locationData: {
    name: "..hmm this character is elusive as we don't actually know where they were last spotted",
    type: "unknown",
    residents: [],
  },
};

export default CharacterPopup;
