import React, { Component } from 'react';

class Aggregate extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="container">
        <div className="hearts emptyPile"></div>
        <div className="clubs emptyPile"></div>
        <div className="diamonds emptyPile"></div>
        <div className="spades emptyPile"></div>
      </div>
    )
  }
}

export default Aggregate;
