import React from 'react';
import './WaitingRoom.scss';
import { Link } from 'react-router-dom';

function RoomListItem(props) {
  const { roomInfo } = props;
  const { roomId, title, inRoom } = roomInfo;

  return (
    <li style={{ cursor: 'pointer' }} className="RoomListItem">
      <Link to={`/sparring/${roomId}`} className="ItemLinkWrapper">
        <div className="RoomNumber">{roomId}</div>
        <div className="RoomTitle">{title}</div>
        <div className="inRoom">{inRoom}</div>
      </Link>
    </li>
  );
}

function RoomList({ gameRooms }) {
  console.log(gameRooms);
  if (gameRooms) {
    return (
      <div className="RoomList">
        <div className="ListHeader">
          <div>RoomNumber</div>
          <div>title</div>
          <div>inRoom</div>
        </div>
        <ul className="RoomListItemContainer">
          {gameRooms.map((room) => (
            <RoomListItem key={room.id} roomInfo={room} />
          ))}
        </ul>
      </div>
    );
  }
}

export default RoomList;
