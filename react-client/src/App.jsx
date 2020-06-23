import React from "react";
import Board from "./components/Board.jsx";
import Aggregate from "./components/Aggregate.jsx";
import Card from "./components/Card.jsx";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Promise from "bluebird";
import { order, dealOrder } from "./utils/order.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleDrawStack = this.handleDrawStack.bind(this);
    this.handleHand = this.handleHand.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  componentDidMount() {
    fetch("/api/cards")
      .then((res) => res.json())
      .then((data) => {
        this.dealCards(data);
      })
      .catch((err) => console.log(err));
  }

  async dealCards(deck) {
    let position = 0;
    for (let i = 0; i < deck.length; i++) {
      let pile = dealOrder[position % 13];
      let val = deck[i].code[0];
      let addDraw = [];
      let drawCount = val === pile ? 1 : 0;
      if (val === "A") {
        drawCount += 2;
      } else if (val === "K" || pile === "K" || pile === "0") {
        drawCount++;
      }
      for (let j = i + 1; j < i + 1 + drawCount; j++) {
        if (deck[j]) {
          addDraw.push(deck[j]);
        }
      }
      await this.setState({
        [`pile_${pile}`]: [...this.state[`pile_${pile}`], deck[i]],
        drawStack: this.state.drawStack.concat(addDraw),
      });
      i += drawCount;
      position++;
      console.log(pile, val, drawCount);
    }
  }

  handleHand(e) {
    console.log(e.target);
    let pile = this.state.hand[5];
    let suit = e.target.title.split(" ")[1].toLowerCase();
    let value = e.target.title.split(" ")[0];
    let code = e.target.title.split(" ")[2];
    if (value === order[this.state[suit].length]) {
      this.getAndSetCard(suit, value, pile, code);
    }
  }

  handleDrop(item) {
    console.log(item);
    let pile = item.name || this.state.hand[5];
    let value = item.value;
    let suit = item.suit.toLowerCase();
    console.log(suit);
    if (value === order[this.state[suit].length]) {
      this.getAndSetCard(suit, value, pile, item.code);
    }
  }

  handleDoubleClick(e) {
    console.log(e.target.title);
    let pile = e.target.name;
    let suit = e.target.title.split(" ")[1].toLowerCase();
    let value = e.target.title.split(" ")[0];
    let code = e.target.title.split(" ")[2];
    // if ((this.state[suit].length === 0 && value === 'A') || (this.state[suit].length > 0 && value === order[this.state[suit].length])) {
    if (value === order[this.state[suit].length]) {
      this.getAndSetCard(suit, value, pile, code);
    }
  }

  getAndSetCard(suit, value, pile, code) {
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

  handleDrawStack() {
    console.log(this.state.drawStack);
    let draw = this.state.drawStack[this.state.drawStack.length - 1];
    let val = draw.code[0];
    let newDrawStack = this.state.drawStack.slice(
      0,
      this.state.drawStack.length - 1
    );
    this.setState({
      drawStack: newDrawStack,
      [`pile_${val}`]: [...this.state[`pile_${val}`], draw],
      showHand: true,
      hand: `pile_${val}`,
    });
  }

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className="browser">
          <div className="container top-bar">
            <div className="row">
              <div className="col-sm title-block">
                <h1>Mini-Moo</h1>
                <h3>A Form of Devil's Solitaire(?)</h3>
              </div>
              <div className="col-sm">
                <Aggregate
                  hearts={this.state.hearts}
                  diamonds={this.state.diamonds}
                  clubs={this.state.clubs}
                  spades={this.state.spades}
                  handleDrop={this.handleDrop}
                />
              </div>
            </div>
          </div>
          {this.state.showHand ? (
            <div className="container">
              <div className="row hand-row">
                {this.state[this.state.hand].map((card) => (
                  <div className="col-sm hand">
                    <Card card={card} handleDoubleClick={this.handleHand} />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          <Board
            pile_A={this.state.pile_A}
            pile_2={this.state.pile_2}
            pile_3={this.state.pile_3}
            pile_4={this.state.pile_4}
            pile_5={this.state.pile_5}
            pile_6={this.state.pile_6}
            pile_7={this.state.pile_7}
            pile_8={this.state.pile_8}
            pile_9={this.state.pile_9}
            pile_0={this.state.pile_0}
            pile_J={this.state.pile_J}
            pile_Q={this.state.pile_Q}
            pile_K={this.state.pile_K}
            drawStack={this.state.drawStack}
            handleDoubleClick={this.handleDoubleClick}
            handleDrawStack={this.handleDrawStack}
            order={this.state.order}
          />
        </div>
      </DndProvider>
    );
  }
}

export default App;
