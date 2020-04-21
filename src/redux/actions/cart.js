import {
  SHOW_ADDED_ITEMS, ADD_TO_CART, REMOVE_FROM_CART, SUMM_TOTALS
} from '../types';
import fire from 'fire';

export const showCartItems = (userId) => async dispatch => {
  try {
    let data = [];
    await fire.database()
      .ref(`cart/${userId}`)
      .orderByKey()
      .once('value', (snap) => {
        !!snap.val() && (data = snap.val())
      });
    dispatch({
      type: SHOW_ADDED_ITEMS,
      payload: data
    })
    dispatch({
      type: SUMM_TOTALS
    })
  } catch (err) {
    console.log(err);
  }
}

export const addToCart = (userId, item, addedCount = 1) => async dispatch => {
  let data = [];
  const { id, title, price } = item
  try {
    await fire.database()
      .ref(`cart/${userId}`)
      .orderByKey()
      .once('value', (snap) => {
        !!snap.val() && (data = snap.val())
      });
    let newArray = [];
    const isUnique = data.findIndex(el => el.id === +item.id);
    if (isUnique === -1) {
      newArray = [...data, { id, title, price, count: addedCount }];
    } else {
      const newObj = { ...data[isUnique], count: data[isUnique].count + addedCount };
      newArray = [
        ...data.slice(0, isUnique),
        newObj,
        ...data.slice(isUnique + 1)
      ]
    }
    await fire.database().ref(`cart/${userId}`).set(newArray);
    dispatch({
      type: ADD_TO_CART,
      payload: newArray
    });
    dispatch({
      type: SUMM_TOTALS
    });
  } catch (err) {
    console.log(err);
  }
}

export const removeFromCart = (userId, id) => async dispatch => {
  let index = null;
  let newCart = [];
  await fire.database()
    .ref(`cart/${userId}`)
    .once('value', snap => {
      if (snap.val()) {
        index = snap.val().findIndex(el => +el.id === +id);
        newCart = [
          ...snap.val().slice(0, index),
          ...snap.val().slice(index + 1),
        ];
      } else {
        return newCart;
      }
    })
  await fire.database()
    .ref(`cart/${userId}`).set(newCart);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: newCart
  })
  dispatch({
    type: SUMM_TOTALS
  })
}