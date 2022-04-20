// create [action object] function
import { LOGIN, LOGOUT } from './type';
/*
 * action creator
 * @param {object} user
 *
 */
export const login = (user) => ({
  type: LOGIN,
  payload: {
    user,
  },
});

export const logout = () => ({
  type: LOGOUT,
});
