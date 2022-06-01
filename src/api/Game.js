class Game {
  constructor({ axios }) {
    this._axios = axios;
  }

  async joinRoom({ id, username }) {
    return this._axios.post(`/game/rooms/${id}`, { username });
  }

  async leaveRoom({ id, username }) {
    return this._axios.delete(`/game/rooms/${id}`, { data: { username } });
  }

  async createRoom({ title, username }) {
    return this._axios.post('/game/rooms', { title, username });
  }

  async getRooms() {
    return this._axios.get('/game/rooms');
  }


}
export default Game;
