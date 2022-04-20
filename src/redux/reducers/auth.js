// auth reducer
import { LOGIN, LOGOUT } from '../actions/type';

const initialState = {
  isLoggedIn: false,
  userId: 1,
  profile: {
    name: 'kim',
  },
  token: 'jsonWebToken',
};
// auth reducer

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // 이부분은 리덕스 청크로 미들웨어 처리해줘야합니다.
    // 일단 테스트용도입니다.
    case LOGIN: {
      const { auth } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        auth: {
          ...auth,
        },
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        auth: {
          userId: null,
          profile: {
            name: null,
          },
          token: null,
        },
      };
    }
    default:
      return state;
  }
};

export default authReducer;
