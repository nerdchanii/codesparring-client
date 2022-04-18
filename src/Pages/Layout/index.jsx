import React from 'react';
import './layout.scss';

function Layout(props) {
  const { TopLeft, TopRight, BottomLeft, BottomRight } = props;

  return (
    <>
      <div className="Left">
        {TopLeft && <div className="Section">{TopLeft}</div>}
        {BottomLeft && <div className="Section">{BottomLeft}</div>}
      </div>
      <div className="Right">
        {TopRight && <div className="Section">{TopRight}</div>}
        {BottomRight && <div className="Section">{BottomRight}</div>}
      </div>
    </>
  );
}

export default Layout;
