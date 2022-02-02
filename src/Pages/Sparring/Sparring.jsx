import React from 'react';
import IdeContainer from '../../components/ide/IdeContainer';
import Game from '../../components/Game/Game';
import './Sparring.scss';

function Sparring() {
  return (
    <div className="Sparring">
      <div className="left">
        <Game />
      </div>
      <div className="right">
        <IdeContainer />
      </div>
    </div>
  );
}
export default Sparring;
