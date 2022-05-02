import React, { useState, useEffect } from "react";
import axios from "axios";

import { Character } from "./character";

import "../styles/character.css";
import { CharacterPopup } from "./characterPopup";

export function Characters() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacterData, setSelectedCharacterData] = useState();
  const [selectedCharacterLocationData, setSelectedCharacterLocationData] =
    useState();
  const [isCharacterPopupOpen, setIsCharacterPopupOpen] = useState(false);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((resp) => {
      setCharacters(resp.data.results);
    });
  }, []);

  useEffect(() => {
    if (selectedCharacterData !== undefined) {
      axios.get(selectedCharacterData.location.url).then((resp) => {
        setSelectedCharacterLocationData(resp.data);
      });
      setIsCharacterPopupOpen(true);
    }
  }, [selectedCharacterData]);

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
