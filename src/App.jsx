import React, { useEffect } from 'react';
import Topper from './Pages/Layout/Topper';
import RouteContainer from './Pages/Layout/RouteContainer';
import './App.scss';

function App() {
  useEffect(() => {
    // socket.auth = { token: localStorage.getItem('LOGIN_TOKEN') || { username: ANONY } };
    // socket.connect();
    // socket.on('connect', () => {
    //   console.log('connected');
    // });
    // socket.emit('message', { message: 'Hello from client' });
  }, []);
  return (
    <div className="App">
      <Topper />
      <RouteContainer />
    </div>
  );
}

export default App;
