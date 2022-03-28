import React from 'react';

function ListHeader(props) {
  const { className, columns } = props;
  return (
    <div className={className}>
      {columns.map((idx) => (
        <span
          key={`${className}--Column${idx}`}
          className={className
            .split(' ')
            .map((cls) => `${cls}--column`)
            .join(' ')}
        >
          {idx}
        </span>
      ))}
    </div>
  );
}

export default ListHeader;
