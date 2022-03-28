import React from 'react';
import { Link } from 'react-router-dom';
import PropsTypes from 'prop-types';

function LinkedListItem(props) {
  const { link, children } = props;
  return (
    <li className="list-item">
      <Link to={link}>{children}</Link>
    </li>
  );
}

LinkedListItem.PropsTypes = {
  link: PropsTypes.string,
  children: PropsTypes.node,
};

export default LinkedListItem;
