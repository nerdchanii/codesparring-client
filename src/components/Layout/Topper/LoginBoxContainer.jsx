import React, { useCallback, useEffect } from 'react';
import './LoginBox.scss';
import { useSetRecoilState } from 'recoil';
import LOGIN_STATE from '../../../state/login';
import naverLoginConfig from '../../../constants/config/naverloginConfig';
import fakeLogin from '../../../api/fakeLogin';

const buttonStyles = {
  border: '1px solid #ebebeb',
  backgroundColor: '#fff',
  color: '#999',
  fontSize: '14px',
  fontWeight: 'bold',
  padding: '10px 20px',
  borderRadius: '4px',
  marginTop: '20px',
  cursor: 'pointer',
};

function LoginBoxContainer(props) {
  const { click } = props;
  const setLoginState = useSetRecoilState(LOGIN_STATE);

  const NaverLogin = useCallback(() => {
    const { naver } = window;
    const naverLogin = new naver.LoginWithNaverId({
      ...naverLoginConfig,
      loginButton: { color: 'white', type: 3, height: '47' },
      callbackHandle: true,
    });

    naverLogin.init();
  }, []);
  const loginbutton = async () => {
    try {
      const result = await fakeLogin();
      if (result) {
        setLoginState(true);
        click();
      }
    } catch (e) {
      setLoginState(false);
      alert(e);
      console.log(e);
    }
  };

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
          <button style={buttonStyles} onClick={loginbutton}>
            네이버로그인 없이 고냥 마구잡이로 즐겨보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginBoxContainer;
