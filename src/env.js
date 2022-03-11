const env = {
  API_URL: process.env.REACT_APP_API_DEFAULTS_URL.toString(),
  // naver login api
  END_POINT: process.env.REACT_APP_SOCKET_END_POINT.toString(),
  NAVER_LGONIN_CALLBACK_URL: process.env.REACT_APP_NAVER_LGONIN_CALLBACK_URL.toString(),
  NAVER_LOGIN_KEY: process.env.REACT_APP_NAVER_LOGIN_KEY.toString(),
};

export default env;
