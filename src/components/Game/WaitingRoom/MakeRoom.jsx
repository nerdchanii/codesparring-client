import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emitCreateRoom } from '../../../redux/reducers/room.reducer';

function MakeRoom() {
  const dispatch = useDispatch();
  const roomId = useSelector((state) => state.room?.id);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.roomName.value === '') {
      alert('방 이름을 입력해주세요');
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

export default MakeRoom;
