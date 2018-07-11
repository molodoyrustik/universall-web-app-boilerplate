import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import registrationReducer from './registrationReducer';
import loginReducer from './loginReducer';
import authReducer from './authReducer';
import bronReducer from './bronReducer';

export default combineReducers({
  registration: registrationReducer,
  login: loginReducer,
  auth: authReducer,
  routing: routerReducer,
  bron: bronReducer,
});
