import './WaitingRoom.scss';
import { Link } from 'react-router-dom';

const RoomListItem = (props) => {
  const { RoomId, title, inRoom, level } = props;

  return (
    <li style={{ cursor: 'pointer' }} className="RoomListItem">
      <Link to={`/sparring/${RoomId}`} className="ItemLinkWrapper">
        <div className="RoomNumber">{RoomId}</div>
        <div className="RoomTitle">{title}</div>
        <div className="level">{level}</div>
        <div className="inRoom">{inRoom}/4</div>
      </Link>
    </li>
  );
};
const RoomList = ({ gameRooms }) => {
  if (gameRooms) {
    return (
      <div className="RoomList">
        <div className="ListHeader">
          <div>RoomNumber</div>
          <div>title</div>
          <div>level</div>
          <div>inRoom</div>
        </div>
        <ul className="RoomListItemContainer">
          {gameRooms.map((room) => (
            <RoomListItem
              key={room.RoomId}
              RoomId={room.RoomId}
              title={room.RoomTitle}
              level={room.level}
              inRoom={room.inRoom}
            />
          ))}
        </ul>
      </div>
    );
  }
};

export default RoomList;
