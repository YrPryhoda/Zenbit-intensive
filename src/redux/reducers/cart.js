import {
  ADD_TO_CART, REMOVE_FROM_CART, SHOW_ADDED_ITEMS, SUMM_TOTALS
} from '../types';

const initialState = {
  addedToCart: [],
  totalPrice: null,
  totalCount: null,
  loading: true,
}
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SHOW_ADDED_ITEMS:
      return {
        ...state,
        addedToCart: payload,
        loading: false
      }
    case ADD_TO_CART:
      return {
        ...state,
        addedToCart: payload,
        loading: false
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        addedToCart: payload,
        loading: false
      }
    case SUMM_TOTALS:
      const res = calcTotals(state);
      return {
        ...state,
        totalCount: res.count,
        totalPrice: res.price
      }
    default:
      return state;
  }
}

const calcTotals = (object) => {
  let res = {
    price: 0,
    count: 0
  }
  object.addedToCart.forEach(el => {
    res.price += (el.count * el.price);
    res.count += el.count;
  })
  return res;
}
