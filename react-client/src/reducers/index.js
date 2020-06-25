import gameReducer from "./game";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  game: gameReducer,
});

export default allReducers;
