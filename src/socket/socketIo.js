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
import {
  actions as codeActions,
  ACTION as CODE_ACTION
} from '../redux/reducers/code.reducer';

/**
 * @SOCKET_EVENT
 * @description
 * 서버와 주고받는 이벤트를 정의합니다.
 */
const SOCKET_EVENT = {
  CONNECT: 'connect',
  DISCONNECT: 'disconnect',
  MESSAGE: 'message',
  JOIN: 'join',
  LEAVE: 'leave',
  GAME_START: 'gamestart',
  CREATE_ROOM: 'createRoom',
  GET_ROOMS: 'getRooms',
  CODE_TEST: 'codeTest',
  CODE_SUBMIT: 'codeSubmit',
  GAME_END: "gameEnd",
}


class SocketIo {
  constructor() {
    /**
     * @type {SOCKET_EVENT} event;
     */
    this.event = SOCKET_EVENT;
    this._socket = io(['websocket', 'polling']);
    const auth = localStorage.getItem('auth');
    if (!!auth) {
      this.setAuth({ auth: JSON.parse(auth) });
    }
  }

  on = () => {
    this._socket.on(this.event.CONNECT, this.onConnect);
    this._socket.on(this.event.JOIN, this.onJoin);
    this._socket.on(this.event.LEAVE, this.onLeave);
    this._socket.on(this.event.MESSAGE, this.onMessage);
    this._socket.on(this.event.CREATE_ROOM, this.onCreateRoom);
    this._socket.on(this.event.GET_ROOMS, this.onGetRooms);
    this._socket.on(this.event.GAME_START, this.onGameStart);
    this._socket.on(this.event.CODE_TEST, this.onCodeTest);
    this._socket.on(this.event.CODE_SUBMIT, this.onCodeSubmit);
    this._socket.on(this.event.GAME_END, this.onGameEnd);
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

  onJoin = ({ room, error }) => {
    console.log('Event on:', this.event.JOIN, room);
    this.store.dispatch(actions[ACTION.ON.JOIN]({ room }));
    if (!!error) {
      alert('방이 존재하지 않거나 입장할 수 없습니다');
      return this.store.dispatch(actions[ACTION.ON.JOIN_ERROR]({ error }));
    }
    if (room.id === 'Hello World') { return; }
    if (room.status !== 'playing') {
      this.store.dispatch(problemActions[PROBLEM_ACTION.INIT_PROBLEM]());
    } else {
      this.store.dispatch(problemActions[PROBLEM_ACTION.SET_PROBLEM]({ problem: room.problem }));
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

  onCodeTest = ({ results }) => {
    console.log('Event on:', this.event.CODE_TEST);
    console.log('result', results);
    const isFail = results.some((eachResult) => !eachResult.correct);
    alert(isFail ? '테스트 케이스가 틀렸습니다' : '테스트 케이스 통과!');
    this.store.dispatch(codeActions[CODE_ACTION.ON.TEST]({ results }));
  }

  onCodeSubmit = ({ username, correct }) => {
    console.log('Event on:', this.event.CODE_SUBMIT);
    console.log('username', username);
    console.log('correct', correct);
    if (username && correct) {
      if (username === this.socket.auth.username) {
        this.store.dispatch(codeActions[CODE_ACTION.LOADDING]({ loading: false }));
        return alert('맞았습니다! + 15점');
      }
      return alert(`${username} 님이 맞추었습니다!`);
    }
    // case 2
    if (correct) { alert('맞추었습니다!'); }
    else { alert('틀렸습니다.'); }
    this.store.dispatch(codeActions[CODE_ACTION.LOADDING]({ loading: false }));

  }

  emitCodeTest = ({ roomId, lang, code }) => {
    console.log('Event emit:', this.event.CODE_TEST);
    console.log(this.socket);
    this._socket.emit(SOCKET_EVENT.CODE_TEST, { roomId, lang, code });
    this.store.dispatch(codeActions[CODE_ACTION.LOADDING]({ loading: true }));

  }

  emitCodeSubmit = ({ roomId, username, lang, code }) => {
    console.log('Event emit:', this.event.CODE_SUBMIT);
    if (this.store.getState().room.status !== 'playing') {
      return alert('게임이 시작되지 않았습니다.');
    }
    this._socket.emit(SOCKET_EVENT.CODE_SUBMIT, { roomId, username, lang, code });
    this.store.dispatch(codeActions[CODE_ACTION.LOADDING]({ loading: true }));
  }

  onGameEnd = () => {
    console.log('Event on:', this.event.GAME_END);
    this.store.dispatch(actions[ACTION.ON.GAME_END]());
    this.store.dispatch(problemActions[PROBLEM_ACTION.INIT_PROBLEM]());
    this.store.dispatch(codeActions[CODE_ACTION.INIT_CODE]());
  }

  // set Auth Token
  setAuth = ({ auth }) => {
    console.log(auth);
    console.log('auth setting!')

    this._socket = io({
      auth: {
        username: auth.profile.username,
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




