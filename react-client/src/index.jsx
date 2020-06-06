import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Board from "./components/Board.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      A: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
      J: [],
      Q: [],
      K: [],
      drawStack: [],
    };
  }

  componentDidMount() {
    fetch("/api/cards")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          cards: data,
          A: data.slice(0, 3),
          1: data.slice(3, 6),
          2: data.slice(6, 9),
          3: data.slice(12, 15),
          4: data.slice(15, 18),
          5: data.slice(18, 21),
          6: data.slice(21, 24),
          7: data.slice(24, 27),
          8: data.slice(27, 30),
          9: data.slice(30, 33),
          10: data.slice(33, 36),
          J: data.slice(36, 39),
          Q: data.slice(39, 42),
          K: data.slice(42, 45),
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
        <Board cards={this.state.cards} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
