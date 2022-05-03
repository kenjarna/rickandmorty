import axios from "axios";
import { GET_ALL_CHARACTERS } from "../../common/endpoints";
import {
  UPDATE_CHARACTER_LIST,
  SET_SELECTED_CHARACTER_LOCATION_DATA,
  SET_SELECTED_CHARACTER,
} from "../../common/types";

export function setCharacters() {
  return (dispatch) => {
    axios.get(GET_ALL_CHARACTERS).then((resp) => {
      dispatch({
        type: UPDATE_CHARACTER_LIST,
        results: resp.data.results,
      });
    });
  };
}

export function setSelectedCharacterLocationData(characterLocationURL) {
  console.log(characterLocationURL);
  return (dispatch) => {
    axios.get(characterLocationURL).then((resp) => {
      dispatch({
        type: SET_SELECTED_CHARACTER_LOCATION_DATA,
        data: resp.data,
      });
    });
  };
}

export function setSelectedCharacter(character) {
  return {
    type: SET_SELECTED_CHARACTER,
    data: character,
  };
}
