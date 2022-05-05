import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem/ListItem';

function List(props) {
  const { children } = props;
  return <ul className="list">{children}</ul>;
}

List.propsTypes = {
  children: PropTypes.element,
};

List.deafultProps = {
  children: <ListItem />,
};

export default List;
