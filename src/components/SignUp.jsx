// import React, { useReducer } from 'react';
import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  duplicateEmailCheck,
  register,
  duplicateUsernameCheck,
} from '../redux/reducers/user.reducer';
import './signup.scss';

function EmailMessage({ correct, emailDuplicateState }) {
  if (emailDuplicateState === null && correct === null) {
    return null;
  }
  if (!correct) {
    return <p className="message warn">올바른 이메일 형식이 아닙니다.</p>;
  }
  if (!emailDuplicateState) {
    return <p className="message true">사용 가능한 이메일입니다.</p>;
  }
  return <p className="message false">이미 사용중인 이메일입니다.</p>;
}

function UsernameMessage({ correct, usernameDuplicateState }) {
  if (usernameDuplicateState === null && correct === null) {
    return null;
  }
  if (!correct) {
    return <p className="message warn">너무 짧은 유저네임입니다.</p>;
  }
  if (!usernameDuplicateState) {
    return <p className="message true">사용 가능한 유저네임입니다.</p>;
  }
  return <p className="message false">이미 사용중인 유저네임입니다.</p>;
}

function SignUp() {
  const {
    isduplicateEmail: emailDuplicateState,
    isduplicateUsername: usernameDuplicateState,
    success,
  } = useSelector((state) => state.user);
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  const [correct, setCorrect] = useState({
    email: null,
    username: null,
  });

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const dispatch = useDispatch();
  const emailValidation = (e) => {
    e.preventDefault();

    const emailTest = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email);
    if (emailTest) {
      setCorrect({ ...correct, email: true });
      dispatch(duplicateEmailCheck({ email: form.email }));
    } else {
      setCorrect({ ...correct, email: false });
    }
  };

  const usernameValidation = (e) => {
    e.preventDefault();
    if (form.username.length > 3) {
      setCorrect({ ...correct, username: true });
      dispatch(duplicateUsernameCheck({ username: form.username }));
    } else {
      setCorrect({ ...correct, username: false });
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (form.password !== form.passwordConfirm) {
      return alert('비밀번호를 확인해주세요');
    }
    if (form.password.length < 8 || form.passwordConfirm.length < 8) {
      return alert('비밀번호는 8자 이상이어야 합니다.');
    }
    if (form.username.length < 4) {
      return alert('유저네임은 4자 이상이어야 합니다.');
    }
    const { username, email, password } = form;
    dispatch(register({ username, email, password }));
  };

  if (isLogin) return <Navigate to="/" />;
  if (success) return <Navigate to="/login" />;
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
              onBlur={emailValidation}
              value={form.email}
              onInput={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              required
            />
            <EmailMessage correct={correct.email} emailDuplicateState={emailDuplicateState} />
          </div>
          <div className="container">
            <input
              id="signup-username"
              type="text"
              placeholder="username"
              name="username"
              value={form.username}
              onBlur={usernameValidation}
              onInput={(e) => {
                setForm({ ...form, username: e.target.value });
              }}
              required
            />
            <UsernameMessage
              correct={correct.username}
              usernameDuplicateState={usernameDuplicateState}
            />
          </div>
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
            {form.password.length < 8 ? (
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
