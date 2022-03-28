import React from 'react';

function List(props) {
  const { children } = props;
  return <ul className="list">{children}</ul>;
}

export default List;
