import React from 'react';

function ListItem(props) {
  const { children } = props;
  return <li className="item">{children}</li>;
}

export default ListItem;
