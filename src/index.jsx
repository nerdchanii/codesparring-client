import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals.ts';
import NaverCallback from './Pages/Layout/Topper/NaverCallback';
import Apis from './api/Apis';

const apis = new Apis();
const store = new Store({ apis });
apis.setAuthStore(store.authStore);

ReactDOM.render(
  <Provider store={store.store}>
    <BrowserRouter>
      <RecoilRoot>
        <React.StrictMode>
          <Routes>
            <Route path="/*" element={<App />} />
            <Route path="/callback/*" element={<NaverCallback />} />
          </Routes>
        </React.StrictMode>
      </RecoilRoot>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
