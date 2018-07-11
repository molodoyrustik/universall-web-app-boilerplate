import { SUBMIT_LOGIN_DATA, LOGOUT, START, SUCCESS } from '../actions/constants';

const defaultState = {
  submited: false,
  loading: false,
};

export default (loginState = defaultState, action) => {
  const { type, response } = action;

  switch (type) {
    case SUBMIT_LOGIN_DATA + START:
      return { ...loginState, loading: true };
    case SUBMIT_LOGIN_DATA + SUCCESS:
      return { loading: false, submited: response.data.submited };
    case LOGOUT + SUCCESS:
      return { ...loginState, submited: false };
    default:
      return loginState;
  }
};
