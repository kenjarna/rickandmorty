import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { loadingReducer } from "./reducers/loadingReducer";
import { characterReducer } from "./reducers/characterReducer";

const reducers = combineReducers({
  characterList: characterReducer,
  loadingStatus: loadingReducer,
});

const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const store = createStore(reducers, enhancers);
