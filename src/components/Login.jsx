import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/reducers/auth.reducer';

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
    console.log(isLogin);
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin]);
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input name="email" type="email" onInput={onInput} placeholder="Email" />
        <input name="password" type="password" onInput={onInput} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <button
        onClick={() => {
          navigate('/signup');
        }}
      >
        signUp
      </button>
    </div>
  );
}

export default Login;
