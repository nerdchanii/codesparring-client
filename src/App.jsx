import React, { useEffect } from 'react';
import Topper from './Pages/Layout/Topper';
import RouteContainer from './Pages/Layout/RouteContainer';
import './App.scss';
import socket, { ANONY } from './constants/socket/socket';

function App() {
  useEffect(() => {
    socket.auth = { token: localStorage.getItem('LOGIN_TOKEN') || { nickName: ANONY } };
    socket.connect();
  }, []);
  return (
    <div className="App">
      <Topper />
      <RouteContainer />
    </div>
  );
}

export default App;
