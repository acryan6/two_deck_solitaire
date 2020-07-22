import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/items";
import { useDispatch } from "react-redux";
import { increment } from "../actions";

const Card = ({ card, index, pile }) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      card: card,
      index: index,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const dispatch = useDispatch();

  return (
    <div
      onDoubleClick={() => {
        dispatch(increment(card));
      }}
      opacity={isDragging ? "0" : "1"}
      ref={drag}
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
};

export default Card;
