// action -create functions
import AuthService from '../../service/auth.service';

import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from './type';

// 이건 그냥 dispatch(login({email,password}))으로 dispatch하는 방법
//
export const login =
  ({ email, password }) =>
  (dispatch) => {
    return AuthService.signIn({ email, password })
      .then((response) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: LOGIN_FAIL,
          payload: error.response.data,
        });
      });
  };

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};

// 2 클래스로 만들어서 Controller를 스토어에 넘겨줘서
// Store.authController.login(email, password) -> store.dispatch(login(email, password)) 하도록
// 근데 이 방법은 컴포넌트에서 dispatch 훅으로 실행하거나 connect(state, dispatch)(Component)로 연결할 떄
// 어떻게 컨트롤러의 method를 연결하는지 모르겠어여
export default class AuthController {
  constructor({ store, service }) {
    this._store = store;
    this._service = service;
  }

  get store() {
    return this._store;
  }

  signIn({ email, password }) {
    return this._service
      .signIn({ email, password })
      .then((response) => {
        this.store.dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        this.store.dispatch({
          type: LOGIN_FAIL,
          payload: error.response.data,
        });
      });
  }
}
