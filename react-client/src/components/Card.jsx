import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/items";
import { useDispatch } from "react-redux";
import { increment } from "../actions";

const Card = ({ card, index, pile }) => {
  const [{ heartIsDragging }, hearts] = useDrag({
    item: {
      type: ItemTypes.HEARTS,
      card: card,
      index: index,
    },
    collect: (monitor) => ({
      heartIsDragging: !!monitor.isDragging(),
    }),
  });

  const [{ clubIsDragging }, clubs] = useDrag({
    item: {
      type: ItemTypes.CLUBS,
      card: card,
      index: index,
    },
    collect: (monitor) => ({
      clubIsDragging: !!monitor.isDragging(),
    }),
  });

  const [{ diamondIsDragging }, diamonds] = useDrag({
    item: {
      type: ItemTypes.DIAMONDS,
      card: card,
      index: index,
    },
    collect: (monitor) => ({
      diamondIsDragging: !!monitor.isDragging(),
    }),
  });

  const [{ spadeIsDragging }, spades] = useDrag({
    item: {
      type: ItemTypes.SPADES,
      card: card,
      index: index,
    },
    collect: (monitor) => ({
      spadeIsDragging: !!monitor.isDragging(),
    }),
  });

  const dispatch = useDispatch();

  return (
    <div
      onDoubleClick={() => {
        dispatch(increment(card));
      }}
      // opacity={isDragging ? "0" : "1"}
      ref={
        card.suit === "HEARTS"
          ? hearts
          : card.suit === "CLUBS"
          ? clubs
          : card.suit === "DIAMONDS"
          ? diamonds
          : card.suit === "SPADES"
          ? spades
          : null
      }
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
