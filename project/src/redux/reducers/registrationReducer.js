import { SUBMIT_REGISTRATION_DATA, LOGOUT, START, SUCCESS } from '../actions/constants';

const defaultState = {
  loading: false,
  submited: false,
};

export default (registrationState = defaultState, action) => {
  const { type, response } = action;

  switch (type) {
    case SUBMIT_REGISTRATION_DATA + START:
      return { loading: true };
    case SUBMIT_REGISTRATION_DATA + SUCCESS:
      return { loading: false, submited: response.data.submited };
    case LOGOUT + SUCCESS:
      return { ...registrationState, submited: false };
    default:
      return registrationState;
  }
};
