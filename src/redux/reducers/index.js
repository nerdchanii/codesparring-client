import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import roomsReducer from './rooms.reducer';
import problemReducer from './problem.reducer';
import noticeReducer from './notice.reducer';
import codeReducer from './code.reducer';
import problemsReducer from './problems.reducer';
import ideReducer from './ideOption.reducer';
import roomReducer from './room.reducer';
export default {
  auth: authReducer,
  user: userReducer,
  problem: problemReducer,
  problems: problemsReducer,
  code: codeReducer,
  notice: noticeReducer,
  ideOption: ideReducer,
  rooms: roomsReducer,
  room: roomReducer
};

