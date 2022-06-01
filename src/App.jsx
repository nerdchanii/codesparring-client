import React from 'react';
import Topper from './Pages/Layout/Topper';
import RouteContainer from './Pages/Layout/RouteContainer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Topper />
      <RouteContainer />
    </div>
  );
}

export default App;
