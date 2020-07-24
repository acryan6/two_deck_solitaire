import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/items";
import { useDispatch } from "react-redux";
import { increment } from "../actions";

const Card = ({ card, index, pile }) => {
  const [{ isDragging1 }, hearts] = useDrag({
    item: {
      type: ItemTypes.HEARTS,
      card: card,
      index: index,
    },
    collect: (monitor) => ({
      isDragging1: !!monitor.isDragging(),
    }),
  });

  const [{ isDragging2 }, clubs] = useDrag({
    item: {
      type: ItemTypes.CLUBS,
      card: card,
      index: index,
    },
    collect: (monitor) => ({
      isDragging2: !!monitor.isDragging(),
    }),
  });

  const [{ isDragging3 }, diamonds] = useDrag({
    item: {
      type: ItemTypes.DIAMONDS,
      card: card,
      index: index,
    },
    collect: (monitor) => ({
      isDragging3: !!monitor.isDragging(),
    }),
  });

  const [{ isDragging4 }, spades] = useDrag({
    item: {
      type: ItemTypes.SPADES,
      card: card,
      index: index,
    },
    collect: (monitor) => ({
      isDragging4: !!monitor.isDragging(),
    }),
  });

  const dispatch = useDispatch();

  return (
    <div
      onDoubleClick={() => {
        dispatch(increment(card));
      }}
      // opacity={isDragging ? "0" : "1"}
      ref={() => {
        switch (card.suit) {
          case "HEARTS":
            return hearts;
          case "CLUBS":
            return clubs;
          case "DIAMONDS":
            return diamonds;
          case "SPADES":
            return spades;
        }
      }}
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
