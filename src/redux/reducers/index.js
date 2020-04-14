import { combineReducers } from 'redux';
import shop from './shop';
import auth from './auth';
import cart from './cart';

export default combineReducers({
  shop, auth, cart
});