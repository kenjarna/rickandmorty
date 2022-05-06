import { TOGGLE_LOADING_STATUS } from "../../common/types";

const initState = {
  isLoading: true,
};

export const loadingReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING_STATUS:
      return { ...state, isLoading: !state.isLoading };
    default:
      return state;
  }
};
