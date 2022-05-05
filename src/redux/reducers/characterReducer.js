import {
  SET_SELECTED_CHARACTER,
  SET_SELECTED_CHARACTER_LOCATION_DATA,
  TOGGLE_POPUP_OPEN,
  UPDATE_CHARACTER_LIST,
} from "../../common/types";

const initState = {
  characters: [],
  selectedCharacterLocationData: {},
  selectedCharacter: {},
  characterPopupOpen: false,
};

export const characterReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_CHARACTER_LIST:
      return { ...state, characters: action.results };
    case SET_SELECTED_CHARACTER_LOCATION_DATA:
      return { ...state, selectedCharacterLocationData: action.data };
    case SET_SELECTED_CHARACTER:
      return { ...state, selectedCharacter: action.data };
    case TOGGLE_POPUP_OPEN:
      return { ...state, characterPopupOpen: !state.characterPopupOpen };
    default:
      return state;
  }
};
