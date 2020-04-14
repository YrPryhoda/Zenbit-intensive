import {
  ADD_TO_CART, REMOVE_FROM_CART, SHOW_ADDED_ITEMS, SUMM_TOTALS
} from '../types';

const initialState = {
  addedToCart: [

  ],
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
        loading: false
      }
    case ADD_TO_CART:
      const { addedCount, item } = payload;
      const isUnique = state.addedToCart.findIndex(el => el.id === item.id);
      if (isUnique === -1) {
        const newObj = { ...item, count: 1 };
        return {
          ...state,
          addedToCart: [...state.addedToCart, newObj],
          loading: false
        }
      }
      const countedItem = { ...state.addedToCart[isUnique] };
      countedItem.count = countedItem.count + addedCount;
      const newArray = [
        ...state.addedToCart.slice(0, isUnique),
        countedItem,
        ...state.addedToCart.slice(isUnique + 1)
      ]
      return {
        ...state,
        addedToCart: newArray,
        loading: false
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        addedToCart: state.addedToCart.filter(el => el.id !== payload),
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
