import SocketIo from "../socket/socketIo";

export default class SocketService {
  constructor() {
    this.socketIo = new SocketIo();

  }

  emitCreateRoom({ name }) {
    this.socketIo.emitCreateRoom({ name });
  }

  connect() {
    this.socketIo.connect();
  }

  disconnect() {
    this.socketIo.disconnect();
  }

  on = () => {
    this.socketIo.on();
  }

  emitJoin = ({ username, roomId }) => {
    this.socketIo.emitJoin({ username, roomId })
  }

  emitLeave = ({ username, roomId }) => {
    this.socketIo.emitLeave({ username, roomId });
  }

  emitMessage = ({ username, roomId, message }) => {
    this.socketIo.emitMessage({ username, roomId, message });
  }

  emitGetRooms() {
    this.socketIo.emitGetRooms();
  }

  emitGameStart({ username, roomId }) {
    this.socketIo.emitGameStart({ username, roomId });
  }

  emitCodeTest({ roomId, lang, code }) {
    this.socketIo.emitCodeTest({ roomId, lang, code });
  }

  emitCodeSubmit({ roomId, username, lang, code }) {
    this.socketIo.emitCodeSubmit({ roomId, username, lang, code });
  }

  setAuth({ auth }) {
    this.socketIo.setAuth({ auth });
    this.socketIo.on();
  }

  unsetAuth() {
    this.socketIo.unsetAuth();
  }

  setStore({ store }) {
    this.socketIo.setStore({ store });
  }


}