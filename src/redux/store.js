import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { loadingReducer } from "./reducers/loadingReducer";
import { characterReducer } from "./reducers/characterReducer";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const reducers = combineReducers({
  characterList: characterReducer,
  loadingStatus: loadingReducer,
});
//TODO: implement dev/prod environment to prevent failures when redux is not installed.
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
