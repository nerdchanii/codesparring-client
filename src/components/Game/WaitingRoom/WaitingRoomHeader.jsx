import React, { useState } from 'react';
import './WaitingRoom.scss';
import MakeRoom from './MakeRoom';
import Title from '../../design/Title';

function WaitingRoomHeader() {
  const [showModal, setShowModal] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  // if (showModal) {
  //   return (
  //     <div className="WaitingRoomHeader">
  //       <div className="staticHeader">
  //         <div className="WaitingRoomHeader-header">방목록</div>
  //         <div className="buttonContainer">
  //           <button className="tertiary" onClick={onClick}>
  //             닫기
  //           </button>
  //         </div>
  //       </div>
  //       <MakeRoom setShowModal={setShowModal} />
  //     </div>
  //   );
  // }
  return (
    <div className="WaitingRoomHeader">
      <div className="staticHeader">
        <Title className="">방목록</Title>
        <div className="buttonContainer">
          <button className="tertiary" onClick={onClick}>
            {showModal ? '닫기' : '방만들기'}
          </button>
        </div>
      </div>
      {showModal && <MakeRoom setShowModal={setShowModal} />}
    </div>
  );
}

export default WaitingRoomHeader;
