import React from 'react';

function AddButton({ className, buttonClick }) {
  return (
    <div className={className.concat(' AddButtonContainer')}>
      <button className="AddButton" onClick={buttonClick}>
        문제등록
      </button>
    </div>
  );
}

export default AddButton;
