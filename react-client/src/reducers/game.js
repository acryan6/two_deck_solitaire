import { order, dealOrder } from "../utils/order.js";
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
  clubs: List([]),
  diamonds: List([]),
  spades: List([]),
  showHand: false,
  hand: null,
});

const getInitState = () => {
  fetch("/api/cards")
    .then((res) => res.json())
    .then((data) => {
      dealCards(data);
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
  console.log(gameState);
};

const gameReducer = (state = getInitState(), action) => {
  // console.log(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default gameReducer;
