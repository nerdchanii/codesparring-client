import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../redux/reducers/auth.reducer';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const onInput = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login(userInput));
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin]);
  return (
    <div className="Login--container">
      <h1>Login</h1>
      <form onSubmit={onSubmit} className="Login--form">
        <div className="Login--form--input--Area">
          <input
            id="login-email"
            name="email"
            type="email"
            onInput={onInput}
            placeholder="Email"
            className="Login--form--input"
          />
          <input
            name="password"
            type="password"
            onInput={onInput}
            placeholder="Password"
            className="Login--form--input"
          />
        </div>
        <button className="primary" type="submit">
          Login
        </button>
      </form>
      <div className="Login--form--register">
        <p>
          아직 회원이 아니신가요?
          <span className="Login--register--span">
            <Link to="/signup">회원가입</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default memo(Login);
