class AuthService {
  constructor({ apis }) {
    this._apis = apis;
  }

  login(username, password) {
    return this._apis.auth.login({ username, password });
  }

  logout() {
    // 비동기 로직 아닌데 여기서 처리해도 되나여
    return this.store.authService;
  }
}

export default AuthService;
