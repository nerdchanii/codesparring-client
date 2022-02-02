import React, { useCallback, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isLogin, naverAcessToken } from '../../../state/login';
import naverLoginConfig from '../../../constants/secret/naverloginConfig';

function NaverCallback() {
  const [loginState, setLoginState] = useRecoilState(isLogin);
  const setAccessToken = useSetRecoilState(naverAcessToken);
  const location = useLocation();

  const getToken = () => {
    if (location.hash) {
      // hash를 좀더 예쁘게 빼내는방법은 없을까
      const accessToken = location.hash.split('=')[1].split('&')[0];
      setAccessToken(accessToken);
    }
  };
  const getInfo = useCallback(() => {
    getToken();
    const { naver } = window;
    const naverLogin = new naver.LoginWithNaverId({
      ...naverLoginConfig,
      callbackHandle: true,
    });
    naverLogin.init();

    naverLogin.getLoginStatus((state) => {
      if (state) {
        const email = naverLogin.user.getEmail();
        const nickName = naverLogin.user.getNickName();
        const id = naverLogin.user.getId();
        console.log(id);
        switch (true) {
          case email !== null && email !== undefined && nickName !== null && nickName !== undefined:
            console.log(email, nickName);
            setLoginState(true);
            break;
          default:
            alert('email과 nickName은 필수 입니다.');
            naverLogin.reprompt();
            break;
        }
      }
    });
  }, []);

  useEffect(() => {
    console.log('Naver callback');
    try {
      getInfo();
    } catch (e) {
      console.log(e);
      setLoginState(false);
    }
  }, []);

  if (!loginState) {
    // TODO
    return <div>리다이랙트 시킬까</div>;
  }
  if (loginState) {
    return <Navigate to="/" replace />;
  }
}

export default NaverCallback;
