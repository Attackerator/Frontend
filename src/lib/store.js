import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import thunk from './redux-thunk';
import reporter from './redux-reporter';

export const appStoreCreate = () =>
  createStore(reducers,composeWithDevTools(
    applyMiddleware(thunk,reporter)));

export default appStoreCreate;
