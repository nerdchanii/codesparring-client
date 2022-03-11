import React, { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Navigate } from 'react-router-dom';
import LOGIN_STATE from '../../../state/login';
import naverLoginConfig from '../../../constants/config/naverloginConfig';
import login from '../../../api/login';

function NaverCallback() {
  const [loginState, setLoginState] = useRecoilState(LOGIN_STATE);
  // const [userInfo, setUserInfo] = useState(null);
  const getInfo = useCallback(() => {
    const { naver } = window;
    const naverLogin = new naver.LoginWithNaverId({
      ...naverLoginConfig,
      callbackHandle: true,
    });
    naverLogin.init();

    naverLogin.getLoginStatus(async (state) => {
      if (state) {
        const email = naverLogin.user.getEmail();
        const nickName = naverLogin.user.getNickName();
        const naverId = naverLogin.user.getId();
        switch (true) {
          case !!(email && email && nickName && nickName): {
            const result = await login({ email, nickName, naverId });
            if (result) setLoginState(true);
            break;
          }
          default:
            alert('email과 nickName은 필수 입니다.');
            naverLogin.reprompt();
            break;
        }
      }
    });
  }, []);

  useEffect(() => {
    try {
      getInfo();
    } catch (e) {
      console.log(e);
      setLoginState(false);
    }
  }, []);

  if (!loginState) {
    // TODO
    return <div>로그인에 실패했습니다</div>;
  }
  if (loginState) {
    return <Navigate to="/" replace />;
  }
}

export default NaverCallback;
