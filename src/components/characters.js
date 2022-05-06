import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCharacters,
  setSelectedCharacterLocationData,
  toggleIsCharacterPopupOpen,
} from "../redux/actions/characterActions";
import "../styles/character.css";
import { Character } from "./character";
import { CharacterPopup } from "./characterPopup";

export function Characters() {
  const characters = useSelector((state) => state.characterList.characters);
  const selectedCharacter = useSelector(
    (state) => state.characterList.selectedCharacter
  );
  const selectedCharacterLocationData = useSelector(
    (state) => state.characterList.selectedCharacterLocationData
  );
  const isCharacterPopupOpen = useSelector(
    (state) => state.characterList.characterPopupOpen
  );
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(toggleIsCharacterPopupOpen());
  }, [dispatch, selectedCharacter]);

  return (
    <section className="characters-container">
      {characters.map((character) => (
        <Character characterDetails={character} />
      ))}
      {Object.keys(selectedCharacter).length &&
      Object.keys(selectedCharacterLocationData).length !== 0 ? (
        <CharacterPopup
          open={isCharacterPopupOpen}
          closeFunction={() => dispatch(toggleIsCharacterPopupOpen())}
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
