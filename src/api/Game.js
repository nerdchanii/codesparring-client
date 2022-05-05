class Game {
  constructor({ axios }) {
    this._axios = axios;
  }

  joinRoom(roomId) {
    return this._axios.post(`/game/rooms/${roomId}`);
  }
  
  leaveRoom(roomId) {
    return this._axios.delete(`/game/rooms/${roomId}`);
  }
  
  makeRoom(){
    return this._axios.post('/game/rooms');
  }

  getRooms(){
    return this._axios.get('/game/rooms');
  }
  
  
}
export default Game;
