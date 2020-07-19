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

  return (
    <div className="container">
      <div className="row">
        <div className="hearts col-sm empty-pile" ref={drop}>
          {hearts.length > 0 ? <Card card={hearts[hearts.length - 1]} /> : null}
        </div>
        <div className="clubs col-sm empty-pile" ref={drop}>
          {clubs.length > 0 ? <Card card={clubs[clubs.length - 1]} /> : null}
        </div>
        <div className="diamonds col-sm empty-pile" ref={drop}>
          {diamonds.length > 0 ? (
            <Card card={diamonds[diamonds.length - 1]} />
          ) : null}
        </div>
        <div className="spades col-sm empty-pile" ref={drop}>
          {spades.length > 0 ? <Card card={spades[spades.length - 1]} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Aggregate;
