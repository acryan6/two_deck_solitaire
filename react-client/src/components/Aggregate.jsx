import React from "react";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../actions";
import { ItemTypes } from "../utils/items";
var hearts, diamonds, spades, clubs;

const Aggregate = (props) => {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.HEARTS,
    drop: (item, monitor) => dispatch(increment(item.card)),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [{ isOver2 }, drop2] = useDrop({
    accept: ItemTypes.CLUBS,
    drop: (item, monitor) => dispatch(increment(item.card)),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [{ isOver3 }, drop3] = useDrop({
    accept: ItemTypes.DIAMONDS,
    drop: (item, monitor) => dispatch(increment(item.card)),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [{ isOver4 }, drop4] = useDrop({
    accept: ItemTypes.SPADES,
    drop: (item, monitor) => dispatch(increment(item.card)),
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
        <div className="clubs col-sm empty-pile" ref={drop2}>
          {clubs.length > 0 ? getDiv(clubs[clubs.length - 1]) : null}
        </div>
        <div className="diamonds col-sm empty-pile" ref={drop3}>
          {diamonds.length > 0 ? getDiv(diamonds[diamonds.length - 1]) : null}
        </div>
        <div className="spades col-sm empty-pile" ref={drop4}>
          {spades.length > 0 ? getDiv(spades[spades.length - 1]) : null}
        </div>
      </div>
    </div>
  );
};

export default Aggregate;
