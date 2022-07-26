import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emitCreateRoom } from '../../../redux/reducers/room.reducer';
import MESSAGE from '../../../config/message';

function MakeRoom() {
  const dispatch = useDispatch();
  const roomId = useSelector((state) => state.room?.id);
  const navigate = useNavigate();
  const { ROOM_NAME_NULL } = MESSAGE;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.roomName.value === '') {
      alert(ROOM_NAME_NULL);
      return;
    }
    dispatch(emitCreateRoom({ name: e.target.roomName.value }));
  };

  useEffect(() => {
    if (roomId) {
      navigate(`/sparring/${roomId}`);
    }
  }, [roomId]);

  return (
    <div className="MakeRoom">
      <h3>Make Room</h3>
      <form id="MakeRoom-Form" onSubmit={handleSubmit}>
        <div>Name:</div>
        <input id="MakeRomm-Form" type="text" name="roomName" />
        <button type="submit">create</button>
      </form>
    </div>
  );
}

export default memo(MakeRoom);
