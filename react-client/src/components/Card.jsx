import React from "react";

const Card = (props) => (
  <div className="container-sm">
    <img src={props.card.image} />
  </div>
);

export default Card;
