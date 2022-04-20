import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import Apis from '../api/apis';
import AuthService from '../service/auth.service';
import UserService from '../service/user.service';

const apis = new Apis();
const authService = new AuthService({ apis });
const userService = new UserService({ apis });

const services = {
  authService,
  userService,
};

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { withExtraArgument: services },
      logger: true,
    }),
  devTools: true,
});
