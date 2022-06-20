// import React, { useReducer } from 'react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { duplicateEmailCheck, register } from '../redux/reducers/user.reducer';
import './signup.scss';

function Message({ correct, emailDuplicateState }) {
  if (!correct) {
    return <div className="message">올바른 이메일 형식이 아닙니다.</div>;
  }
  if (!emailDuplicateState) {
    return <div className="message">사용 가능한 이메일입니다.</div>;
  }
  return <div className="message">이미 사용중인 이메일입니다.</div>;
}

function SignUp() {
  const emailDuplicateState = useSelector((state) => state.user.isduplicateEmail);
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  const [correct, setCorrect] = useState(null);

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const dispatch = useDispatch();
  const validation = (e) => {
    e.preventDefault();
    const test = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email);
    if (test) {
      setCorrect(true);
      dispatch(duplicateEmailCheck({ email: form.email }));
    } else {
      setCorrect(false);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('form', form);
    const { username, email, password } = form;
    dispatch(register({ username, email, password }));
  };

  if (isLogin) return <Navigate to="/" />;
  return (
    <div className="wrapper">
      <div className="wrap__box">
        <h1>SignUp</h1>
        <form onSubmit={onSubmit}>
          <div className="input--email__container">
            <label htmlFor="signup-email" className="signup--input__label">
              Email:
              <input
                id="signup-email"
                type="email"
                name="email"
                value={form.email}
                onInput={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
                required
              />
            </label>
            <button type="submit" onClick={validation}>
              E-mail check
            </button>
            {correct !== null && (
              <Message correct={correct} emailDuplicateState={emailDuplicateState} />
            )}
          </div>
          <div className="input--username__container">
            <label htmlFor="signup-username" className="signup--input__label">
              username:
              <input
                id="signup-username"
                type="text"
                name="username"
                value={form.username}
                onInput={(e) => {
                  setForm({ ...form, username: e.target.value });
                }}
                required
              />
            </label>
          </div>
          <div className="input--password__container">
            <label htmlFor="signup-password" className="signup--input__label">
              Password:
              <input
                id="signup-password"
                type="password"
                name="password"
                value={form.password}
                onInput={(e) => {
                  setForm({ ...form, password: e.target.value });
                }}
                required
              />
            </label>
            <label htmlFor="signup-passwordConfirm" className="signup--input__label">
              PasswordConfirm:
              <input
                id="signup-passwordConfirm"
                type="password"
                name="passwordConfirm"
                value={form.passwordConfirm}
                onInput={(e) => {
                  setForm({ ...form, passwordConfirm: e.target.value });
                }}
                required
              />
              {form.password !== form.passwordConfirm ? (
                <span>비밀번호가 일치하지 않습니다.</span>
              ) : null}
            </label>
          </div>
          <button type="submit">SignUp</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
