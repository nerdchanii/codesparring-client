import React from 'react';
import PropsTypes from 'prop-types';

function Title(props) {
  const { children } = props;

  return <div className="title">{children}</div>;
}

Title.defaultProps = {
  children: '',
};
Title.propsTypes = {
  children: PropsTypes.string,
};

export default Title;
