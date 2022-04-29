import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Topper from './Pages/Layout/Topper';
import RouteContainer from './Pages/Layout/RouteContainer';
import './App.scss';
import socket, { ANONY } from './constants/socket/socket';
import { fetchLogin, logout } from './redux/reducers/auth.reducer';
import { fetchSomething } from './redux/reducers/user.reducer';

function App() {
  const userLoggined = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const onClick = () => {
    if (userLoggined) dispatch(logout());
    else dispatch(fetchLogin({ email: ANONY, password: ANONY }));
  };
  const userClick = ()=>{
    dispatch(fetchSomething());
  }
  useEffect(() => {
    socket.auth = { token: localStorage.getItem('LOGIN_TOKEN') || { nickName: ANONY } };
    socket.connect();
  }, []);
  return (
    <div className="App">
      <Topper />
      <button onClick={onClick}>{userLoggined ? '로그아웃' : '로그인'}</button>
      <button onClick={userClick}>뭔가를 페치</button>
      <RouteContainer />
    </div>
  );
}

export default App;
