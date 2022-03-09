import axios from 'axios';
import env from '../env';

// userInfo = {email, nickName, naverId}

const login = async (userInfo = null) => {
  try {
    const response = await axios(`${env.API_URL}/api/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      authorization: localStorage.getItem('LOGIN_TOKEN'), // 없으면 자동으로 null이 들어감
      data: userInfo,
    });
    const { result, token } = response.data;
    // JWT
    switch (result) {
      case 'FAIL':
        return false;
      case 'OK':
        localStorage.setItem('LOGIN_TOKEN', token);

        return true;
      default:
        return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default login;
