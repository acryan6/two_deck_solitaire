import { order, dealOrder } from "../utils/order.js";

const getInitState = () => {
  fetch("/api/cards")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return dealCards(data);
    })
    .catch((err) => console.log(err));
};

const dealCards = async (deck) => {
  let position = 0;
  for (let i = 0; i < deck.length; i++) {
    let pile = dealOrder[position % 13];
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
        addDraw.push(deck[j]);
      }
    }
    let newDrawStack = this.state.drawStack.concat(addDraw);
    await this.setState({
      [`pile_${pile}`]: [...this.state[`pile_${pile}`], deck[i]],
      drawStack: newDrawStack,
    });
    i += drawCount;
    position++;
  }
};

const gameReducer = (state = getInitState(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default gameReducer;
