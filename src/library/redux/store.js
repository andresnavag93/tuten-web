import { createStore, combineReducers } from "redux";
import { reducer } from "./reducers";

const reducers = combineReducers({
  reducer,
});
const store = createStore(reducers);

export { store };
