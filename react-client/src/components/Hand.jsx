import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ItemTypes } from "../utils/items";
import { increment } from "../actions";
import Card from "./Card.jsx";
var hand = null;
var handFromPile = null;

const Hand = (props) => {
  const dispatch = useDispatch();

  [hand, handFromPile] = useSelector((state) => {
    let handState = state.getIn(["game", "hand"]);
    return handState
      ? [state.getIn(["game", handState]), handState]
      : [handState, handState];
  });

  return (
    <div className="container">
      <div className="row hand-row">
        {hand
          ? hand.map((card, index) => {
              card.pile = handFromPile;
              return (
                <div className="col-sm hand">
                  <Card
                    card={card}
                    index={index}
                    height="75%"
                    key={card.code}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Hand;
