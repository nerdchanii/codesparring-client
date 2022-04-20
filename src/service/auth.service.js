class AuthService {
  constructor({ apis }) {
    this._apis = apis;
  }

  login({ email, password }) {
    this._apis.auth.login({ email, password });
  }
}

export default AuthService;
