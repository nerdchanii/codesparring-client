import React from 'react';

function List(props) {
  const { className, children } = props;
  return <ul className={className}>{children}</ul>;
}

export default List;
