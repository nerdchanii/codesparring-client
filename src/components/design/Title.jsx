import React from 'react';
import './design.scss';

function Title({ children, className, ...props }) {
  const classNames = `title ${className || ''}`;
  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  );
}

export default Title;
