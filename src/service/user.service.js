class UserService {
  constructor({ apis }) {
    this._apis = apis;
  }

  get apis() {
    return this._apis;
  }

  getUser = async ({ username }) => {
    return this.apis.user.getUser({ username })
  }

  register = async ({ email, username, password }) => {
    return this.apis.user.register({ email, username, password });
  }

  remove = async ({ userId }) => {
    return this.apis.user.remove({ userId });
  }

  ranks = async () => {
    return this.apis.user.ranks();
  }

  duplicateEmailCheck = async ({ email }) => {
    return this.apis.user.duplicateEmailCheck({ email });
  }

  duplicateUsernameCheck = async ({ username }) => {
    return this.apis.user.duplicateUsernameCheck({ username });
  }

}

export default UserService;
