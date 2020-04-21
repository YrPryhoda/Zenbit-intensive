import {
  LOGIN, LOGOUT, REGISTER, LOGIN_CHECKED,
  EVENT_MESSAGE, REMOVE_EVENT_MESSAGE
} from '../types';
import fire from 'fire';
import CRC32 from 'crc-32';
import { v4 } from 'uuid';

export const checkLogin = () => async dispatch => {
  const userId = localStorage.getItem('user');
  if (userId) {
    const token = localStorage.getItem('userToken');
    const forCheckToken = Date.now();
    let user;
    await fire.database()
      .ref(`users`)
      .orderByChild('id')
      .equalTo(userId)
      .once('value', (data) => {
        const _id = Object.keys(data.val())[0];
        user = data.val()[_id];
      });
    if (+token === +user.token && (+forCheckToken - +user.token) < 10800000) {
      dispatch({
        type: LOGIN_CHECKED,
        payload: user
      })
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('userToken');
    }
  } else {
    console.log('no such user')
  }

}

export const login = (form, history) => async dispatch => {
  const { login, password } = form;
  let user;
  await fire.database().ref('users')
    .orderByChild('login')
    .equalTo(login)
    .once('value', (snap) => {
      user = snap.val();
    })
  if (!user) {
    onEvent(dispatch, 'Такого пользователя не существует', 'error')
  } else {
    const comparedPassword = CRC32.str(password);
    const _id = Object.keys(user)[0];
    const userData = user[_id];
    if (userData.password !== comparedPassword) {
      return onEvent(dispatch, 'Неправильный пароль', 'error')
    } else {
      const likeToken = Date.now();
      localStorage.setItem('user', userData.id);
      localStorage.setItem('userToken', likeToken);
      userData.token = likeToken;
      fire.database().ref(`users/${_id}/token`).set(likeToken);
      dispatch({
        type: LOGIN,
        payload: userData
      });
      history.push('/');
    }
  }
}

export const logout = () => dispatch => {
  localStorage.removeItem('user');
  localStorage.removeItem('userToken');
  dispatch({
    type: LOGOUT
  })
}
export const getRegister = (userData, history) => async dispatch => {
  const { name, login, password } = userData;
  try {
    await fire.database().ref('users')
      .orderByChild('login')
      .equalTo(login)
      .once('value', snap => {
        if (snap.val()) {
          onEvent(dispatch, 'Пользователь уже существует', 'error')
        } else {
          const cryptedPass = CRC32.str(password);
          const id = v4();
          fire.database().ref('users').push({
            id, name, login, password: cryptedPass
          });
          dispatch({
            type: REGISTER,
            payload: userData
          })
          onEvent(dispatch, 'Аккаунт успешно создан!', 'success')
          history.push('/login');
        }
      })
  } catch (error) {
    console.log(error);
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
const onEvent = (dispatch, message, type = 'error') => {
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