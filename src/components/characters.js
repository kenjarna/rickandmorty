import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCharacters,
  setSelectedCharacter,
  setSelectedCharacterLocationData,
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

  return (
    <section className="characters-container">
      {characters.map((character) => (
        <Character
          setSelectedCharacter={() => dispatch(setSelectedCharacter(character))}
          status={character.status}
          species={character.species}
          gender={character.gender}
          name={character.name}
          image={character.image}
          key={character.id.toString()}
          togglePopup={() => setShowPopup(true)}
        />
      ))}
      {showPopup && (
        <React.Suspense fallback={null}>
          <CharacterPopup
            open={showPopup}
            closeFunction={() => setShowPopup(false)}
            characterData={selectedCharacter}
            locationData={selectedCharacterLocationData}
          />
        </React.Suspense>
      )}
    </section>
  );
}
