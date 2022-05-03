import {
  SET_SELECTED_CHARACTER,
  SET_SELECTED_CHARACTER_LOCATION_DATA,
  UPDATE_CHARACTER_LIST,
} from "../../common/types";

const initState = {
  characters: [],
  selectedCharacterLocationData: {},
  selectedCharacter: {},
};

export const characterReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_CHARACTER_LIST:
      return { ...state, characters: action.results };
    case SET_SELECTED_CHARACTER_LOCATION_DATA:
      return { ...state, selectedCharacterLocationData: action.data };
    case SET_SELECTED_CHARACTER:
      return { ...state, selectedCharacter: action.data };
    default:
      return state;
  }
};
