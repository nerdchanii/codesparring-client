import React from 'react';
import PropTypes from 'prop-types';

function ListItem(props) {
  const { children } = props;
  return <li className="item">{children}</li>;
}

ListItem.propsTypes = {
  children: PropTypes.node,
};

ListItem.defaultProps = {
  children: '',
};

export default ListItem;
