import { createStore,applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from './redux-thunk';
import reporter from './redux-reporter';

export const appStoreCreate = () =>
  createStore(reducers,
    applyMiddleware(thunk,reporter));

export default appStoreCreate;
