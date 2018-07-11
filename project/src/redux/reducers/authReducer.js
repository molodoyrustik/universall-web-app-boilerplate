import { SUBMIT_LOGIN_DATA, TEST_TOKEN, LOGOUT, SUCCESS } from '../actions/constants';

const defautState = {
  authenticated: false,
  token: null,
  email: '',
};

export default (authState = defautState, action) => {
  const { type, response } = action;

  switch (type) {
    case TEST_TOKEN + SUCCESS:
      return {
        ...authState,
        authenticated: response.data.auth,
        email: response.data.email,
        token: response.data.token,
      };
    case SUBMIT_LOGIN_DATA + SUCCESS:
      return {
        ...authState,
        authenticated: response.data.login,
        token: response.data.token,
        email: response.data.email,
      };
    case LOGOUT + SUCCESS:
      return { ...authState, authenticated: response.data.login };
    default:
      return authState;
  }
};
