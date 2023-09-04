import { legacy_createStore as createStore, combineReducers } from "redux";
import addItem from "./reducers/addItem";

const rootReducer = combineReducers({
  addItem,
});

const store = createStore(rootReducer);

export default store;
