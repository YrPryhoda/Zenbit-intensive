import {
  LOGIN, LOGOUT, REGISTER, 
  EVENT_MESSAGE, REMOVE_EVENT_MESSAGE
} from '../types';

const initialState = {
  user: {},
  isLogin: false,
  loading: true,
  eventMsg: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload,
        isLogin: true,
        loading: false
      }
    case REGISTER:
      return {
        ...state,
        loading: false
      }
    case LOGOUT:
      return {
        ...state,
        user: {},
        isLogin: false,
        loading: false
      }
    case EVENT_MESSAGE:
      return {
        ...state,
        eventMsg: [...state.eventMsg, payload],
        loading: false
      }
    case REMOVE_EVENT_MESSAGE:
      const newEvents = [...state.eventMsg];
      newEvents.shift();
      return {
        ...state,
        eventMsg: newEvents,
        loading: false
      }
    default:
      return state;
  }
}