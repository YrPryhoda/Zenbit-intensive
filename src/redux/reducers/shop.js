import {
  GET_ALL_ITEMS, GET_BACK_SIDE,
  GET_ITEM_BY_ID, ASK_QUESTION,
  SEARCH_ITEM, NEXT_PAGE,
  SHOW_BY_CATEGORY, SHOW_AVILABLE_ITEMS
} from '../types';

const initialState = {
  database: [],
  singleProduct: {},
  search: '',
  pagination: {
    showedItems: [],
    activePage: 1,
    itemsOnPage: 8,
    totalItems: 0,
    activeCategory: ''
  },
  contactMessage: {},
  isBackSide: { id: null, isBack: false },
  loading: true
};
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'API_REQUEST':
      return {
        ...state,
        loading:true
      }
    case GET_ALL_ITEMS:
      return {
        ...state,
        database: payload,
        loading: false
      }
    case SHOW_AVILABLE_ITEMS:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          totalItems: payload.total,
          activePage: payload.activePage,
          showedItems: payload.showedItems,
        },
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
    case SEARCH_ITEM:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          showedItems: payload.showedItems,
          totalItems: payload.totalItems,
        },
        loading: false
      }
    case NEXT_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          activePage: payload.activePage,
          showedItems: payload.showedItems
        },
        loading: false
      }
    case SHOW_BY_CATEGORY:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          totalItems: payload.total,
          showedItems: payload.showedItems,
          activeCategory: payload.activeCategory
        },
        loading: false
      }
    default:
      return state;
  }
}