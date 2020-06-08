import React from "react";

const Card = (props) => (
  <div onDoubleClick={props.handleDoubleClick}>
    <img
      src={props.card.image}
      title={`${props.card.value} ${props.card.suit} ${props.card.code}`}
      width="70%"
      height="70%"
      alt={`Image of the ${props.card.value.toLowerCase()} of ${props.card.suit.toLowerCase()} card`}
      name={props.name}
    />
  </div>
);

export default Card;
