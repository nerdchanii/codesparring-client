class Register {
  constructor({ axios }) {
    this._axios = axios;
  }

  signIn({ username, email, password }) {
    return this._axios.post('/Register', { username, email, password });
  }

  SignOut({ username, email, password }) {
    return this._axios.delete('/Register', { username, email, password });
  }
}

export default Register;
