class User {
  constructor({ axios }) {
    this._axios = axios;
  }

  user(id){
    return this._axios.user(id)
  }

  register(data){
    this._axios.register(data);
  }

  resign(data){
    this._axios.resign(data);
  }

  ranks(data){
    return this._axios.ranks(data);
  }

}

export default User;
