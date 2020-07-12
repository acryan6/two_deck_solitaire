import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card.jsx";
import Drawstack from "./Card_back.png";
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
  pile_K;

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
    ];
  });

  return (
    <div className="container-fluid">
      <div className="row board-row">
        <div className="col-sm card-stack empty-board-pile">
          {pile_A.map((card, index) => (
            <Card
              card={card}
              handleDoubleClick={props.handleDoubleClick}
              name="A"
              index={index}
            />
          ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {pile_2.map((card, index) => (
            <Card
              card={card}
              handleDoubleClick={props.handleDoubleClick}
              name="2"
              index={index}
            />
          ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {pile_3.map((card, index) => (
            <Card
              card={card}
              handleDoubleClick={props.handleDoubleClick}
              name="3"
              index={index}
            />
          ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {pile_4.map((card, index) => (
            <Card
              card={card}
              handleDoubleClick={props.handleDoubleClick}
              name="4"
              index={index}
            />
          ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {pile_5.map((card, index) => (
            <Card
              card={card}
              handleDoubleClick={props.handleDoubleClick}
              name="5"
              index={index}
            />
          ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {pile_6.map((card, index) => (
            <Card
              card={card}
              handleDoubleClick={props.handleDoubleClick}
              name="6"
              index={index}
            />
          ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {pile_7.map((card, index) => (
            <Card
              card={card}
              handleDoubleClick={props.handleDoubleClick}
              name="7"
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="row board-row">
        <div className="col-sm card-stack empty-board-pile">
          {pile_8.map((card, index) => (
            <Card
              card={card}
              handleDoubleClick={props.handleDoubleClick}
              name="8"
              index={index}
            />
          ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {pile_9.map((card, index) => (
            <Card
              card={card}
              handleDoubleClick={props.handleDoubleClick}
              name="9"
              index={index}
            />
          ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {pile_0.map((card, index) => (
            <Card
              card={card}
              handleDoubleClick={props.handleDoubleClick}
              name="0"
              index={index}
            />
          ))}
        </div>
        <div
          className="col-sm card-stack draw-stack-container"
          onDoubleClick={props.handleDrawStack}
        >
          <img src={Drawstack} className="draw-stack" height="26%" />
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {pile_J.map((card, index) => (
            <Card
              card={card}
              handleDoubleClick={props.handleDoubleClick}
              name="J"
              index={index}
            />
          ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {pile_Q.map((card, index) => (
            <Card
              card={card}
              handleDoubleClick={props.handleDoubleClick}
              name="Q"
              index={index}
            />
          ))}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {pile_K.map((card, index) => (
            <Card
              card={card}
              handleDoubleClick={props.handleDoubleClick}
              name="K"
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;
