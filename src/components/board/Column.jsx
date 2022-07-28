import React from 'react';
import propsTypes from 'prop-types';

function Column({ children, flex }) {
  if (!flex) {
    return <span className="column">{children}</span>;
  }
  return <span className={`column flex-${flex}`}>{children}</span>;
}

Column.propsTypes = {
  item: propsTypes.string,
};
export default Column;
