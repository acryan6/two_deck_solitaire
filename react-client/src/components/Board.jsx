import React from "react";
import Card from "./Card.jsx";
import Drawstack from "./Card_back.png";

const Board = (props) => (
  <div className="container-fluid">
    <div className="row board-row">
      <div className="col-sm cardStack">
        {props.pile_A.map((card, index) => (
          <Card
            card={card}
            handleDoubleClick={props.handleDoubleClick}
            name="A"
            index={index}
          />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_2.map((card, index) => (
          <Card
            card={card}
            handleDoubleClick={props.handleDoubleClick}
            name="2"
            index={index}
          />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_3.map((card, index) => (
          <Card
            card={card}
            handleDoubleClick={props.handleDoubleClick}
            name="3"
            index={index}
          />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_4.map((card, index) => (
          <Card
            card={card}
            handleDoubleClick={props.handleDoubleClick}
            name="4"
            index={index}
          />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_5.map((card, index) => (
          <Card
            card={card}
            handleDoubleClick={props.handleDoubleClick}
            name="5"
            index={index}
          />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_6.map((card, index) => (
          <Card
            card={card}
            handleDoubleClick={props.handleDoubleClick}
            name="6"
            index={index}
          />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_7.map((card, index) => (
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
      <div className="col-sm cardStack">
        {props.pile_8.map((card, index) => (
          <Card
            card={card}
            handleDoubleClick={props.handleDoubleClick}
            name="8"
            index={index}
          />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_9.map((card, index) => (
          <Card
            card={card}
            handleDoubleClick={props.handleDoubleClick}
            name="9"
            index={index}
          />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_0.map((card, index) => (
          <Card
            card={card}
            handleDoubleClick={props.handleDoubleClick}
            name="0"
            index={index}
          />
        ))}
      </div>
      <div className="col-sm cardStack" onDoubleClick={props.handleDrawStack}>
        <img src={Drawstack} className="drawStack" height="26%" />
      </div>
      <div className="col-sm cardStack">
        {props.pile_J.map((card, index) => (
          <Card
            card={card}
            handleDoubleClick={props.handleDoubleClick}
            name="J"
            index={index}
          />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_Q.map((card, index) => (
          <Card
            card={card}
            handleDoubleClick={props.handleDoubleClick}
            name="Q"
            index={index}
          />
        ))}
      </div>
      <div className="col-sm cardStack">
        {props.pile_K.map((card, index) => (
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

export default Board;
// {/* {props.cards.map((card) => (
//       <Card card={card} />
//     ))}
//     <div className="container-sm">
//       <img src={Drawstack} />
//     </div>
//   </div> */}
