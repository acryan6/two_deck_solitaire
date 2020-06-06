import React from "react";
import Board from './components/Board.jsx';

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
          pile_A: data.slice(0, 3),
          pile_1: data.slice(3, 6),
          pile_2: data.slice(6, 9),
          pile_3: data.slice(12, 15),
          pile_4: data.slice(15, 18),
          pile_5: data.slice(18, 21),
          pile_6: data.slice(21, 24),
          pile_7: data.slice(24, 27),
          pile_8: data.slice(27, 30),
          pile_9: data.slice(30, 33),
          pile_10: data.slice(33, 36),
          pile_J: data.slice(36, 39),
          pile_Q: data.slice(39, 42),
          pile_K: data.slice(42, 45),
          drawStack: data.slice(45, 52),
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Mini-Moo</h1>
        <h3>A Form of Devil's Solitaire(?)</h3>
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
    );
  }
}

export default App;