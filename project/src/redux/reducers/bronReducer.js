import { SUBMIT_BRON_DATA, GET_BRON_DATA, SUCCESS, START } from '../actions/constants';

const defautState = {
  submited: false,
  loading: false,
  dates: [],
  loadingDates: false,
};

export default (bronState = defautState, action) => {
  const { type, response } = action;

  switch (type) {
    case SUBMIT_BRON_DATA + SUCCESS:
      return { ...bronState, submited: response.data.submited };
    case GET_BRON_DATA + START:
      return { ...bronState, loadingDates: true };
    case GET_BRON_DATA + SUCCESS:
      return {
        ...bronState,
        dates: action.dates,
        submited: response.data.submited,
        loadingDates: false,
      };
    default:
      return bronState;
  }
};
