class UserService {
  constructor({ apis }) {
    this._apis = apis;
  }

  user(id){
    return this.apis.user.user(id)
  }

  register(data){
    this.apis.user.register(data);
  }

  resign(data){
    this.apis.user.resign(data);
  }

  ranks(data){
    return this.apis.user.ranks(data);
  }

}

export default UserService;
