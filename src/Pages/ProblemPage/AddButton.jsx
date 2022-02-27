import React from 'react';

function AddButton({ buttonClick }) {
  return (
    <div className="AddButtonContainer">
      <button className="AddButton" onClick={buttonClick}>
        문제 등록하기
      </button>
    </div>
  );
}

export default AddButton;
