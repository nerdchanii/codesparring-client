import React from 'react';

function ListHeader(props) {
  const { children } = props;
  return <div className="header">{children}</div>;
}

export default ListHeader;
