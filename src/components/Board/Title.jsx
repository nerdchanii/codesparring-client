import React from 'react';

function Title(props) {
  const { children, className } = props;

  return <div className={className}>{children}</div>;
}

export default Title;
