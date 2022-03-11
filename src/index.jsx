import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals.ts';
import NaverCallback from './components/Layout/Topper/NaverCallback';

ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <React.StrictMode>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/callback/*" element={<NaverCallback />} />
        </Routes>
      </React.StrictMode>
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById('root'),
);

reportWebVitals();
