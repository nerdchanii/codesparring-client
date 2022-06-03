import axios from 'axios';
// eslint-disable-next-line import/no-cycle

import Auth from './Auth';
import User from './User';
import Problem from './Problem';
import Notice from './Notice';
import Code from './Code';



import { API_BASE_URL, API_DEFAULT_TIMEOUT } from './constants';




const AUTH_REQUIRED_LIST = ['/uesrs/*', '/problems/*', '/games/*', '/codes/*'];

class Apis {
  constructor() {
    this._axios = axios.create({
      baseURL: API_BASE_URL,
      timeout: API_DEFAULT_TIMEOUT,
    });

    this._axios.interceptors.request.use((config) => {
      const required = AUTH_REQUIRED_LIST.some((pattern) => config.url.match(pattern));
      if (required) {
        return {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${this.accessToken}`,
          },
        };
      }
      return config;
    });
    this._auth = new Auth({ axios: this._axios });
    this._user = new User({ axios: this._axios });
    this._problem = new Problem({ axios: this._axios });
    this._code = new Code({ axios: this._axios });
    this._notice = new Notice({ axios: this._axios });
  }

  // accessToken 
  get accessToken() {
    return this._accessToken;
  }

  setAccessToken(accessToken) {
    this._accessToken = accessToken;
  }

  get auth() {
    return this._auth;
  }

  get user() {
    return this._user;
  }

  get problem() {
    return this._problem;
  }

  // get game() {
  //   return this._game;
  // }

  get code() {
    return this._code;
  }

  get notice() {
    return this._notice;
  }
}

export default Apis;
