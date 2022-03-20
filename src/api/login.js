import axios from 'axios';

// userInfo = {email, nickName, naverId}

const login = async (userInfo = null) => {
  try {
    const response = await axios(`${process.env.REACT_APP_API_DEFAULTS_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
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
    return false;
  }
};

export default login;
