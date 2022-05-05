class GameService {
  constructor({ apis }) {
    this._apis = apis;
  }

  joinRoom(roomId) {
    return this._apis.game.joinRoom(roomId);
  }

  leaveRoom(roomId) {
    return this._axios.game.leaveRoom(roomId);
  }
  
  makeRoom(){
    return this._axios.game.makeRoom();
  }

  getRooms(){
    return this._axios.game.getRooms();
  }
  



}

export default GameService;
