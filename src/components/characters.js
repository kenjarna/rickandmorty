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
    this.setState({ characterID: charID });
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
          open={this.state.characterID !== 0}
          onCloseFunction={this.closeCharacterPopup}
        />
      </section>
    );
  }
}
