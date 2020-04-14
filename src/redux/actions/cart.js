import {
  SHOW_ADDED_ITEMS, ADD_TO_CART, REMOVE_FROM_CART, SUMM_TOTALS
} from '../types';
import { data } from '../database/dummyData';

export const showCartItems = () => dispatch => {
  dispatch({
    type: SHOW_ADDED_ITEMS
  })
  dispatch({
    type: SUMM_TOTALS
  })
}
 
export const addToCart = (id, addedCount) => dispatch => {
  let item;
  data.forEach(el => {
    if (el.id === +id) {
      return item = el;
    }
  })

  dispatch({
    type: ADD_TO_CART,
    payload: {item, addedCount}
  })
  dispatch({
    type: SUMM_TOTALS
  })
}

export const removeFromCart = (id) => dispatch => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id
  })
  dispatch({
    type: SUMM_TOTALS
  })
}