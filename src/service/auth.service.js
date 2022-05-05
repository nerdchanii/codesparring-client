class AuthService {
  constructor({ apis }) {
    this._apis = apis;
  }

  login({ email, password }) {
    return this._apis.auth.login({ email, password });
  }
}

export default AuthService;
