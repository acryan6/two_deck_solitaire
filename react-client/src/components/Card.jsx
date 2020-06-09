import React from "react";

const Card = (props) => (
  <div onDoubleClick={props.handleDoubleClick}>
    <img
      src={props.card.image}
      title={`${props.card.value} ${props.card.suit} ${props.card.code}`}
      height={props.name ? "70%" : "120%"}
      width={props.name ? "70%" : "120%"}
      alt={`Image of the ${props.card.value.toLowerCase()} of ${props.card.suit.toLowerCase()} card`}
      name={props.name}
    />
  </div>
);

export default Card;
