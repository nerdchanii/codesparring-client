import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import reducer from './reducers';
import Apis from '../api/apis';
import Service from '../service';

const apis = new Apis();
const service = new Service({ apis });


const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: { service } },
    })
      .concat(logger),
  devTools: true,
});

service._socketService.setStore({ store });
service._socketService.on();
export default store;