import React from "react";
import Board from './components/Board.jsx';
import Aggregate from "./components/Aggregate.jsx";
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      pile_A: [],
      pile_2: [],
      pile_3: [],
      pile_4: [],
      pile_5: [],
      pile_6: [],
      pile_7: [],
      pile_8: [],
      pile_9: [],
      pile_10: [],
      pile_J: [],
      pile_Q: [],
      pile_K: [],
      drawStack: [],
    };
  }

  componentDidMount() {
    fetch("/api/cards")
      .then((res) => res.json())
      .then((data) => {
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
          pile_10: data.slice(36, 40),
          pile_J: data.slice(40, 44),
          pile_Q: data.slice(44, 48),
          pile_K: data.slice(48, 52),
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      // <DndProvider backend={HTML5Backend}>
      <div>
        <h1>Mini-Moo</h1>
        <h3>A Form of Devil's Solitaire(?)</h3>
        <Aggregate />
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
          pile_10={this.state.pile_10}
          pile_J={this.state.pile_J}
          pile_Q={this.state.pile_Q}
          pile_K={this.state.pile_K}
          drawStack={this.state.drawStack}
        />
      </div>
      // </DndProvider>
    );
  }
}

export default App;