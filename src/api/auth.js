class Auth {
  constructor({ axios }) {
    this._axios = axios;
  }

  login({ email, password }) {
    return this._axios.post('/auth/token', { email, password });
  }
}
export default Auth;
