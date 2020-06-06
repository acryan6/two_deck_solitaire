import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> List Component </h4>
    There are { props.cards.length } cards.
    { props.cards.map(card => <ListItem card={card}/>)}
  </div>
)

export default List;