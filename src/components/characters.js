import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setCharacters,
  setSelectedCharacterLocationData,
} from "../redux/actions/characterActions";
import { Character } from "./character";

import "../styles/character.css";
import { CharacterPopup } from "./characterPopup";

export function Characters() {
  const characters = useSelector((state) => state.characters);
  const selectedCharacter = useSelector((state) => state.selectedCharacter);
  const selectedCharacterLocationData = useSelector(
    (state) => state.selectedCharacterLocationData
  );
  const dispatch = useDispatch();
  const [isCharacterPopupOpen, setIsCharacterPopupOpen] = useState(false);

  useEffect(() => {
    dispatch(setCharacters());
  }, [dispatch]);

  //Fired when user clicks on a character tile
  useEffect(() => {
    if (Object.keys(selectedCharacter).length !== 0) {
      dispatch(
        setSelectedCharacterLocationData(selectedCharacter.location.url)
      );
    }
  }, [dispatch, selectedCharacter]);
  //Allows popup state to close
  useEffect(() => {
    if (isCharacterPopupOpen.current === true) {
      setIsCharacterPopupOpen(false);
    }
  }, [isCharacterPopupOpen]);

  return (
    <section className="characters-container">
      {characters.map((character) => (
        <Character characterDetails={character} />
      ))}
      {(selectedCharacter && selectedCharacterLocationData) !== undefined ? (
        <CharacterPopup
          open={isCharacterPopupOpen}
          closeFunction={() => setIsCharacterPopupOpen(false)}
          characterData={selectedCharacter}
          locationData={selectedCharacterLocationData}
          episodeData={selectedCharacter.episode}
        />
      ) : (
        ""
      )}
    </section>
  );
}
