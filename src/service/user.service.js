class UserService {
  constructor({ apis }) {
    this._apis = apis;
  }

  fetch(data){
    this.apis.user.fetch(data);
  }
}

export default UserService;
