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
          <div className="hearts emptyPile col-sm"></div>
          <div className="clubs emptyPile col-sm"></div>
          <div className="diamonds emptyPile col-sm"></div>
          <div className="spades emptyPile col-sm"></div>
        </div>
      </div>
    )
  }
}

export default Aggregate;
