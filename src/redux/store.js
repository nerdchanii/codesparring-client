import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import AuthService from '../service/auth.service';
import RegisterService from '../service/register.service';
import AuthController from './actions/auth';
import rootReducers from './reducers';

// export default createStore(rooteReducers);

class Store {
  _apis = null;

  _AuthService = null;

  _UserService = null;

  constructor({ apis }) {
    this._apis = apis;
    this._store = createStore(rootReducers, applyMiddleware(thunk.withExtraArgument(this._apis)));
    this._AuthService = new AuthService(this._apis);
    this._AuthController = new AuthController({
      store: this._store,
      AuthService: this._AuthService,
    });
  }

  get store() {
    return this._store;
  }

  get authStore() {
    return this.store.getState().auth;
  }
}
export default Store;
