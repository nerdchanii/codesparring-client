import UserService from './user.service';
import AuthService from './auth.service';

class Service {
  constructor({ apis }) {
    this.apis = apis;
    this._userService = new UserService({ apis });
    this._authService = new AuthService({ apis });
  }

  get userService() {
    return this._userService;
  }

  get authService() {
    return this._authService;
  }
}
export default Service;
