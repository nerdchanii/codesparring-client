import React from 'react';

function ListHeader({ className, children, ...props }) {
  return (
    <div className="list--header" {...props}>
      {children}
    </div>
  );
}

export default ListHeader;
