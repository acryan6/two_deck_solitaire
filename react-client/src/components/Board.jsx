import React from "react";
import Card from "./Card.jsx";
// import moduleName from "module";

const Board = (props) => (
  <div>
    {/* <AggregatePile /> */}
    There are {props.cards.length} cards.
    {props.cards.map((card) => (
      <Card card={card} />
    ))}
  </div>
);

export default Board;
