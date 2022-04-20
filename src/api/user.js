class User {
  constructor({ axios }) {
    this._axios = axios;
  }

  getUserInfo() {
    return this.axios.get('/user/profile');
  }
}

export default User;
