import { TOGGLE_LOADING_STATUS } from "../../common/types";

export function toggleLoadingStatus() {
  return {
    type: TOGGLE_LOADING_STATUS,
  };
}
