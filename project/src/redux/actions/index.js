import axios from 'axios';
import { push } from 'react-router-redux';
import Cookies from 'js-cookie';

import {
  SUBMIT_LOGIN_DATA,
  SUBMIT_SIGNUP_DATA,
  TEST_TOKEN,
  LOGOUT,
  START, SUCCESS, FAIL,
} from './constants';

const mainApi = '/api/v1/';

export function signup(data, type) {
  const apiUrl = 'auth/signup';

  return (dispatch) => {
    dispatch({
      type: SUBMIT_SIGNUP_DATA + START,
      payload: { data },
    });

    return (axios.post(`${mainApi}${apiUrl}`, data)
      .then((response) => {
        dispatch({
          type: SUBMIT_SIGNUP_DATA + SUCCESS,
          payload: { data },
        });

        return dispatch(push('/auth/login'));
      })
      .catch(error => {
        dispatch({
          type: SUBMIT_SIGNUP_DATA + FAIL,
          payload: { data, error },
        });
      })
    );
  };
}

export function login(data, type) {
  const apiUrl = 'auth/login';

  return (dispatch) => {
    dispatch({
      type: SUBMIT_LOGIN_DATA + START,
      payload: {
        data,
      },
    });

    return (axios.post(`${mainApi}${apiUrl}`, data)
      .then((response) => {
        dispatch({
          type: SUBMIT_LOGIN_DATA + SUCCESS,
          payload: { data },
        });
      })
      .catch(error => {
        dispatch({
          type: SUBMIT_LOGIN_DATA + FAIL,
          payload: { data, error },
        });
      }));
  };
}

// export function logout() {
//   return (dispatch) => {
//     Cookies.remove('token');
//
//     dispatch({
//       type: LOGOUT + SUCCESS,
//       payload: {},
//     });
//
//     return dispatch(push('/login'));
//   };
// }


export function testToken(cookieToken) {
  return (dispatch, getState) => {
    const token = cookieToken || '';

    dispatch({
      type: TEST_TOKEN + START,
      payload: { token },
    });

    return (
      axios.post(`${mainApi}auth/token`, { access_token: token })
        .then((response) => {
          dispatch({
            type: TEST_TOKEN + SUCCESS,
            payload: { token },
          });

          dispatch(push('/private'));
        })
        .catch(error => {
          dispatch({
            type: TEST_TOKEN + FAIL,
            payload: { token },
            error,
          });
        })
    );
  };
}
