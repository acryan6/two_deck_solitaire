import React from "react";
import Board from './components/Board.jsx';
import Aggregate from "./components/Aggregate.jsx";
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
const order = ["ACE", "2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING"];

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
      // order: ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]
    };
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
  }

  componentDidMount() {
    fetch("/api/cards")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({
          cards: data,
          pile_A: data.slice(0, 4),
          pile_2: data.slice(4, 8),
          pile_3: data.slice(8, 12),
          pile_4: data.slice(12, 16),
          pile_5: data.slice(16, 20),
          pile_6: data.slice(20, 24),
          pile_7: data.slice(24, 28),
          pile_8: data.slice(28, 32),
          pile_9: data.slice(32, 36),
          pile_0: data.slice(36, 40),
          pile_J: data.slice(40, 44),
          pile_Q: data.slice(44, 48),
          pile_K: data.slice(48, 52),
        });
      })
      .catch((err) => console.log(err));
  }

  handleDoubleClick(e) {
    console.log(e.target.title)
    let pile = e.target.name;
    let suit = e.target.title.split(' ')[1].toLowerCase();
    let value = e.target.title.split(' ')[0];
    let code = e.target.title.split(' ')[2];
    // if ((this.state[suit].length === 0 && value === 'A') || (this.state[suit].length > 0 && value === order[this.state[suit].length])) {
    if (value === order[this.state[suit].length]) {
      this.getAndSetCard(suit, value, pile, code);
    }
  }

  getAndSetCard(suit, value, pile, code) {
    let statePile = this.state[`pile_${pile}`]
    for (let i = 0; i < statePile.length; i++) {
      if (statePile[i].code === code) {
        const card = statePile.splice(i, 1)[0];
        card.name = "aggregate-pile";
        console.log(card)
        this.setState({
          [suit]: [...this.state[suit], card]
        }, () => console.log(this.state[suit][0].name));
      }
    }
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
          order={this.state.order}
        />
      </div>
      // </DndProvider>
    );
  }
}

export default App;