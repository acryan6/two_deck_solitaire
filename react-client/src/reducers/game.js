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
  hand: null,
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
  // console.log(gameState);
};

const incrementPile = (state, card) => {
  console.log(card);
  let pile = card.pile;
  let suit = card.suit.toLowerCase();
  let suitCode = card.code[1];
  let value = card.code[0];
  if (value === order[state.get("game").get(suit).length]) {
    let statePile = this.state[`pile_${pile}`];
    for (let i = 0; i < statePile.length; i++) {
      if (statePile[i].code === code) {
        const card = statePile.splice(i, 1)[0];
        card.name = "aggregate-pile";
        this.setState(
          {
            [suit]: [...this.state[suit], card],
          },
          () => console.log(this.state[suit][0].name)
        );
      }
    }
  }
};

const gameReducer = (state = Map().merge(getInitState()), action) => {
  console.log(state);
  switch (action.type) {
    case "INCREMENT":
      return incrementPile(state, action.payload);
    default:
      return state;
  }
};

export default gameReducer;
