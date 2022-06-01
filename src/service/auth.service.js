class AuthService {
  constructor({ apis }) {
    this._apis = apis;
  }

  login({ email, password }) {
    return this._apis.auth.login({ email, password });
  }

  logout() {
    this._apis.setAccessToken(null);
    localStorage.removeItem('auth');
    return true;
  }
}

export default AuthService;
