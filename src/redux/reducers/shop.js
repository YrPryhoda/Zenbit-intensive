import {
  GET_ALL_ITEMS, GET_BACK_SIDE,
  GET_ITEM_BY_ID, ASK_QUESTION
} from '../types';

const initialState = {
  database: [],
  singleProduct: {},
  contactMessage: {},
  isBackSide: { id: null, isBack: false },
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
        singleProduct: payload,
        loading: false
      }
    case GET_BACK_SIDE:
      return {
        ...state,
        isBackSide: { id: payload, isBack: !state.isBackSide.isBack }
      }
    case ASK_QUESTION:
      return {
        ...state,
        contactMessage: payload,
        loading: false
      }
    default:
      return state;
  }
}