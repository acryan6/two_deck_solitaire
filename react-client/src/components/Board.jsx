import React from "react";
import Card from "./Card.jsx";
import CardBack from "./Card_back.png";

const Board = (props) => (
  <div className="container">
    {/* <AggregatePile /> */}
    There are {props.cards.length} cards.
    {props.cards.map((card) => (
      <Card card={card} />
    ))}
    <div className="container">
      <img src={CardBack} />
    </div>
  </div>
);

export default Board;
