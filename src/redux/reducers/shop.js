import {
  GET_ALL_ITEMS, GET_BACK_SIDE, GET_ITEM_BY_ID
} from '../types';

const initialState = {
  database: [],
  singleProduct: {},
  idBackSide: null,
  isBackSide: false,
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_ITEMS:
      return {
        ...state,
        database: payload,
        loading: false
      }
    case GET_ITEM_BY_ID:
      return {
        ...state,
        singleProduct: payload ,
        loading: false
      }
    case GET_BACK_SIDE:
      return {
        ...state,
        idBackSide: payload,
        isBackSide: !state.isBackSide
      }
    default:
      return state;
  }
}