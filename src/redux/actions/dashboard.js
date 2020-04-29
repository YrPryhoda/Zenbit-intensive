import {
  EDIT_PROFILE
} from '../types';
import { onEvent } from 'redux/actions/auth';
import { fetchOne, editDataById } from 'redux/utils/api';

export const editProfileById = (id, aditionalInfo, history) => async dispatch => {
  await editDataById(`users/${id}`, aditionalInfo);
  onEvent(dispatch, 'Информация успешно обновлена', 'success');
  dispatch({
    type: EDIT_PROFILE,
    payload: aditionalInfo
  })
  setTimeout(() => {
    history.push('/dashboard')
  }, 2000)
}