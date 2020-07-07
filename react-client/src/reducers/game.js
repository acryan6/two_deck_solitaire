import { order, dealOrder } from "../utils/order.js";
import Immutable, { Map } from "immutable";

const gameState = Map({
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
