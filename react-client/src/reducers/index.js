import game from "./game";
import score from "./score";
import { combineReducers } from "redux-immutable";

export default combineReducers({
  game,
  score,
});
