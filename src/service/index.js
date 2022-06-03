import UserService from './user.service';
import AuthService from './auth.service';
import GameService from './game.service';
import NoticeService from './notice.service';
import CodeService from './code.service';
import ProblemService from './problem.service';
import SocketService from './socket.service';

class Service {
  constructor({ apis }) {
    this.apis = apis;
    this._userService = new UserService({ apis });
    this._authService = new AuthService({ apis });
    this._gameService = new GameService({ apis });
    this._problemService = new ProblemService({ apis });
    this._codeService = new CodeService({ apis });
    this._noticeService = new NoticeService({ apis });
    this._socketService = new SocketService();
  }

  get userService() {
    return this._userService;
  }

  get authService() {
    return this._authService;
  }

  get gameService() {
    return this._gameService;
  }

  get problemService() {
    return this._problemService;
  }

  get codeService() {
    return this._codeService;
  }

  get noticeService() {
    return this._noticeService;
  }

  get socketService() {
    return this._socketService;
  }


}
export default Service;
