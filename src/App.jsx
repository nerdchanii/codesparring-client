import React from 'react';
import { useSelector } from 'react-redux';
import Topper from './Pages/Layout/Topper';
import RouteContainer from './Pages/Layout/RouteContainer';
import './App.scss';

function App() {
  const { theme } = useSelector((state) => state.ideOption);
  return (
    <div className="App" data-theme={theme}>
      <Topper />
      <RouteContainer />
    </div>
  );
}

export default App;
