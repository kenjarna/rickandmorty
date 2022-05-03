import axios from "axios";
import { GET_ALL_CHARACTERS } from "../../common/endpoints";
import { UPDATE_CHARACTER_LIST } from "../../common/types";

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
