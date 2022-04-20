import axios from 'axios';
import Auth from './Auth';
import Register from './Register';
import { BASE_API_URL, DEFAULT_API_TIMEOUT } from './constans';

// for service needed Auth for api calls
// api 호출시 Auth header를 사용해야만 하는 api들
const AUTH_REQUEST_LIST = ['/user/*'];

// make api class for base url, setTimout, etc.
// base url using constants file from src/constants.js
class Apis {
  _axios = null;

  constructor() {
    this._axios = axios.create({
      baseURL: BASE_API_URL,
      timeout: DEFAULT_API_TIMEOUT,
    });

    this._axios.interceptors.request.use((config) => {
      const authRequired = AUTH_REQUEST_LIST.some((pattern) => config.url.match(pattern));
      if (authRequired) {
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
    this._register = new Register({ axios: this._axios });
  }

  get auth() {
    return this._auth;
  }

  get register() {
    return this._register;
  }

  get accessToken() {
    return this._authStore?.accessToken;
  }

  setAuthStore(authStore) {
    this._authStore = authStore;
  }
}
export default Apis;
