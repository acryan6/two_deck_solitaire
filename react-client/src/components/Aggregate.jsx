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
        <div className="row">
          <div className="hearts col-sm emptyPile"></div>
          <div className="clubs col-sm emptyPile"></div>
          <div className="diamonds col-sm emptyPile"></div>
          <div className="spades col-sm emptyPile"></div>
        </div>
      </div>
    )
  }
}

export default Aggregate;
