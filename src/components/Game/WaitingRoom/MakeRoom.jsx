import React from 'react';

function MakeRoom() {
  return (
    <div className="MakeRoom">
      <h3>Make Room</h3>
      <form id="MakeRoom-Form">
        <div>Name:</div>
        <input id="MakeRomm-Form" type="text" name="roomName" />

        <button type="submit">create</button>
      </form>
    </div>
  );
}

export default MakeRoom;
