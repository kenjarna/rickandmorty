import React, { Component } from "react";
import axios from "axios";

import { Character } from "./character";

import "../styles/character.css";
import { CharacterPopup } from "./characterPopup";

export class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      characterID: 0,
      selectedCharacterData: {},
    };
  }

  componentDidMount() {
    this.getCharacterLists();
  }

  getCharacterLists = () => {
    axios.get("https://rickandmortyapi.com/api/character").then((resp) => {
      this.setState({ characters: resp.data.results });
    });
  };

  setCharacterIDClick = (charID) => {
    const character = this.state.characters.find((char) => char.id === charID);
    this.setState({
      characterID: charID,
      selectedCharacterData: character,
    });
    this.updateClickedCharacterLocationDetails(charID);
  };

  updateClickedCharacterLocationDetails = (id) => {
    let characterState = this.state.characters;
    const characterIndex = characterState.findIndex(
      (character) => character.id === id
    );
    let updatedCharacter = characterState.find(
      (character) => character.id === id
    );

    axios.get(updatedCharacter.location.url).then((resp) => {
      updatedCharacter.location.data = resp.data;
    });

    characterState[characterIndex] = updatedCharacter;
  };

  closeCharacterPopup = () => {
    this.setState({ characterID: 0 });
  };

  render() {
    return (
      <section className="characters-container">
        {this.state.characters.map((character) => (
          <Character
            characterDetails={character}
            onClickFunction={this.setCharacterIDClick}
          />
        ))}
        <CharacterPopup
          open={
            this.state.characterID !== 0 &&
            this.state.selectedCharacterData.data !== null
          }
          closeFunction={this.closeCharacterPopup}
          characterData={this.state.selectedCharacterData}
          locationData={this.state.selectedCharacterData.location}
          episodeData={this.state.selectedCharacterData.episode}
        />
      </section>
    );
  }
}
