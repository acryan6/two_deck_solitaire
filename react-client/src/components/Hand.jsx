import React from "react";
import { useDrag } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { ItemTypes } from "../utils/items";
var hand = [];

const Hand = (props) => {
  // const [{ isDragging }, drag] = useDrag({
  //   item: {
  //     type: ItemTypes.CARD,
  //     value: props.card.value,
  //     suit: props.card.suit,
  //     code: props.card.code,
  //     name: props.name || null,
  //   },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // });
  const dispatch = useDispatch();

  hand = useSelector((state) => state.getIn(["game", "hand"]));

  const getDiv = (card, index, pile) => {
    console.log(card);
    return (
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
  };

  return (
    <div className="container">
      <div className="row hand-row">
        {hand
          ? hand.map((card) => (
              <div className="col-sm hand">{getDiv(card)}</div>
            ))
          : null}
      </div>
    </div>
    // <div
    //   onDoubleClick={props.handleDoubleClick}
    //   opacity={isDragging ? "0.2" : "1"}
    //   ref={drag}
    // >
    //   <img
    //     src={props.card.image}
    //     title={`${props.card.value} ${props.card.suit} ${props.card.code}`}
    //     height="100%"
    //     max-width="100%"
    //     alt={`Image of the ${props.card.value.toLowerCase()} of ${props.card.suit.toLowerCase()} card`}
    //     name={props.name}
    //     style={{ zIndex: props.index, position: "absolute" }}
    //   />
    // </div>
  );
};

export default Hand;
