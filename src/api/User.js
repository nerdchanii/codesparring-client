
class User {
  constructor({ axios }) {

    this._axios = axios;
  }

  getUser = async ({ id }) => {
    return this._axios.post(`/user/${id}`);
  }

  register = async ({ email, username, password }) => {
    return this._axios.post('/users', { email, username, password });
  }

  remove = async ({ userId }) => {
    return this._axios.delete('/users', { data: { userId } });
  }

  ranks = async () => {
    return this._axios.get('/users/ranks');
  }

  duplicateEmailCheck = async ({ email }) => {
    return this._axios.get(`/users/isduplicate/email/${email}`)
  }

  duplicateUsernameCheck = async ({ username }) => {
    return this._axios.get(`users/isduplicate/username/${username}`)
  }

}

export default User;
