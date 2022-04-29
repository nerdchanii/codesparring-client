class User {
  constructor({ axios }) {
    this._axios = axios;
  }

  getUserInfo() {
    return this.axios.get('/user/profile');
  }
  
  fetch(data) {
    return this.axios.post('/user/fetch', data);
  }
}
export default User;
