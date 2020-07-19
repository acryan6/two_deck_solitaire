import React from "react";
import { useDrop } from "react-dnd";
import { useSelector } from "react-redux";
import { ItemTypes } from "../utils/items";
var hearts, diamonds, spades, clubs;

const Aggregate = (props) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => props.handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  [hearts, diamonds, spades, clubs] = useSelector((state) => {
    let game = state.get("game");
    return [
      game.get("hearts"),
      game.get("diamonds"),
      game.get("spades"),
      game.get("clubs"),
    ];
  });

  const getDiv = (card, index, pile) => (
    <div
      // onDoubleClick={() => {
      //   card.pile = pile;
      //   dispatch(increment(card));
      // }}
      // opacity={isDragging ? "0.2" : "1"}
      // ref={drag}
      key={index}
    >
      <img
        src={card.image}
        title={`${card.value} ${card.suit} ${card.code}`}
        height="100%"
        max-width="100%"
        alt={`Image of the ${card.value.toLowerCase()} of ${card.suit.toLowerCase()} card`}
        // name="A"
        style={{ zIndex: index, position: "absolute" }}
      />
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="hearts col-sm empty-pile" ref={drop}>
          {hearts.length > 0 ? getDiv(hearts[hearts.length - 1]) : null}
        </div>
        <div className="clubs col-sm empty-pile" ref={drop}>
          {clubs.length > 0 ? getDiv(hearts[hearts.length - 1]) : null}
        </div>
        <div className="diamonds col-sm empty-pile" ref={drop}>
          {diamonds.length > 0 ? getDiv(hearts[hearts.length - 1]) : null}
        </div>
        <div className="spades col-sm empty-pile" ref={drop}>
          {spades.length > 0 ? getDiv(hearts[hearts.length - 1]) : null}
        </div>
      </div>
    </div>
  );
};

export default Aggregate;
