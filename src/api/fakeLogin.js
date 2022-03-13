import axios from 'axios';
import env from '../env';

async function fakeLogin() {
  const respone = await axios.post(`${env.API_URL}/user/fake/login`);
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
