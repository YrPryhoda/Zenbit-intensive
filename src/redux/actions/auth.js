import {
  LOGIN, LOGOUT,
  LOGIN_ERROR, REMOVE_LOGIN_ERROR
} from '../types';

export const login = (form) => dispatch => {
  dispatch ({
    type: LOGIN,
    payload: form
  })
}
export const logout = () => dispatch => {
  dispatch ({
    type: LOGOUT
  })
}
export const onLoginError = (message) => dispatch => {
  dispatch({
    type: LOGIN_ERROR,
    payload: message
  });
  setTimeout(() => {
    dispatch({
      type: REMOVE_LOGIN_ERROR
    })
  }, 4000)
}