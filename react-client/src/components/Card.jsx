import React from "react";

const Card = ({ card, index }) => (
  <div
    onDoubleClick={() => {
      card.pile = pile;
      dispatch(increment(card));
    }}
    // opacity={isDragging ? '0.2' : '1'}
    // ref={drag}
    key={index}
  >
    <img
      src={card.image}
      title={`${card.value} ${card.suit} ${card.code}`}
      height="100%"
      max-width="100%"
      alt={`Image of the ${card.value.toLowerCase()} of ${card.suit.toLowerCase()} card`}
      name="A"
      style={{ zIndex: index, position: "absolute" }}
    />
  </div>
);

export default Card;
