import {
  LOGIN, LOGOUT,
  LOGIN_ERROR, REMOVE_LOGIN_ERROR
} from  '../types';

const initialState = {
  user: {},
  isLogin: true,
  loading: true,
  errors: null
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOGIN: 
    return {
      ...state,
      user: payload,
      isLogin: true,
      loading: false
    }
    case LOGOUT: 
    return {
      ...state,
      user: {},
      isLogin: false,
      loading: false
    }
    case LOGIN_ERROR: 
    return {
      ...state,
      errors: payload,
      loading: false
    }
    case REMOVE_LOGIN_ERROR:
      return {
        ...state,
        errors: null,
        loading: false
      }
    default:
      return state;
  }
}