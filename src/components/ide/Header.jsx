import React from 'react';
import { LANGUAGE_EXTENSION } from '../../config/ide.config';
import './Ide.scss';

function Header({ language }) {
  const extension = LANGUAGE_EXTENSION[language];
  return (
    <div className="Header">
      <div className="FileName">
        <div>
          solution.
          <span>{extension}</span>
        </div>
      </div>
      {/* <div className="Timer">
        <div>소요시간</div>
        <div>00:00:00</div>
      </div> */}
    </div>
  );
}

export default Header;
