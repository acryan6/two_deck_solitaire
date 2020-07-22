import React from "react";
import { useSelector, useDispatch } from "react-redux";
import drawStackImg from "./Card_back.png";
import Card from "./Card.jsx";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../utils/items";
import { increment, drawStack } from "../actions";
var pile_A,
  pile_2,
  pile_3,
  pile_4,
  pile_5,
  pile_6,
  pile_7,
  pile_8,
  pile_9,
  pile_0,
  pile_J,
  pile_Q,
  pile_K,
  hand,
  dsLength;

const Board = (props) => {
  [
    pile_A,
    pile_2,
    pile_3,
    pile_4,
    pile_5,
    pile_6,
    pile_7,
    pile_8,
    pile_9,
    pile_0,
    pile_J,
    pile_Q,
    pile_K,
    hand,
    dsLength,
  ] = useSelector((state) => {
    let game = state.get("game");
    return [
      game.get("pile_A"),
      game.get("pile_2"),
      game.get("pile_3"),
      game.get("pile_4"),
      game.get("pile_5"),
      game.get("pile_6"),
      game.get("pile_7"),
      game.get("pile_8"),
      game.get("pile_9"),
      game.get("pile_0"),
      game.get("pile_J"),
      game.get("pile_Q"),
      game.get("pile_K"),
      game.get("hand"),
      game.get("drawStack").length,
    ];
  });

  // const [{ isDragging }, drag] = useDrag({
  //   item: {
  //     type: ItemTypes.CARD,
  //     value: props.card.value,
  //     suit: props.card.suit,
  //     code: props.card.code,
  //     name: props.name || null,
  //   },
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // });

  const dispatch = useDispatch();

  // const getDiv = (card, index, pile) => (
  //   <div
  //     onDoubleClick={() => {
  //       card.pile = pile;
  //       dispatch(increment(card));
  //     }}
  //     // opacity={isDragging ? '0.2' : '1'}
  //     // ref={drag}
  //     key={index}
  //   >
  //     <img
  //       src={card.image}
  //       title={`${card.value} ${card.suit} ${card.code}`}
  //       height="100%"
  //       max-width="100%"
  //       alt={`Image of the ${card.value.toLowerCase()} of ${card.suit.toLowerCase()} card`}
  //       name="A"
  //       style={{ zIndex: index, position: "absolute" }}
  //     />
  //   </div>
  // );

  return (
    <div className="container-fluid">
      <div className="row board-row">
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_A"
            ? null
            : pile_A.map((card, index) => (
                <Card card={card} index={index} key={index} />
              ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_2"
            ? null
            : pile_2.map((card, index) => (
                <Card card={card} index={index} key={index} />
              ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_3"
            ? null
            : pile_3.map((card, index) => (
                <Card card={card} index={index} key={index} />
              ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_4"
            ? null
            : pile_4.map((card, index) => (
                <Card card={card} index={index} key={index} />
              ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_5"
            ? null
            : pile_5.map((card, index) => (
                <Card card={card} index={index} key={index} />
              ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_6"
            ? null
            : pile_6.map((card, index) => (
                <Card card={card} index={index} key={index} />
              ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_7"
            ? null
            : pile_7.map((card, index) => (
                <Card card={card} index={index} key={index} />
              ))}
        </div>
      </div>
      <div className="row board-row">
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_8"
            ? null
            : pile_8.map((card, index) => (
                <Card card={card} index={index} key={index} />
              ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_9"
            ? null
            : pile_9.map((card, index) => (
                <Card card={card} index={index} key={index} />
              ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_0"
            ? null
            : pile_0.map((card, index) => (
                <Card card={card} index={index} key={index} />
              ))}
        </div>
        <div
          className="col-sm card-stack draw-stack-container empty-board-pile"
          onDoubleClick={() => dispatch(drawStack())}
        >
          {dsLength === 0 ? null : (
            <img src={drawStackImg} className="draw-stack" height="26%" />
          )}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_J"
            ? null
            : pile_J.map((card, index) => (
                <Card card={card} index={index} key={index} />
              ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_Q"
            ? null
            : pile_Q.map((card, index) => (
                <Card card={card} index={index} key={index} />
              ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_K"
            ? null
            : pile_K.map((card, index) => (
                <Card card={card} index={index} key={index} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
