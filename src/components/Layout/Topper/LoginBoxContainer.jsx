import React, { useCallback, useEffect } from 'react';
import './LoginBox.scss';
import naverLoginConfig from '../../../constants/secret/naverloginConfig';

function LoginBoxContainer(props) {
  const { click } = props;

  const NaverLogin = useCallback(() => {
    const { naver } = window;
    const naverLogin = new naver.LoginWithNaverId({
      ...naverLoginConfig,
      loginButton: { color: 'white', type: 3, height: '47' },
      callbackHandle: true,
    });

    naverLogin.init();
  }, []);

  useEffect(() => {
    NaverLogin();
  }, []);

  return (
    <div className="LoginBoxContainer">
      <div className="LoginBox">
        <div className="close-button">
          <button onClick={click}>close</button>
        </div>
        <div className="login-description">
          <div className="app-title">code Sparring</div>
          <div className="LoginHeader">로그인 하기 </div>
          <div className="welcom-message">
            코드스파링에 오신것을 환영합니다!
            <br />
            지금 여러분의 실력을보여주세요!
          </div>
        </div>
        <div className="button-Container">
          <div id="naverIdLogin" />
        </div>
      </div>
    </div>
  );
}

export default LoginBoxContainer;
