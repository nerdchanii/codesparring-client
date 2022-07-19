// import React, { useReducer } from 'react';
import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { duplicateEmailCheck, register } from '../redux/reducers/user.reducer';
import './signup.scss';

function Message({ correct, emailDuplicateState }) {
  if (!correct) {
    return <p className="message warn">올바른 이메일 형식이 아닙니다.</p>;
  }
  if (!emailDuplicateState) {
    return <p className="message true">사용 가능한 이메일입니다.</p>;
  }
  return <p className="message false">이미 사용중인 이메일입니다.</p>;
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
      <div className="Signup--box">
        <h1 className="title">Sign up</h1>
        <form onSubmit={onSubmit}>
          <div className="container">
            <input
              id="signup-email"
              placeholder="email"
              type="email"
              name="email"
              onBlur={validation}
              value={form.email}
              onInput={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              required
            />
            {!correct ? (
              <Message correct={correct} emailDuplicateState={emailDuplicateState} />
            ) : (
              <p className="message" />
            )}
          </div>
          <input
            id="signup-username"
            type="text"
            placeholder="username"
            name="username"
            value={form.username}
            onInput={(e) => {
              setForm({ ...form, username: e.target.value });
            }}
            required
          />
          <div className="container">
            <input
              id="signup-password"
              type="password"
              placeholder="password"
              name="password"
              value={form.password}
              onInput={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
              required
            />
            {form.password.length < 12 ? (
              <p className="message false">
                {form.password.length !== 0 && '비밀번호가 너무 짧습니다'}
              </p>
            ) : (
              <p className="message true">사용할 수 있는 비밀번호입니다</p>
            )}
          </div>
          <div className="container">
            <input
              id="signup-passwordConfirm"
              type="password"
              placeholder="passwordConfirm"
              name="passwordConfirm"
              value={form.passwordConfirm}
              onInput={(e) => {
                setForm({ ...form, passwordConfirm: e.target.value });
              }}
              required
            />
            {form.password &&
              form.passwordConfirm &&
              (form.password !== form.passwordConfirm ? (
                <p className="message false">비밀번호가 일치하지 않습니다.</p>
              ) : (
                <p className="message true">비밀번호가 일치합니다.</p>
              ))}
          </div>
          <button type="submit">SignUp</button>
        </form>
      </div>
    </div>
  );
}

export default memo(SignUp);
