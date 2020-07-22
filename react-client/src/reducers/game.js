import { order, dealOrder } from "../utils/order.js";
import Immutable, { Map, List } from "immutable";

const gameState = {
  pile_A: [],
  pile_2: [],
  pile_3: [],
  pile_4: [],
  pile_5: [],
  pile_6: [],
  pile_7: [],
  pile_8: [],
  pile_9: [],
  pile_0: [],
  pile_J: [],
  pile_Q: [],
  pile_K: [],
  drawStack: [],
  hearts: [],
  clubs: [],
  diamonds: [],
  spades: [],
  showHand: false,
  hand: [],
};

const getInitState = () => {
  fetch("/api/cards")
    .then((res) => res.json())
    .then((data) => {
      dealCards(data);
      for (let key in gameState) {
        if (Array.isArray(gameState[key])) {
          gameState[key] = List().concat(gameState[key]);
        }
      }
    })
    .catch((err) => console.log(err));
  return gameState;
};

const dealCards = (deck) => {
  let position = 0;
  for (let i = 0; i < deck.length; i++) {
    let pile = dealOrder[position % 13];
    gameState[`pile_${pile}`].push(deck[i]);
    let val = deck[i].code[0];
    let addDraw = [];
    let drawCount = val === pile ? 1 : 0;
    if (val === "A") {
      drawCount += 2;
    }
    if (val === "K" || pile === "K" || pile === "0") {
      drawCount++;
    }
    for (let j = i + 1; j < i + 1 + drawCount; j++) {
      if (deck[j]) {
        gameState.drawStack.push(deck[j]);
      }
    }
    i += drawCount;
    position++;
  }
};

const incrementPile = (state, card) => {
  let pile = card.pile;
  let suit = card.suit.toLowerCase();
  let suitCode = card.code[1];
  let value = card.code[0];
  let code = card.code;
  if (value === dealOrder[state.get(suit).length]) {
    let pileList = state.get(`pile_${pile}`);
    for (let i = 0; i < pileList.length; i++) {
      if (pileList[i].code === code) {
        return state
          .deleteIn([`pile_${pile}`, i])
          .updateIn([suit], (list) => [...list, card]);
      }
    }
  } else return state;
};

const handleDrawStack = (state) => {
  let stack = state.get("drawStack");
  let draw = stack[stack.length - 1];
  let val = draw.code[0];
  let pile = state.get(`pile_${val}`);
  return state
    .setIn([`pile_${val}`], [...pile, draw])
    .deleteIn(["drawStack", stack.length - 1])
    .set("hand", [...pile, draw]);
};

const gameReducer = (state = Map().merge(getInitState()), action) => {
  switch (action.type) {
    case "INCREMENT":
      return incrementPile(state, action.payload);
    case "DRAW_STACK":
      return handleDrawStack(state);
    default:
      return state;
  }
};

export default gameReducer;
