import {
  GET_ALL_ITEMS, GET_BACK_SIDE, GET_ITEM_BY_ID
} from '../types';
import { data } from '../database/dummyData';


export const getAllItems = () => dispatch => {
  dispatch({
    type: GET_ALL_ITEMS,
    payload: data
  })
}
export const getItemById = (id) => dispatch => {
  let itemById;
  data.forEach(el => {
    if (el.id === +id) {
      return itemById = el;
    }
  }
  )
  dispatch({
    type: GET_ITEM_BY_ID,
    payload: itemById
  })
}
export const getBackSide = (id) => dispatch => {
  dispatch({
    type: GET_BACK_SIDE,
    payload: id
  })
}