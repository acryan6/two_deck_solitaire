import { apiCallStart, apiCallSuccess, apiCallFailure } from "../actions";
import { Map, List } from "immutable";
import { order } from "../utils/order.js";

let gameState = {
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
  heartsDown: [],
  clubs: [],
  clubsDown: [],
  diamonds: [],
  diamondsDown: [],
  spades: [],
  spadesDown: [],
  showHand: false,
  hand: null,
  score: 104,
  isLoading: false,
};

const getInitState = () => {
  return (dispatch) => {
    dispatch(apiCallStart());
    fetch("/api/cards")
      .then((res) => res.json())
      .then((data) => {
        dealCards(data);
        dispatch(apiCallSuccess(Map().merge(gameState)));
        for (let key in gameState) {
          if (Array.isArray(gameState[key])) {
            gameState[key] = List().concat(gameState[key]);
          }
        }
        return Map().merge(gameState);
      })
      .catch((err) => {
        dispatch(apiCallFailure(err));
      });
  };
};

const dealCards = (deck) => {
  let position = 0;
  for (let i = 0; i < deck.length; i++) {
    deck[i].cardNum = i;
    let pile = order[position % 13];
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
        deck[j].cardNum = j;
        gameState.drawStack.push(deck[j]);
      }
    }
    i += drawCount;
    position++;
  }
};

export default getInitState;
