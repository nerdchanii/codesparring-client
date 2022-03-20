import React from 'react';
import { useRecoilValue } from 'recoil';
import { langExt } from '../../state/ide';
import './Ide.scss';

function Header() {
  const ext = useRecoilValue(langExt);
  // console.log(ext);

  return (
    <div className="Header">
      <div className="FileName">
        <div>
          solution.
          <span>{ext}</span>
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
