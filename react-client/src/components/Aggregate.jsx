import React from "react";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../actions";
import { ItemTypes } from "../utils/items";
var hearts, diamonds, spades, clubs;

const Aggregate = (props) => {
  const dispatch = useDispatch();

  const [{ isOverHearts }, heartsDrop] = useDrop({
    accept: ItemTypes.HEARTS,
    drop: (item, monitor) => dispatch(increment(item.card)),
    collect: (monitor) => ({
      isOverHearts: !!monitor.isOver(),
    }),
  });

  const [{ isOverClubs }, clubsDrop] = useDrop({
    accept: ItemTypes.CLUBS,
    drop: (item, monitor) => dispatch(increment(item.card)),
    collect: (monitor) => ({
      isOverClubs: !!monitor.isOver(),
    }),
  });

  const [{ isOverDiamonds }, diamondsDrop] = useDrop({
    accept: ItemTypes.DIAMONDS,
    drop: (item, monitor) => dispatch(increment(item.card)),
    collect: (monitor) => ({
      isOverDiamonds: !!monitor.isOver(),
    }),
  });

  const [{ isOverSpades }, spadesDrop] = useDrop({
    accept: ItemTypes.SPADES,
    drop: (item, monitor) => dispatch(increment(item.card)),
    collect: (monitor) => ({
      isOverSpades: !!monitor.isOver(),
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

  isOverHearts ? console.log("OVER") : console.log("QUE");

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
        <div
          className="hearts col-sm empty-pile"
          ref={heartsDrop}
          style={
            isOverHearts
              ? { borderStyle: "solid", borderColor: "yellow" }
              : null
          }
        >
          {hearts.length > 0 ? getDiv(hearts[hearts.length - 1]) : null}
        </div>
        <div
          className="clubs col-sm empty-pile"
          ref={clubsDrop}
          style={
            isOverClubs ? { borderStyle: "solid", borderColor: "yellow" } : null
          }
        >
          {clubs.length > 0 ? getDiv(clubs[clubs.length - 1]) : null}
        </div>
        <div
          className="diamonds col-sm empty-pile"
          ref={diamondsDrop}
          style={
            isOverDiamonds
              ? { borderStyle: "solid", borderColor: "yellow" }
              : null
          }
        >
          {diamonds.length > 0 ? getDiv(diamonds[diamonds.length - 1]) : null}
        </div>
        <div
          className="spades col-sm empty-pile"
          ref={spadesDrop}
          style={
            isOverSpades
              ? { borderStyle: "solid", borderColor: "yellow" }
              : null
          }
        >
          {spades.length > 0 ? getDiv(spades[spades.length - 1]) : null}
        </div>
      </div>
    </div>
  );
};

export default Aggregate;
