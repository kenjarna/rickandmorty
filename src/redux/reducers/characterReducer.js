import { UPDATE_CHARACTER_LIST } from "../../common/types";

const initState = {
  characters: [],
};

export const characterReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_CHARACTER_LIST:
      return { ...state, characters: action.results };
    default:
      return state;
  }
};
