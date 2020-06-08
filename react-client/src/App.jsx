import React from "react";
import Board from './components/Board.jsx';
import Aggregate from "./components/Aggregate.jsx";
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
const order = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"];

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
    let pile = e.target.name;
    let suit = e.target.title[1];
    let value = e.target.title[0];
    console.log(pile, suit, value, this.state.hearts.length)
    if (suit === 'H') {
      if (this.state.hearts.length === 0 && value === 'A') {
        let statePile = this.state[`pile_${pile}`]
        for (let i = 0; i < statePile.length; i++) {
          if (statePile[i].code[0] === value) {
            const card = statePile.splice(i, 1);
            this.setState({
              hearts: card
            });
          }
        }
      } else if (this.state.hearts.length > 0 && value === order[this.state.hearts.length]) {
        let statePile = this.state[`pile_${pile}`]
        for (let i = 0; i < statePile.length; i++) {
          if (statePile[i].code[0] === value) {
            const card = statePile.splice(i, 1);
            this.setState({
              hearts: [...this.state.hearts, card]
            });
          }
        }
      }
    } else if (suit === 'C') {

    } else if (suit === 'D') {

    } else if (suit === 'S') {

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
              <Aggregate />
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