import UserService from './user.service';
import AuthService from './auth.service';
import GameService from './game.service';
import NoticeService from './notice.service';
import CodeService from './code.service';
import ProblemService from './problem.service';


class Service {
  constructor({ apis }) {
    this.apis = apis;
    this._userService = new UserService({ apis });
    this._authService = new AuthService({ apis });
    this._gameService = new GameService({ apis });
    this._problemService = new ProblemService({ apis });
    this._codeService = new CodeService({ apis });
    this._noticeService = new NoticeService({ apis });
    
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
}
export default Service;
