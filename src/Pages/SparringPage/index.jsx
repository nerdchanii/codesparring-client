import React from 'react';
import IdeContainer from '../../components/ide/IdeContainer';
import Game from '../../components/Game/Game';
import './Sparring.scss';
import Layout from '../Layout';

function Sparring() {
  return (
    <div className="Sparring">
      <Layout TopLeft={<Game />} TopRight={<IdeContainer />} />
    </div>
  );
}
export default Sparring;
