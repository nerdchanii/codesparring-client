class GameService {
  constructor({ apis }) {
    this._apis = apis;
  }

  async joinRoom({ id, username }) {
    return this._apis.game.joinRoom({ id, username });
  }

  async leaveRoom({ id, username }) {
    return this._apis.game.leaveRoom({ id, username });
  }

  async createRoom({ title, username }) {
    return this._apis.game.createRoom({ title, username });
  }

  async getRooms() {
    return this._apis.game.getRooms();
  }




}

export default GameService;
