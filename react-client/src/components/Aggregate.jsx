import React from "react";
import Card from "./Card.jsx";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../../utils/items";

const Aggregate = (props) => {
  const [{ addedProps }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => props.handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div className="container">
      <div className="row">
        <div className="hearts col-sm empty-pile" ref={drop}>
          {props.hearts.length > 0 ? (
            <Card card={props.hearts[props.hearts.length - 1]} />
          ) : null}
        </div>
        <div className="clubs col-sm empty-pile" ref={drop}>
          {props.clubs.length > 0 ? (
            <Card card={props.clubs[props.clubs.length - 1]} />
          ) : null}
        </div>
        <div className="diamonds col-sm empty-pile" ref={drop}>
          {props.diamonds.length > 0 ? (
            <Card card={props.diamonds[props.diamonds.length - 1]} />
          ) : null}
        </div>
        <div className="spades col-sm empty-pile" ref={drop}>
          {props.spades.length > 0 ? (
            <Card card={props.spades[props.spades.length - 1]} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Aggregate;
