import {
  LOGIN, LOGOUT, REGISTER,
  EVENT_MESSAGE, REMOVE_EVENT_MESSAGE,
  CLEAR_BASKET
} from '../types';
import { fetchOne, setDataById } from 'redux/utils/api';
import { v4 } from 'uuid';
import md5 from 'md5';

export const login = (form, history) => async dispatch => {
  const { login, password } = form;
  let user = await fetchOne('users', 'login', login);
  if (!user) {
    onEvent(dispatch, 'Такого пользователя не существует', 'error')
  } else {
    const comparedPassword = md5(password);
    if (user.password !== comparedPassword) {
      return onEvent(dispatch, 'Неправильный пароль', 'error')
    } else {
      dispatch({
        type: LOGIN,
        payload: user
      });
      history.push('/');
    }
  }
}

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  })
  dispatch({
    type: CLEAR_BASKET
  })
}

export const getRegister = (userData, history) => async dispatch => {
  const { name, login, password } = userData;
  const candidate = await fetchOne('users', 'login', login);
  if (candidate) {
    onEvent(dispatch, 'Пользователь уже существует', 'error')
  } else {
    const cryptedPass = md5(password);
    const user = {
      id: v4(),
      name,
      login,
      password: cryptedPass
    }
    await setDataById(`users/${user.id}`, user);
    dispatch({
      type: REGISTER,
      payload: user
    })
    onEvent(dispatch, 'Аккаунт успешно создан!', 'success')
    history.push('/login');
  }
}

export const onEventMsg = (message, type = 'error') => dispatch => {
  dispatch({
    type: EVENT_MESSAGE,
    payload: { message, type }
  });
  setTimeout(() => {
    dispatch({
      type: REMOVE_EVENT_MESSAGE
    })
  }, 4000)
}
export const onEvent = (dispatch, message, type = 'error') => {
  dispatch({
    type: EVENT_MESSAGE,
    payload: { message, type }
  });
  setTimeout(() => {
    dispatch({
      type: REMOVE_EVENT_MESSAGE
    })
  }, 4000)
}