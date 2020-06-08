import React from "react";
import Card from "./Card.jsx";
import Drawstack from "./Card_back.png";

const Board = (props) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm cardStack">
        {props.pile_A.map((card) => (
          <Card card={card} handleDoubleClick={props.handleDoubleClick} name="A" />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_2.map((card) => (
          <Card card={card} handleDoubleClick={props.handleDoubleClick} name="2" />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_3.map((card) => (
          <Card card={card} handleDoubleClick={props.handleDoubleClick} name="3" />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_4.map((card) => (
          <Card card={card} handleDoubleClick={props.handleDoubleClick} name="4" />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_5.map((card) => (
          <Card card={card} handleDoubleClick={props.handleDoubleClick} name="5" />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_6.map((card) => (
          <Card card={card} handleDoubleClick={props.handleDoubleClick} name="6" />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_7.map((card) => (
          <Card card={card} handleDoubleClick={props.handleDoubleClick} name="7" />
        ))}
      </div>
    </div>
    <div className="row">
      <div className="col-sm cardStack">
        {props.pile_8.map((card) => (
          <Card card={card} handleDoubleClick={props.handleDoubleClick} name="8" />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_9.map((card) => (
          <Card card={card} handleDoubleClick={props.handleDoubleClick} name="9" />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_0.map((card) => (
          <Card card={card} handleDoubleClick={props.handleDoubleClick} name="0" />
        ))}
      </div>
      <div className="col-sm cardStack">
        <img src={Drawstack} className="drawStack" height="26%" />
      </div>
      <div className="col-sm cardStack">
        {props.pile_J.map((card) => (
          <Card card={card} handleDoubleClick={props.handleDoubleClick} name="J" />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_Q.map((card) => (
          <Card card={card} handleDoubleClick={props.handleDoubleClick} name="Q" />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_K.map((card) => (
          <Card card={card} handleDoubleClick={props.handleDoubleClick} name="K" />
        ))}
      </div>
    </div>
  </div>
);

export default Board;
// {/* {props.cards.map((card) => (
//       <Card card={card} />
//     ))}
//     <div className="container-sm">
//       <img src={Drawstack} />
//     </div>
//   </div> */}