const authStorage = JSON.parse(localStorage.getItem('AUTH'));

export default authStorage || {
  isLoggedIn: false,
  auth: {
    email: null,
    nickName: null,
    naverId: null,
  },
};
