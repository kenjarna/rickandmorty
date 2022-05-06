import axios from "axios";
import { GET_ALL_CHARACTERS } from "../../common/endpoints";
import {
  UPDATE_CHARACTER_LIST,
  SET_SELECTED_CHARACTER_LOCATION_DATA,
  SET_SELECTED_CHARACTER,
  TOGGLE_POPUP_OPEN,
  TOGGLE_LOADING_STATUS,
} from "../../common/types";

export function setCharacters() {
  return (dispatch) => {
    axios.get(GET_ALL_CHARACTERS).then((resp) => {
      dispatch({
        type: UPDATE_CHARACTER_LIST,
        results: resp.data.results,
      });
      setTimeout(() => {
        dispatch({
          type: TOGGLE_LOADING_STATUS,
        });
      }, 2000);
    });
  };
}

export function setSelectedCharacterLocationData(characterLocationURL) {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_LOADING_STATUS,
    });
    axios.get(characterLocationURL).then((resp) => {
      dispatch({
        type: SET_SELECTED_CHARACTER_LOCATION_DATA,
        data: resp.data,
      });
    });
    dispatch({
      type: TOGGLE_LOADING_STATUS,
    });
  };
}

export function setSelectedCharacter(character) {
  return (dispatch) => {
    dispatch({
      type: SET_SELECTED_CHARACTER,
      data: character,
    });
    dispatch({
      type: TOGGLE_POPUP_OPEN,
    });
  };
}

export function toggleIsCharacterPopupOpen() {
  return {
    type: TOGGLE_POPUP_OPEN,
  };
}
