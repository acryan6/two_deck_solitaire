import { order, revOrder } from "../utils/order.js";
import Immutable, { Map, List } from "immutable";
const gameState = Map({
  pile_A: List([]),
  pile_2: List([]),
  pile_3: List([]),
  pile_4: List([]),
  pile_5: List([]),
  pile_6: List([]),
  pile_7: List([]),
  pile_8: List([]),
  pile_9: List([]),
  pile_0: List([]),
  pile_J: List([]),
  pile_Q: List([]),
  pile_K: List([]),
  drawStack: List([]),
  hearts: List([]),
  heartsDown: List([]),
  clubs: List([]),
  clubsDown: List([]),
  diamonds: List([]),
  diamondsDown: List([]),
  spades: List([]),
  spadesDown: List([]),
  showHand: false,
  hand: null,
  score: 104,
  isLoading: false,
});

const incrementPile = (
  state,
  card,
  nextUp,
  value = card.code[0],
  suit = card.suit.toLowerCase()
) => {
  nextUp = nextUp || order[state.get(suit).length];
  if (value === nextUp) {
    let pile = card.pile;
    let cardNum = card.cardNum;
    let pileList = state.get(pile);
    for (let i = 0; i < pileList.length; i++) {
      if (pileList[i].cardNum === cardNum) {
        if (state.get(suit).length === 12) {
          return state
            .deleteIn([pile, i])
            .updateIn([suit], (list) => [...list, card])
            .update("score", (score) => score - 6);
        } else
          return state
            .deleteIn([pile, i])
            .updateIn([suit], (list) => [...list, card])
            .update("score", (score) => score - 1);
      }
    }
  } else return state;
};

const decrementPile = (
  state,
  card,
  nextDown,
  value = card.code[0],
  suit = card.suit.toLowerCase()
) => {
  nextDown = nextDown || revOrder[state.get(`${suit}Down`).length];
  if (value === nextDown) {
    let pile = card.pile;
    let cardNum = card.cardNum;
    let pileList = state.get(pile);
    for (let i = 0; i < pileList.length; i++) {
      if (pileList[i].cardNum === cardNum) {
        if (state.get(`${suit}Down`).length === 12) {
          return state
            .deleteIn([pile, i])
            .updateIn([`${suit}Down`], (list) => [...list, card])
            .update("score", (score) => score - 6);
        } else {
          return state
            .deleteIn([pile, i])
            .updateIn([`${suit}Down`], (list) => [...list, card])
            .update("score", (score) => score - 1);
        }
      }
    }
  } else return state;
};

const doubleClick = (state, card) => {
  let value = card.code[0];
  let suit = card.suit.toLowerCase();
  let nextUp = order[state.get(suit).length];
  let nextDown = revOrder[state.get(`${suit}Down`).length];
  if (value === nextUp && value === nextDown) {
    return state;
  } else if (value === nextUp) {
    return incrementPile(state, card, nextUp, value, suit);
  } else if (value === nextDown) {
    return decrementPile(state, card, nextDown, value, suit);
  } else return state;
};

const handleDrawStack = (state) => {
  let stack = state.get("drawStack");
  let draw = stack[stack.length - 1];
  let val = draw.code[0];
  return state
    .setIn([`pile_${val}`], [...state.get(`pile_${val}`), draw])
    .deleteIn(["drawStack", stack.length - 1])
    .set("hand", `pile_${val}`);
};

const gameReducer = (state = gameState, action) => {
  switch (action.type) {
    case "DOUBLE_CLICK":
      return doubleClick(state, action.payload);
    case "INCREMENT":
      return incrementPile(state, action.payload);
    case "DECREMENT":
      return decrementPile(state, action.payload);
    case "DRAW_STACK":
      return handleDrawStack(state);
    case "API_CALL_START":
      return state.update("isLoading", (bool) => !bool);
    case "API_CALL_SUCCESS":
      return action.payload;
    case "API_CALL_FAILURE":
      return state;
    default:
      return state;
  }
};

export default gameReducer;
