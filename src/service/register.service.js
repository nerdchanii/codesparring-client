class RegisterService {
  constructor({ apis }) {
    this._apis = apis;
  }

  signIn(username, email, password) {
    return this._apis.register.signIn({ username, email, password });
  }

  // payload 를 뭐로 전달 해야하려나 모르겠다. userId 를 전달하면 좋을 것 같다.
  signOut(userId) {
    return this._apis.register.signOut({ userId });
  }
}

// export default {
//   register,
//   login,
//   logout,
// };
export default RegisterService;
