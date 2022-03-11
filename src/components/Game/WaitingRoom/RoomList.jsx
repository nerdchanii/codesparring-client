import React from 'react';
import './WaitingRoom.scss';
import { Link } from 'react-router-dom';

function RoomListItem(props) {
  const { RoomId, title, inRoom } = props;

  return (
    <li style={{ cursor: 'pointer' }} className="RoomListItem">
      <Link to={`/sparring/${RoomId}`} className="ItemLinkWrapper">
        <div className="RoomNumber">{RoomId}</div>
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
            <RoomListItem
              key={room.id}
              RoomId={room.id}
              title={room.roomTitle}
              inRoom={room.users}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default RoomList;
