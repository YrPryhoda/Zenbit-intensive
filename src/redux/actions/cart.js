import {
  SHOW_ADDED_ITEMS, ADD_TO_CART, REMOVE_FROM_CART, SUMM_TOTALS
} from '../types';
import { fetchAll, setDataById } from 'redux/utils/api';

export const showCartItems = (userId) => async dispatch => {
  dispatch({
    type: 'API_REQUEST',
    apiData: {
      ref: `cart/${userId}`,
      method: 'getAll',
      order: '',
      equalTo: '',
      types: {
        SUCCESS: SHOW_ADDED_ITEMS,
        FAIL: 'API_FAIL',
        REQUEST: 'API_REQUEST'
      }
    }
  })
  dispatch({
    type: SUMM_TOTALS
  });
}

export const addToCart = (userId, item, addedCount = 1) => async dispatch => {
  const data = await fetchAll(`cart/${userId}`);
  let newArray = [];
  if (!data) {
    newArray.push({ ...item, count: addedCount })
  } else {
    const isUnique = data.findIndex(el => el.id === +item.id);
    if (isUnique === -1) {
      newArray = [...data, { ...item, count: addedCount }];
    } else {
      const newObj = { ...data[isUnique], count: data[isUnique].count + addedCount };
      newArray = [
        ...data.slice(0, isUnique),
        newObj,
        ...data.slice(isUnique + 1)
      ]
    }
  }
  await setDataById(`cart/${userId}`, newArray);
  dispatch({
    type: ADD_TO_CART,
    payload: newArray
  });
  dispatch({
    type: SUMM_TOTALS
  });
}

export const removeFromCart = (userId, id) => async dispatch => {
  const data = await fetchAll(`cart/${userId}`)
  const index = data.findIndex(el => +el.id === +id);
  const newCart = [
    ...data.slice(0, index),
    ...data.slice(index + 1),
  ];
  await setDataById(`cart/${userId}`, newCart);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: newCart
  })
  data && dispatch({
    type: SUMM_TOTALS
  })
}