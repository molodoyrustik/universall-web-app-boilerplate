import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from '../components/DevTools';
import logger from './middlewares/logger';

export default function (initialState = {}, env, routerMiddleware) {
  let store;

  if (env === 'browser') {
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunk, routerMiddleware, logger),
      DevTools.instrument(),
    ));
  } else {
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(thunk, logger),
      DevTools.instrument(),
    ));
  }

  if (module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(require('./reducers').default));
  }

  return store;
}
