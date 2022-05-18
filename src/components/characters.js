import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCharacters,
  setSelectedCharacterLocationData,
  toggleIsCharacterPopupOpen,
} from "../redux/actions/characterActions";
import "../styles/character.css";
import { Character } from "./character";
const CharacterPopup = React.lazy(() => import("./characterPopup"));

export function Characters() {
  const [showPopup, setShowPopup] = useState(false);
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
  const isSiteLoading = useSelector((state) => state.loadingStatus.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCharacters());
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(selectedCharacter).length !== 0 && !isSiteLoading) {
      dispatch(
        setSelectedCharacterLocationData(selectedCharacter.location.url)
      );
    }
  }, [dispatch, selectedCharacter, isSiteLoading]);
  console.log(showPopup);
  return (
    <section className="characters-container">
      {characters.map((character) => (
        <Character
          characterDetails={character}
          togglePopup={() => setShowPopup(true)}
        />
      ))}
      {showPopup && (
        <React.Suspense fallback={null}>
          <CharacterPopup
            open={isCharacterPopupOpen}
            closeFunction={() => {
              dispatch(toggleIsCharacterPopupOpen());
              setShowPopup(false);
            }}
            characterData={selectedCharacter}
            locationData={selectedCharacterLocationData}
            episodeData={selectedCharacter.episode}
          />
        </React.Suspense>
      )}
    </section>
  );
}
