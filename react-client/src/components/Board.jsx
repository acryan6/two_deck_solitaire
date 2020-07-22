import React from "react";
import { useSelector, useDispatch } from "react-redux";
import drawStackImg from "./Card_back.png";
import Card from "./Card.jsx";
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

  const dispatch = useDispatch();

  return (
    <div className="container-fluid">
      <div className="row board-row">
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_A"
            ? null
            : pile_A.map((card, index) => {
                card.pile = "pile_A";
                return <Card card={card} index={index} key={card.code} />;
              })}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_2"
            ? null
            : pile_2.map((card, index) => {
                card.pile = "pile_2";
                return <Card card={card} index={index} key={card.code} />;
              })}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_3"
            ? null
            : pile_3.map((card, index) => {
                card.pile = "pile_3";
                return <Card card={card} index={index} key={card.code} />;
              })}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_4"
            ? null
            : pile_4.map((card, index) => {
                card.pile = "pile_4";
                return <Card card={card} index={index} key={card.code} />;
              })}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_5"
            ? null
            : pile_5.map((card, index) => {
                card.pile = "pile_5";
                return <Card card={card} index={index} key={card.code} />;
              })}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_6"
            ? null
            : pile_6.map((card, index) => {
                card.pile = "pile_6";
                return <Card card={card} index={index} key={card.code} />;
              })}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_7"
            ? null
            : pile_7.map((card, index) => {
                card.pile = "pile_7";
                return <Card card={card} index={index} key={card.code} />;
              })}
        </div>
      </div>
      <div className="row board-row">
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_8"
            ? null
            : pile_8.map((card, index) => {
                card.pile = "pile_8";
                return <Card card={card} index={index} key={card.code} />;
              })}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_9"
            ? null
            : pile_9.map((card, index) => {
                card.pile = "pile_9";
                return <Card card={card} index={index} key={card.code} />;
              })}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_0"
            ? null
            : pile_0.map((card, index) => {
                card.pile = "pile_0";
                return <Card card={card} index={index} key={card.code} />;
              })}
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
            : pile_J.map((card, index) => {
                card.pile = "pile_J";
                return <Card card={card} index={index} key={card.code} />;
              })}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_Q"
            ? null
            : pile_Q.map((card, index) => {
                card.pile = "pile_Q";
                return <Card card={card} index={index} key={card.code} />;
              })}
        </div>
        <div className="col-sm card-stack empty-board-pile">
          {hand === "pile_K"
            ? null
            : pile_K.map((card, index) => {
                card.pile = "pile_K";
                return <Card card={card} index={index} key={card.code} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default Board;
