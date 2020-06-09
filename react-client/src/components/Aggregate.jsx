import React from 'react';
import Card from './Card.jsx';

const Aggregate = (props) => (
  (
    <div className="container">
      <div className="row">
        <div className="hearts col-sm empty-pile">
          {
            props.hearts.length > 0
              ? <Card card={props.hearts[props.hearts.length - 1]} />
              : null
          }
        </div>
        <div className="clubs col-sm empty-pile">
          {
            props.clubs.length > 0
              ? <Card card={props.clubs[props.clubs.length - 1]} />
              : null
          }
        </div>
        <div className="diamonds col-sm empty-pile">
          {
            props.diamonds.length > 0
              ? <Card card={props.diamonds[props.diamonds.length - 1]} />
              : null
          }
        </div>
        <div className="spades col-sm empty-pile">
          {
            props.spades.length > 0
              ? <Card card={props.spades[props.spades.length - 1]} />
              : null
          }
        </div>
      </div>
    </div>
  )
)

export default Aggregate;
