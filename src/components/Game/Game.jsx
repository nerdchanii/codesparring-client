import WaitingRoom from './WaitingRoom/WaitingRoom';
import InGameRoom from './InGameRoom/InGameRoom';
import { Route, Routes } from 'react-router-dom';

const Game = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<WaitingRoom />} />
        <Route path=":param" element={<InGameRoom />} />
      </Routes>
    </>
  );
};

export default Game;
