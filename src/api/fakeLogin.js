import axios from 'axios';

async function fakeLogin() {
  const respone = await axios.post(`${process.env.REACT_APP_API_DEFAULTS_URL}/user/fake/login`);
  const { result, token } = respone.data;
  switch (result) {
    case 'FAIL':
      return false;
    case 'OK':
      localStorage.setItem('LOGIN_TOKEN', token);
      return true;
    default:
      return false;
  }
}

export default fakeLogin;
