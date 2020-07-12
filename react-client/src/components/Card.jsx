import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { ItemTypes } from "../utils/items";

const Card = (props) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      value: props.card.value,
      suit: props.card.suit,
      code: props.card.code,
      name: props.name || null,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const dispatch = useDispatch();

  return (
    <div
      onDoubleClick={props.handleDoubleClick}
      opacity={isDragging ? "0.2" : "1"}
      ref={drag}
    >
      <img
        src={props.card.image}
        title={`${props.card.value} ${props.card.suit} ${props.card.code}`}
        height="100%"
        max-width="100%"
        alt={`Image of the ${props.card.value.toLowerCase()} of ${props.card.suit.toLowerCase()} card`}
        name={props.name}
        style={{ zIndex: props.index, position: "absolute" }}
      />
    </div>
  );
};

export default Card;
