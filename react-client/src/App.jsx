import React from "react";
import Board from "./components/Board.jsx";
import Aggregate from "./components/Aggregate.jsx";
import Card from "./components/Card.jsx";
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
const order = [
  "ACE",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "JACK",
  "QUEEN",
  "KING",
];

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
  }

  componentDidMount() {
    fetch("/api/cards")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          cards: data,
          pile_A: data.slice(0, 3),
          pile_2: data.slice(3, 6),
          pile_3: data.slice(6, 9),
          pile_4: data.slice(9, 12),
          pile_5: data.slice(12, 15),
          pile_6: data.slice(15, 18),
          pile_7: data.slice(18, 21),
          pile_8: data.slice(21, 24),
          pile_9: data.slice(24, 27),
          pile_0: data.slice(27, 30),
          pile_J: data.slice(30, 33),
          pile_Q: data.slice(33, 36),
          pile_K: data.slice(36, 39),
          drawStack: data.slice(39, 52),
        });
      })
      .catch((err) => console.log(err));
  }

  handleHand(e) {
    console.log(e.target);
    let pile = this.state.hand;
    let suit = e.target.title.split(" ")[1].toLowerCase();
    let value = e.target.title.split(" ")[0];
    let code = e.target.title.split(" ")[2];
    console.log(pile, suit, value, code);
    this.state[pile].forEach((card) => {});
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
      // <DndProvider backend={HTML5Backend}>
      <div>
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
      // </DndProvider>
    );
  }
}

export default App;
