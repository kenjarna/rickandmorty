import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setCharacters } from "../redux/actions/characterActions";
import { Character } from "./character";

import "../styles/character.css";
import { CharacterPopup } from "./characterPopup";

export function Characters() {
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  const [selectedCharacterData, setSelectedCharacterData] = useState();
  const [selectedCharacterLocationData, setSelectedCharacterLocationData] =
    useState();
  const [isCharacterPopupOpen, setIsCharacterPopupOpen] = useState(false);

  useEffect(() => {
    dispatch(setCharacters());
  }, [dispatch]);

  //Fired when user clicks on a character tile
  useEffect(() => {
    if (selectedCharacterData !== undefined) {
      axios.get(selectedCharacterData.location.url).then((resp) => {
        setSelectedCharacterLocationData(resp.data);
      });
      setIsCharacterPopupOpen(true);
    }
  }, [selectedCharacterData]);
  //Allows popup state to close
  useEffect(() => {
    if (isCharacterPopupOpen.current === true) {
      setIsCharacterPopupOpen(false);
    }
  }, [isCharacterPopupOpen]);

  return (
    <section className="characters-container">
      {characters.map((character) => (
        <Character
          characterDetails={character}
          onClickFunction={setSelectedCharacterData}
        />
      ))}
      {(selectedCharacterData && selectedCharacterLocationData) !==
      undefined ? (
        <CharacterPopup
          open={isCharacterPopupOpen}
          closeFunction={() => setIsCharacterPopupOpen(false)}
          characterData={selectedCharacterData}
          locationData={selectedCharacterLocationData}
          episodeData={selectedCharacterData.episode}
        />
      ) : (
        ""
      )}
    </section>
  );
}
