import React from "react";
import { useDrag } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { ItemTypes } from "../utils/items";
import { increment } from "../actions";
import Card from "./Card.jsx";
var hand = null;
var handFromPile = null;

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

  [hand, handFromPile] = useSelector((state) => {
    let handState = state.getIn(["game", "hand"]);
    return handState
      ? [state.getIn(["game", handState]), handState]
      : [handState, handState];
  });

  // const getDiv = (card, index, pile) => {
  //   return (
  //     <div
  //       onDoubleClick={() => {
  //         dispatch(increment(card));
  //       }}
  //       // opacity={isDragging ? "0.2" : "1"}
  //       // ref={drag}
  //       key={index}
  //     >
  //       <img
  //         src={card.image}
  //         title={`${card.value} ${card.suit} ${card.code}`}
  //         height="100%"
  //         max-width="100%"
  //         alt={`Image of the ${card.value.toLowerCase()} of ${card.suit.toLowerCase()} card`}
  //         // name="A"
  //         style={{ zIndex: index, position: "absolute" }}
  //       />
  //     </div>
  //   );
  // };

  return (
    <div className="container">
      <div className="row hand-row">
        {hand
          ? hand.map((card, index) => {
              card.pile = handFromPile;
              return (
                <div className="col-sm hand">
                  <Card card={card} index={index} key={card.code} />
                </div>
              );
            })
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
