import React, { useState } from 'react';
import './WaitingRoom.scss';
import MakeRoom from './MakeRoom';

function WaitingRoomHeader() {
  const [showModal, setShowModal] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="WaitingRoomHeader">
      <div className="staticHeader">
        <div className="WaitingRoomHeader-header">RoomList</div>
        <div className="waitingRoomHeader-buttonContainer ">
          {showModal ? (
            <></>
          ) : (
            <button className="waitingRoomHeader-button" onClick={onClick}>
              방 만들기
            </button>
          )}
        </div>
      </div>
      {showModal ? <MakeRoom setShowModal={setShowModal} /> : <></>}
    </div>
  );
}

export default WaitingRoomHeader;
