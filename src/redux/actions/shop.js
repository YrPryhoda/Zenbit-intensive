import {
  GET_ALL_ITEMS, GET_BACK_SIDE,
  GET_ITEM_BY_ID, ASK_QUESTION
} from '../types';
import { fetchAll, fetchById, setDataById } from 'redux/utils/api';
import { onEvent } from 'redux/actions/auth';
import { v4 } from 'uuid';

export const getAllItems = () => async dispatch => {
  const state = await fetchAll('products');
  dispatch({
    type: GET_ALL_ITEMS,
    payload: state
  })
}
export const getItemById = (id) => async dispatch => {
  let itemById = await fetchById('products', 'id', id);
  dispatch({
    type: GET_ITEM_BY_ID,
    payload: itemById
  });
}
export const getBackSide = (id) => dispatch => {
  dispatch({
    type: GET_BACK_SIDE,
    payload: id
  })
}
export const askQuestion = (user, data) => async dispatch => {
  let formedData = {};
  const { name, phone, message } = data;
  !user.id ?
    formedData = {
      id: `anonim-${v4()}`,
      name,
      phone,
      message
    } :
    formedData = {
      id: user.id,
      name,
      phone,
      login: user.login,
      message
    };
  await setDataById(`FAQ/${formedData.id}`, formedData);
  dispatch({
    type: ASK_QUESTION,
    payload: formedData
  })
  onEvent(dispatch, 'Ваше обращение успешно отправлено', 'success');
  
}