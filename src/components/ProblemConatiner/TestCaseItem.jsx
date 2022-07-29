import React from 'react';

function TestCaseItem({ className, children, ...props }) {
  // console.log(children);
  return (
    <span className={className} {...props}>
      {children.split('\n').map((item, idx) => {
        return (
          <span key={idx}>
            {item}
            <br />
          </span>
        );
      })}
    </span>
  );
}

export default TestCaseItem;
