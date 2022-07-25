import React from 'react';
import './WaitingRoom.scss';
import { Link } from 'react-router-dom';

function RoomListItem(props) {
  const { roomInfo } = props;
  const { id, name, users, roomNumber } = roomInfo;

  return (
    <li style={{ cursor: 'pointer' }} className="RoomListItem">
      <Link to={`/sparring/${id}`} className="ItemLinkWrapper">
        <div className="RoomNumber">{roomNumber}</div>
        <div className="Roomname">{name}</div>
        <div className="inRoom">{users.length}</div>
      </Link>
    </li>
  );
}

function RoomList({ rooms }) {
  if (rooms) {
    return (
      <div className="RoomList">
        <div className="ListHeader">
          <div>RoomNumber</div>
          <div>name</div>
          <div>inRoom</div>
        </div>
        <ul className="RoomListItemContainer">
          {rooms.map((room) => (
            <RoomListItem key={room.id} roomInfo={room} />
          ))}
        </ul>
      </div>
    );
  }
}

export default RoomList;
