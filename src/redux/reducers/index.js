import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import gameReducer from './game.reducer';
import problemReducer from './problem.reducer';
import noticeReducer from './notice.reducer';
import codeReducer from './code.reducer';
import problemsReducer from './problems.reducer';
import ideReducer from './ideOption.reducer';
export default {
  auth: authReducer,
  user: userReducer,
  game: gameReducer,
  problem: problemReducer,
  problems: problemsReducer,
  code: codeReducer,
  notice: noticeReducer,
  ideOption: ideReducer,
};

