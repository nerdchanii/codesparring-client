import React from 'react';
import Topper from './components/Layout/Topper';
import RouteContainer from './components/Layout/RouteContainer';
// import Footer from './components/Layout/Footer';
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
