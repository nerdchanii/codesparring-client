import React from 'react';

function Title(props) {
  const { children } = props;

  return <div className="title">{children}</div>;
}

export default Title;
