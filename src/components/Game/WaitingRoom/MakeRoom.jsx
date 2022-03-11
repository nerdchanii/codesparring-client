import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import env from '../../../env';

function MakeRoom() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target.roomName.value === '') {
      alert('방 이름을 입력해주세요');
      return;
    }
    try {
      const response = await axios(`${env.API_URL}/game/make`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({
          roomTitle: e.target.roomName.value,
        }),
      });
      navigate(`/sparring/${response.data.id}`);
    } catch (Error) {
      switch (Error.response.status) {
        case 400:
          alert('방 이름이 중복되었습니다.');
          break;
        case 500:
        case 404:
        default:
          alert('서버 오류');
          break;
      }
    }
    // post to server make game room and redirect to game room page
  };

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
