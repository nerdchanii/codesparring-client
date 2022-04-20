import * as ACTION from '../actions/type';
import auth from '../initialState/auth';

// import initialAuthState from '../initialState/auth';

export const login = () => ({ type: ACTION.LOGIN_SUCCESS });
export const logout = () => ({ type: LOGOUT });

const initialState = window.localStorage.getItem9('auth')
  ? JSON.parse(window.localStorage.getItem9('auth'))
  : {
      auth: {
        userId: null,
        isLoggedIn: false,
        nickName: null,
        token: null,
      },
    };

function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ACTION.LOGGIN_SUCCESS: {
      window.localStorage.setItem('auth', JSON.stringify(payload));
      return {
        ...state,
        auth: {
          isLoggedIn: true,
          ...payload,
        },
      };
    }
    case ACTION.LOGIN_FAIL: {
      return {
        ...state,
        auth: {
          ...state.auth,
          isLoggedIn: false,
        },
      };
    }
    case ACTION.LOGOUT: {
      window.localStorage.removeItem('auth');
      return {
        ...state,
        isLoggedIn: false,
        auth: {
          isLoggedIn: false,
          userId: null,
          nickName: null,
          token: null,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
