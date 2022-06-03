import { io } from 'socket.io-client';
import { actions, ACTION } from '../redux/reducers/room.reducer';
import {
  actions as roomsActions,
  ACTION as ROOMS_ACTION
} from '../redux/reducers/rooms.reducer';
import {
  actions as problemActions,
  ACTION as PROBLEM_ACTION
} from '../redux/reducers/problem.reducer';


const SOCKET_EVENT = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  MESSAGE: 'message',
  JOIN: 'join',
  LEAVE: 'leave',
  GAME_START: 'gamestart',
  CREATE_ROOM: 'createRoom',
  GET_ROOMS: 'getRooms',
}


class SocketIo {
  constructor() {
    /**
     * @type {SOCKET_EVENT} event;
     */
    this.event = SOCKET_EVENT;
    this._socket = io();
  }

  on = () => {
    this._socket.on(this.event.CONNECT, this.onConnect);
    this._socket.on(this.event.JOIN, this.onJoin);
    this._socket.on(this.event.LEAVE, this.onLeave);
    this._socket.on(this.event.MESSAGE, this.onMessage);
    this._socket.on(this.event.CREATE_ROOM, this.onCreateRoom);
    this._socket.on(this.event.GET_ROOMS, this.onGetRooms);
    this._socket.on(this.event.GAME_START, this.onGameStart);
  }

  // listen to socket event
  onConnect = () => {
    console.log('Event on:', this.event.CONNECT);
  }

  onMessage = (args) => {
    console.log('Event on:', this.event.MESSAGE);
    console.log(args)
    this.store.dispatch(actions[ACTION.ON.MESSAGE](args));
  }

  emitMessage = ({ username, roomId, message }) => {
    console.log(username, roomId, message)
    console.log('Event emit:', this.event.MESSAGE)
    this._socket.emit(this.event.MESSAGE, { username, roomId, message });
  }

  onJoin = ({ room }) => {
    console.log('Event on:', this.event.JOIN, room);
    this.store.dispatch(actions[ACTION.ON.JOIN]({ room }));
    if (room.status !== 'playing') {
      this.store.dispatch(problemActions[PROBLEM_ACTION.INIT_PROBLEM]());
    }
  }

  emitJoin = ({ username, roomId }) => {
    console.log('Event emit:', this.event.JOIN)
    this._socket.emit(SOCKET_EVENT.JOIN, ({ username, roomId }));
  }

  onLeave = ({ username }) => {
    console.log('Event on:', this.event.LEAVE)
    this.store.dispatch(actions[ACTION.ON.LEAVE]({ username }));
  }

  emitLeave = ({ roomId, username }) => {
    console.log('Event emit:', this.event.LEAVE)
    this._socket.emit(SOCKET_EVENT.LEAVE, { roomId, username });
  }

  onCreateRoom = ({ room }) => {
    console.log('Event on:', this.event.CREATE_ROOM);
    this.store.dispatch(actions[ACTION.ON.CREATE_ROOM]({ room }));
  }

  emitCreateRoom = ({ name }) => {
    console.log('Event emit:', this.event.CREATE_ROOM)
    this._socket.emit(SOCKET_EVENT.CREATE_ROOM, { name });
  }

  onGetRooms = ({ rooms }) => {
    console.log(this.event.GET_ROOMS, rooms);
    console.log('Event on:', this.event.GET_ROOMS, rooms);
    this.store.dispatch(roomsActions[ROOMS_ACTION.GET_ROOMS]({ rooms }));
  }

  emitGetRooms = () => {
    console.log(this._socket);
    this._socket.emit(SOCKET_EVENT.GET_ROOMS);
  }

  onGameStart = ({ problem }) => {
    console.log('Event on:', this.event.GAME_START);
    console.log('problem', problem);
    this.store.dispatch(actions[ACTION.ON.GAME_START]());
    this.store.dispatch(problemActions[PROBLEM_ACTION.SET_PROBLEM]({ problem }));
  }

  emitGameStart = ({ roomId }) => {
    console.log('Event emit:', this.event.GAME_START)
    this._socket.emit(SOCKET_EVENT.GAME_START, { roomId });
  }

  // set Auth Token
  setAuth = ({ auth }) => {
    console.log(auth);
    console.log('auth setting!')
    console.log({ auth })
    this._socket = io({
      auth: {
        username: auth.username,
        token: `Bearer ${auth.token}`
      }
    })
  }

  unsetAuth = () => {
    this._socket.auth = null;
  }


  setStore = ({ store }) => {
    this.store = store;
  }

  get socket() {
    return this._socket;
  }
}

export default SocketIo;




