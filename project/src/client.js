import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import history from './history';
import configureStore from './redux/configureStore';
import DevTools from './components/DevTools';
import routes from './routes';
import { testToken } from './redux/actions';

const store = configureStore({}, 'browser', routerMiddleware(history));

window.store = store;
const cookieToken = document.cookie.split('=')[1];

store.dispatch(testToken(cookieToken));


const component = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {renderRoutes(routes)}
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(component, document.getElementById('react-view'));

if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(<DevTools store={store} />, document.getElementById('dev-tools'));
}
