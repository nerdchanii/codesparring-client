import React from 'react';
import './WaitingRoom.scss';
import { Link } from 'react-router-dom';
import Column from '../../board/Column';

function RoomListItem(props) {
  const { roomInfo } = props;
  const { id, name, users, roomNumber } = roomInfo;

  return (
    <li style={{ cursor: 'pointer' }} className="RoomListItem">
      <Link to={`/sparring/${id}`} className="button ItemLinkWrapper outline">
        <p className="RoomNumber">{roomNumber}</p>
        <p className="Roomname">{name}</p>
        <p className="inRoom">{users.length}</p>
      </Link>
    </li>
  );
}

function RoomList({ rooms }) {
  if (rooms) {
    return (
      <div className="RoomList">
        <div className="ListHeader">
          <Column flex={1}>방번호</Column>
          <Column flex={3}>이름</Column>
          <Column flex={1}>참여인원</Column>
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
