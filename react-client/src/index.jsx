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
      .then((data) => this.setState({ cards: data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Cards List</h1>
        <Board cards={this.state.cards} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
