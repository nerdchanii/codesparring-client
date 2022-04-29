import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import Apis from '../api/apis';
import Service from '../service';

const apis = new Apis();
const service = new Service({ apis });

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: { service } },
    }),
  devTools: true,
});
