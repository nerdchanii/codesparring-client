import React from 'react';
import Ide from './components/ide/Ide';
import Topper from './components/Layout/Topper';
import RouteContainer from './components/Layout/RouteContainer';
import Footer from './components/Layout/Footer';
import './App.scss'

function App() {
  return (
    <div className='App'>
      <Topper />
      <hr /> 
      <RouteContainer /> 
      <hr />
      <Footer />
    </div>
  );
}

export default App;
