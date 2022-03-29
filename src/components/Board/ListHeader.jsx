import React from 'react';
import PropsTypes from 'prop-types';
import Column from './Column';

function ListHeader(props) {
  const { children } = props;
  return <div className="header">{children}</div>;
}

ListHeader.defaultProps = {
  children: <Column />,
};
ListHeader.propsTypes = {
  children: PropsTypes.node,
};
export default ListHeader;
