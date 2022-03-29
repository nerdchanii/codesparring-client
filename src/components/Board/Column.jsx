import React from 'react';
import propsTypes from 'prop-types';

function Column({ children }) {
  return <span className="column">{children}</span>;
}

Column.propsTypes = {
  item: propsTypes.string,
};
export default Column;
