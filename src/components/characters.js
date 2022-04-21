import React, { Component } from "react";
import axios from "axios";

import { Character } from "./character";

import "../styles/character.css";

export class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
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

  render() {
    return (
      <section className="characters-container">
        {this.state.characters.map((character) => (
          <Character
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            img={character.image}
          />
        ))}
      </section>
    );
  }
}
